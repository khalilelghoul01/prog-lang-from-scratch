// Generated from grammar/babel.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ConstantExpressionContext } from "./babelParser";
import { IdentifierExpressionContext } from "./babelParser";
import { TernaryExpressionContext } from "./babelParser";
import { ParenthesizedExpressionContext } from "./babelParser";
import { NotExpressionContext } from "./babelParser";
import { NegativeExpressionContext } from "./babelParser";
import { MultiplicativeExpressionContext } from "./babelParser";
import { AdditiveExpressionContext } from "./babelParser";
import { ComparativeExpressionContext } from "./babelParser";
import { BooleanExpressionContext } from "./babelParser";
import { ArrayExpressionContext } from "./babelParser";
import { ObjectExpressionContext } from "./babelParser";
import { FunctionExpressionContext } from "./babelParser";
import { FunctionCallExpressionContext } from "./babelParser";
import { ProgramContext } from "./babelParser";
import { LineContext } from "./babelParser";
import { StatementContext } from "./babelParser";
import { AssignmentContext } from "./babelParser";
import { ReassignmentContext } from "./babelParser";
import { AssignKeyContext } from "./babelParser";
import { IfStatementContext } from "./babelParser";
import { BlockContext } from "./babelParser";
import { ElseStatementContext } from "./babelParser";
import { WhileStatementContext } from "./babelParser";
import { ExpressionContext } from "./babelParser";
import { MultOpContext } from "./babelParser";
import { AddOpContext } from "./babelParser";
import { CompreOpContext } from "./babelParser";
import { BoolOpContext } from "./babelParser";
import { ConstantContext } from "./babelParser";
import { ArrayContext } from "./babelParser";
import { ObjectContext } from "./babelParser";
import { CommaContext } from "./babelParser";
import { FunctionContext } from "./babelParser";
import { ReturnStatementContext } from "./babelParser";
import { FunctionCallContext } from "./babelParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `babelParser`.
 */
export interface babelListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `constantExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `constantExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `notExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `notExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `negativeExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNegativeExpression?: (ctx: NegativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `negativeExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNegativeExpression?: (ctx: NegativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `additiveExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `comparativeExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterComparativeExpression?: (ctx: ComparativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `comparativeExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitComparativeExpression?: (ctx: ComparativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArrayExpression?: (ctx: ArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `objectExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterObjectExpression?: (ctx: ObjectExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `objectExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitObjectExpression?: (ctx: ObjectExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.reassignment`.
	 * @param ctx the parse tree
	 */
	enterReassignment?: (ctx: ReassignmentContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.reassignment`.
	 * @param ctx the parse tree
	 */
	exitReassignment?: (ctx: ReassignmentContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.assignKey`.
	 * @param ctx the parse tree
	 */
	enterAssignKey?: (ctx: AssignKeyContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.assignKey`.
	 * @param ctx the parse tree
	 */
	exitAssignKey?: (ctx: AssignKeyContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.multOp`.
	 * @param ctx the parse tree
	 */
	enterMultOp?: (ctx: MultOpContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.multOp`.
	 * @param ctx the parse tree
	 */
	exitMultOp?: (ctx: MultOpContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.addOp`.
	 * @param ctx the parse tree
	 */
	enterAddOp?: (ctx: AddOpContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.addOp`.
	 * @param ctx the parse tree
	 */
	exitAddOp?: (ctx: AddOpContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.compreOp`.
	 * @param ctx the parse tree
	 */
	enterCompreOp?: (ctx: CompreOpContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.compreOp`.
	 * @param ctx the parse tree
	 */
	exitCompreOp?: (ctx: CompreOpContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.boolOp`.
	 * @param ctx the parse tree
	 */
	enterBoolOp?: (ctx: BoolOpContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.boolOp`.
	 * @param ctx the parse tree
	 */
	exitBoolOp?: (ctx: BoolOpContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.comma`.
	 * @param ctx the parse tree
	 */
	enterComma?: (ctx: CommaContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.comma`.
	 * @param ctx the parse tree
	 */
	exitComma?: (ctx: CommaContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `babelParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `babelParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
}

