// Generated from grammar/babel.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `babelParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface babelVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `constantExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `notExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `negativeExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegativeExpression?: (ctx: NegativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparativeExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparativeExpression?: (ctx: ComparativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `objectExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectExpression?: (ctx: ObjectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.reassignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReassignment?: (ctx: ReassignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.assignKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignKey?: (ctx: AssignKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.multOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultOp?: (ctx: MultOpContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.addOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOp?: (ctx: AddOpContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.compreOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompreOp?: (ctx: CompreOpContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.boolOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolOp?: (ctx: BoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.comma`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComma?: (ctx: CommaContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `babelParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
}

