import {
  ArrayContext,
  ArrayExpressionContext,
  FunctionCallExpressionContext,
  FunctionContext,
  FunctionExpressionContext,
  ObjectExpressionContext,
  ReturnStatementContext,
  TernaryExpressionContext,
  WhileStatementContext,
} from "./../core/babelParser";
import {
  evaluateType,
  functionObj,
  predictType,
  Result,
  ValueType,
} from "./values";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  ConstantExpressionContext,
  IdentifierExpressionContext,
  ParenthesizedExpressionContext,
  NotExpressionContext,
  NegativeExpressionContext,
  MultiplicativeExpressionContext,
  AdditiveExpressionContext,
  ComparativeExpressionContext,
  BooleanExpressionContext,
  ProgramContext,
  LineContext,
  StatementContext,
  AssignmentContext,
  ReassignmentContext,
  ExpressionContext,
  ConstantContext,
  IfStatementContext,
  BlockContext,
  ElseStatementContext,
} from "../core/babelParser";
import { babelVisitor } from "./../core/babelVisitor";
import Envirement from "./envirement";
import { additiveOperation } from "./operations/addOp";
import { multiplictiveOperation } from "./operations/mulOp";
import { comparativeOperation } from "./operations/compareOp";
import { boolOperation } from "./operations/boolOp";

export class BabelInterpreter implements babelVisitor<Result> {
  evaluateConstantExpression: (
    ctx: ConstantExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const constant = ctx.constant().text;
    const type = predictType(constant) as Result["type"];
    const value = evaluateType(type, constant);
    return value;
  };
  evaluateIdentifierExpression: (
    ctx: IdentifierExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    return env.lookupVar(ctx.text);
  };
  evaluateParenthesizedExpression: (
    ctx: ParenthesizedExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    return this.evaluateExpression(ctx.expression(), env);
  };
  evaluateNotExpression: (
    ctx: NotExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const expression = this.evaluateExpression(ctx.expression(), env);
    if (expression.type !== "boolean") {
      throw new Error("Not expression can only be applied to boolean");
    }
    return {
      type: "boolean",
      value: !expression.value,
    };
  };
  evaluateNegativeExpression: (
    ctx: NegativeExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const expression = this.evaluateExpression(ctx.expression(), env);
    if (expression.type !== "number") {
      throw new Error("Negative expression can only be applied to numbers");
    }
    return {
      type: "number",
      value: -(expression.value ?? 0),
    };
  };
  evaluateMultiplicativeExpression: (
    ctx: MultiplicativeExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const left = this.evaluateExpression(ctx.expression(0), env);
    const right = this.evaluateExpression(ctx.expression(1), env);
    const op = ctx.multOp().text;
    return multiplictiveOperation(left, right, op);
  };
  evaluateAdditiveExpression: (
    ctx: AdditiveExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const left = this.evaluateExpression(ctx.expression(0), env);
    const right = this.evaluateExpression(ctx.expression(1), env);
    const op = ctx.addOp().text;
    return additiveOperation(left, right, op);
  };
  evaluateComparativeExpression: (
    ctx: ComparativeExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const left = this.evaluateExpression(ctx.expression(0), env);
    const right = this.evaluateExpression(ctx.expression(1), env);
    const op = ctx.compreOp().text;
    return comparativeOperation(left, right, op);
  };
  evaluateBooleanExpression: (
    ctx: BooleanExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const left = this.evaluateExpression(ctx.expression(0), env);
    const right = this.evaluateExpression(ctx.expression(1), env);
    const op = ctx.boolOp().text;
    return boolOperation(left, right, op);
  };
  evaluateProgram: (ctx: ProgramContext, env: Envirement) => Result = (
    ctx,
    env
  ) => {
    const lines = ctx.line();
    const results = lines.map((line) => this.evaluateLine(line, env));
    return results[results.length - 1];
  };
  evaluateLine: (ctx: LineContext, env: Envirement) => Result = (ctx, env) => {
    const statement = ctx.statement();
    return this.evaluateStatement(statement, env);
  };

  evaluateStatement: (ctx: StatementContext, env: Envirement) => Result = (
    ctx,
    env
  ) => {
    const assignment = ctx.assignment();
    const reassignment = ctx.reassignment();
    const expression = ctx.expression();
    const ifStatement = ctx.ifStatement();
    const returnStatement = ctx.returnStatement();
    const whileStatement = ctx.whileStatement();
    if (assignment) {
      return this.evaluateAssignment(assignment, env);
    }
    if (reassignment) {
      return this.evaluateReassignment(reassignment, env);
    }
    if (expression) {
      return this.evaluateExpression(expression, env);
    }
    if (ifStatement) {
      return this.evaluateIfStatement(ifStatement, env);
    }
    if (returnStatement) {
      return this.evaluateReturnStatement(returnStatement, env);
    }
    if (whileStatement) {
      return this.evaluateWhileStatement(whileStatement, env);
    }

    return {
      type: "null",
      value: null,
    };
  };

  evaluateWhileStatement: (
    ctx: WhileStatementContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    let result: Result = {
      type: "null",
      value: null,
    };
    while (this.evaluateExpression(ctx.expression(), env).value) {
      const lines = ctx.block().line();
      const results = lines.map((line) => this.evaluateLine(line, env));
      result = results[results.length - 1];
    }
    return result;
  };

  evaluateReturnStatement: (
    ctx: ReturnStatementContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const expression = ctx.expression();
    if (expression) {
      return this.evaluateExpression(expression, env);
    }
    return {
      type: "null",
      value: null,
    };
  };

  evaluateIfStatement: (ctx: IfStatementContext, env: Envirement) => Result = (
    ctx,
    env
  ) => {
    const ifLocalEnv = new Envirement(env);
    const condition = this.evaluateExpression(ctx.expression(), env);
    const ifBlock = ctx.block();
    const elseBlock = ctx.elseStatement();
    if (condition.type !== "boolean") {
      throw new Error("Condition must be boolean");
    }
    if (condition.value) {
      return this.evaluateBlock(ifBlock, ifLocalEnv);
    } else {
      if (elseBlock) {
        return this.evaluateElseStatement(elseBlock, env);
      }
    }
    return {
      type: "null",
      value: null,
    };
  };

  evaluateElseStatement: (
    ctx: ElseStatementContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const elseLocalEnv = new Envirement(env);
    const elseBlock = ctx.block();
    const elseIfStatement = ctx.ifStatement();
    if (elseIfStatement) {
      return this.evaluateIfStatement(elseIfStatement, elseLocalEnv);
    } else {
      return this.evaluateBlock(elseBlock!, elseLocalEnv);
    }
  };

  evaluateBlock: (ctx: BlockContext, env: Envirement) => Result = (
    ctx,
    env
  ) => {
    const lines = ctx.line();
    // const results = lines.map((line) => this.evaluateLine(line, env));
    const resutls = [] as Result[];
    for (const line of lines) {
      if (line.statement().returnStatement()) {
        return this.evaluateLine(line, env);
      }
      resutls.push(this.evaluateLine(line, env));
    }
    return resutls[resutls.length - 1];
  };
  evaluateAssignment: (ctx: AssignmentContext, env: Envirement) => Result = (
    ctx,
    env
  ) => {
    const assignKey = ctx.assignKey();
    const expression = ctx.expression();
    const key = assignKey.text;
    const name = ctx.IDENTIFIER().text;
    const value = this.evaluateExpression(expression, env);
    const isConst = key === "const";
    const variable = env.declareVar(name, value, isConst);
    return variable;
  };
  evaluateReassignment: (ctx: ReassignmentContext, env: Envirement) => Result =
    (ctx, env) => {
      const name = ctx.IDENTIFIER().text;
      const expression = ctx.expression();
      const value = this.evaluateExpression(expression, env);
      const variable = env.assignVar(name, value);
      return variable;
    };
  evaluateExpression: (ctx: ExpressionContext, env: Envirement) => Result = (
    ctx,
    env
  ) => {
    const test = ctx instanceof FunctionCallExpressionContext;

    if (ctx instanceof ConstantExpressionContext) {
      return this.evaluateConstantExpression(
        ctx as ConstantExpressionContext,
        env
      );
    }
    if (ctx instanceof AdditiveExpressionContext) {
      return this.evaluateAdditiveExpression(
        ctx as AdditiveExpressionContext,
        env
      );
    }
    if (ctx instanceof MultiplicativeExpressionContext) {
      return this.evaluateMultiplicativeExpression(
        ctx as MultiplicativeExpressionContext,
        env
      );
    }

    if (ctx instanceof IdentifierExpressionContext) {
      return this.evaluateIdentifierExpression(
        ctx as IdentifierExpressionContext,
        env
      );
    }
    if (ctx instanceof ParenthesizedExpressionContext) {
      return this.evaluateParenthesizedExpression(
        ctx as ParenthesizedExpressionContext,
        env
      );
    }

    if (ctx instanceof NotExpressionContext) {
      return this.evaluateNotExpression(ctx as NotExpressionContext, env);
    }
    if (ctx instanceof NegativeExpressionContext) {
      return this.evaluateNegativeExpression(
        ctx as NegativeExpressionContext,
        env
      );
    }
    if (ctx instanceof ComparativeExpressionContext) {
      return this.evaluateComparativeExpression(
        ctx as ComparativeExpressionContext,
        env
      );
    }
    if (ctx instanceof BooleanExpressionContext) {
      return this.evaluateBooleanExpression(
        ctx as BooleanExpressionContext,
        env
      );
    }

    if (ctx instanceof TernaryExpressionContext) {
      return this.evaluateTernaryExpression(
        ctx as TernaryExpressionContext,
        env
      );
    }

    if (ctx instanceof ArrayExpressionContext) {
      return this.evaluateArrayExpression(ctx as ArrayExpressionContext, env);
    }

    if (ctx instanceof ObjectExpressionContext) {
      return this.evaluateObjectExpression(ctx as ObjectExpressionContext, env);
    }

    if (ctx instanceof FunctionExpressionContext) {
      return this.evaluateFunctionExpression(
        ctx as FunctionExpressionContext,
        env
      );
    }

    if (ctx instanceof FunctionCallExpressionContext) {
      return this.evaluateFunctionCallExpression(
        ctx as FunctionCallExpressionContext,
        env
      );
    }

    return {
      type: "null",
      value: null,
    };
  };
  evaluateFunctionCallExpression: (
    ctx: FunctionCallExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const functionCall = ctx.functionCall();
    const name = functionCall.IDENTIFIER().text;
    const args = functionCall.expression();

    const functionArgs = args
      ? args.map((arg) => this.evaluateExpression(arg, env))
      : null;
    const func = env.lookupVar(name);
    if (func.type === "function") {
      const funcEnv = new Envirement(env);
      (func.value as functionObj).parameters.forEach((arg, index) => {
        if (functionArgs) {
          funcEnv.declareVar(arg, functionArgs[index], true);
        }
      });
      const result = this.evaluateBlock(
        (func.value as functionObj).body,
        funcEnv
      );
      return result;
    } else if (func.type === "syscall") {
      if (functionArgs) {
        const listArgs = functionArgs.map((arg) => arg);
        console.log(listArgs);
        const result = (func.value as Function)(listArgs);
        return result;
      }
    } else {
      throw new Error("Not a function");
    }
  };

  evaluateFunctionExpression: (
    ctx: FunctionExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const functionDeclaration = ctx.function();
    return this.evaluateFunction(functionDeclaration, env);
  };

  evaluateFunction: (ctx: FunctionContext, env: Envirement) => Result = (
    ctx,
    env
  ) => {
    const parameters = ctx.IDENTIFIER();
    const parameterNames = parameters.map((parameter) => parameter.text);
    return {
      type: "function",
      value: {
        parameters: parameterNames,
        body: ctx.block(),
      },
    };
  };

  evaluateObjectExpression: (
    ctx: ObjectExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const object = ctx.object();
    const keyValues = object.IDENTIFIER().map((key) => key.text);
    const stringNode = object.STRING()?.map((key) => key.text);
    console.log(stringNode);

    const values = object.expression().map((value) => {
      return this.evaluateExpression(value, env);
    });
    const result: { [key: string]: Result } = {};
    keyValues.forEach((keyValue) => {
      const key = keyValue;
      const value = values.shift()!;
      result[key] = value;
    });
    stringNode?.forEach((keyValue) => {
      const key = keyValue.slice(1, -1);
      const value = values.shift()!;
      result[key] = value;
    });
    return {
      type: "object",
      value: result,
    };
  };

  evaluateArrayExpression: (
    ctx: ArrayExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const array = ctx.array();
    return this.evaluateArray(array, env);
  };

  evaluateArray: (ctx: ArrayContext, env: Envirement) => Result = (
    ctx,
    env
  ) => {
    const elements = ctx.expression();
    const array = elements.map((element) =>
      this.evaluateExpression(element, env)
    );
    return {
      type: "array",
      value: array,
    };
  };
  evaluateTernaryExpression: (
    ctx: TernaryExpressionContext,
    env: Envirement
  ) => Result = (ctx, env) => {
    const condition = this.evaluateExpression(ctx.expression(0), env);
    const trueExpression = this.evaluateExpression(ctx.expression(1), env);
    const falseExpression = this.evaluateExpression(ctx.expression(2), env);
    if (condition.type !== "boolean") {
      throw new Error(
        "Condition must be boolean in ternary expression: you have to use '(expression) ? expression : expression'"
      );
    }
    if (condition.value) {
      return trueExpression;
    }
    return falseExpression;
  };
  evaluateConstant: (ctx: ConstantContext) => Result = (ctx) => {
    const text = ctx.text;
    const type = predictType(text);
    return {
      type: type as Result["type"],
      value: text,
    };
  };
  visitTree(tree: ParseTree, env: Envirement): Result {
    return this.visitChildrenTree(tree as RuleNode, env);
  }
  visit(tree: ParseTree): Result {
    return {
      type: "null",
      value: null,
    };
  }
  visitChildrenTree(node: RuleNode, env: Envirement): Result {
    if (node instanceof ProgramContext) {
      return this.evaluateProgram(node, env);
    }
    if (node instanceof LineContext) {
      return this.evaluateLine(node, env);
    }
    if (node instanceof StatementContext) {
      return this.evaluateStatement(node, env);
    }
    if (node instanceof AssignmentContext) {
      return this.evaluateAssignment(node, env);
    }
    if (node instanceof ReassignmentContext) {
      return this.evaluateReassignment(node, env);
    }
    if (node instanceof ExpressionContext) {
      return this.evaluateExpression(node, env);
    }
    return {
      type: "null",
      value: null,
    };
  }
  visitChildren(node: RuleNode): Result {
    return {
      type: "null",
      value: null,
    };
  }
  visitTerminal(node: TerminalNode): Result {
    return {
      type: "null",
      value: null,
    };
  }
  visitErrorNode(node: ErrorNode): Result {
    return {
      type: "null",
      value: null,
    };
  }
}
