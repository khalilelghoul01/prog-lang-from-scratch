// Generated from grammar/babel.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { babelListener } from "./babelListener";
import { babelVisitor } from "./babelVisitor";


export class babelParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly BOOL = 33;
	public static readonly STRING = 34;
	public static readonly FLOAT = 35;
	public static readonly INTEGER = 36;
	public static readonly CHAR = 37;
	public static readonly WS = 38;
	public static readonly COMMENT = 39;
	public static readonly LINE_COMMENT = 40;
	public static readonly IDENTIFIER = 41;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_assignment = 3;
	public static readonly RULE_reassignment = 4;
	public static readonly RULE_assignKey = 5;
	public static readonly RULE_ifStatement = 6;
	public static readonly RULE_block = 7;
	public static readonly RULE_elseStatement = 8;
	public static readonly RULE_whileStatement = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_multOp = 11;
	public static readonly RULE_addOp = 12;
	public static readonly RULE_compreOp = 13;
	public static readonly RULE_boolOp = 14;
	public static readonly RULE_constant = 15;
	public static readonly RULE_array = 16;
	public static readonly RULE_object = 17;
	public static readonly RULE_comma = 18;
	public static readonly RULE_function = 19;
	public static readonly RULE_returnStatement = 20;
	public static readonly RULE_functionCall = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "statement", "assignment", "reassignment", "assignKey", 
		"ifStatement", "block", "elseStatement", "whileStatement", "expression", 
		"multOp", "addOp", "compreOp", "boolOp", "constant", "array", "object", 
		"comma", "function", "returnStatement", "functionCall",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'let'", "'const'", "'if'", "'('", "')'", "'{'", 
		"'}'", "'else'", "'while'", "'?'", "':'", "'!'", "'-'", "'*'", "'/'", 
		"'%'", "'+'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", 
		"'['", "','", "']'", "'function'", "'return'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "BOOL", "STRING", 
		"FLOAT", "INTEGER", "CHAR", "WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(babelParser._LITERAL_NAMES, babelParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return babelParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "babel.g4"; }

	// @Override
	public get ruleNames(): string[] { return babelParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return babelParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(babelParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, babelParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << babelParser.T__2) | (1 << babelParser.T__3) | (1 << babelParser.T__4) | (1 << babelParser.T__5) | (1 << babelParser.T__7) | (1 << babelParser.T__10) | (1 << babelParser.T__13) | (1 << babelParser.T__14) | (1 << babelParser.T__27) | (1 << babelParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (babelParser.T__31 - 32)) | (1 << (babelParser.BOOL - 32)) | (1 << (babelParser.STRING - 32)) | (1 << (babelParser.FLOAT - 32)) | (1 << (babelParser.INTEGER - 32)) | (1 << (babelParser.CHAR - 32)) | (1 << (babelParser.IDENTIFIER - 32)))) !== 0)) {
				{
				{
				this.state = 44;
				this.line();
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			this.match(babelParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, babelParser.RULE_line);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, babelParser.RULE_statement);
		try {
			this.state = 64;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case babelParser.T__2:
			case babelParser.T__3:
			case babelParser.T__5:
			case babelParser.T__7:
			case babelParser.T__13:
			case babelParser.T__14:
			case babelParser.T__27:
			case babelParser.T__30:
			case babelParser.T__31:
			case babelParser.BOOL:
			case babelParser.STRING:
			case babelParser.FLOAT:
			case babelParser.INTEGER:
			case babelParser.CHAR:
			case babelParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 58;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 54;
					this.assignment();
					}
					break;

				case 2:
					{
					this.state = 55;
					this.reassignment();
					}
					break;

				case 3:
					{
					this.state = 56;
					this.expression(0);
					}
					break;

				case 4:
					{
					this.state = 57;
					this.returnStatement();
					}
					break;
				}
				this.state = 60;
				this.match(babelParser.T__0);
				}
				}
				break;
			case babelParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 62;
				this.ifStatement();
				}
				break;
			case babelParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 63;
				this.whileStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, babelParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.assignKey();
			this.state = 67;
			this.match(babelParser.IDENTIFIER);
			this.state = 68;
			this.match(babelParser.T__1);
			this.state = 69;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reassignment(): ReassignmentContext {
		let _localctx: ReassignmentContext = new ReassignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, babelParser.RULE_reassignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(babelParser.IDENTIFIER);
			this.state = 72;
			this.match(babelParser.T__1);
			this.state = 73;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignKey(): AssignKeyContext {
		let _localctx: AssignKeyContext = new AssignKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, babelParser.RULE_assignKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			_la = this._input.LA(1);
			if (!(_la === babelParser.T__2 || _la === babelParser.T__3)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, babelParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(babelParser.T__4);
			this.state = 78;
			this.match(babelParser.T__5);
			this.state = 79;
			this.expression(0);
			this.state = 80;
			this.match(babelParser.T__6);
			this.state = 81;
			this.block();
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === babelParser.T__9) {
				{
				this.state = 82;
				this.elseStatement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, babelParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(babelParser.T__7);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << babelParser.T__2) | (1 << babelParser.T__3) | (1 << babelParser.T__4) | (1 << babelParser.T__5) | (1 << babelParser.T__7) | (1 << babelParser.T__10) | (1 << babelParser.T__13) | (1 << babelParser.T__14) | (1 << babelParser.T__27) | (1 << babelParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (babelParser.T__31 - 32)) | (1 << (babelParser.BOOL - 32)) | (1 << (babelParser.STRING - 32)) | (1 << (babelParser.FLOAT - 32)) | (1 << (babelParser.INTEGER - 32)) | (1 << (babelParser.CHAR - 32)) | (1 << (babelParser.IDENTIFIER - 32)))) !== 0)) {
				{
				{
				this.state = 86;
				this.line();
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 92;
			this.match(babelParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseStatement(): ElseStatementContext {
		let _localctx: ElseStatementContext = new ElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, babelParser.RULE_elseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(babelParser.T__9);
			this.state = 97;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case babelParser.T__7:
				{
				this.state = 95;
				this.block();
				}
				break;
			case babelParser.T__4:
				{
				this.state = 96;
				this.ifStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, babelParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(babelParser.T__10);
			this.state = 100;
			this.match(babelParser.T__5);
			this.state = 101;
			this.expression(0);
			this.state = 102;
			this.match(babelParser.T__6);
			this.state = 103;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, babelParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				_localctx = new ConstantExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 106;
				this.constant();
				}
				break;

			case 2:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 107;
				this.match(babelParser.IDENTIFIER);
				}
				break;

			case 3:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 108;
				this.match(babelParser.T__5);
				this.state = 109;
				this.expression(0);
				this.state = 110;
				this.match(babelParser.T__6);
				}
				break;

			case 4:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 112;
				this.match(babelParser.T__13);
				this.state = 113;
				this.expression(10);
				}
				break;

			case 5:
				{
				_localctx = new NegativeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 114;
				this.match(babelParser.T__14);
				this.state = 115;
				this.expression(9);
				}
				break;

			case 6:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 116;
				this.array();
				}
				break;

			case 7:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 117;
				this.object();
				}
				break;

			case 8:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
				this.function();
				}
				break;

			case 9:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 119;
				this.functionCall();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 146;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 144;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new TernaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, babelParser.RULE_expression);
						this.state = 122;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 123;
						this.match(babelParser.T__11);
						this.state = 124;
						this.expression(0);
						this.state = 125;
						this.match(babelParser.T__12);
						this.state = 126;
						this.expression(13);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, babelParser.RULE_expression);
						this.state = 128;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 129;
						this.multOp();
						this.state = 130;
						this.expression(9);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, babelParser.RULE_expression);
						this.state = 132;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 133;
						this.addOp();
						this.state = 134;
						this.expression(8);
						}
						break;

					case 4:
						{
						_localctx = new ComparativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, babelParser.RULE_expression);
						this.state = 136;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 137;
						this.compreOp();
						this.state = 138;
						this.expression(7);
						}
						break;

					case 5:
						{
						_localctx = new BooleanExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, babelParser.RULE_expression);
						this.state = 140;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 141;
						this.boolOp();
						this.state = 142;
						this.expression(6);
						}
						break;
					}
					}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multOp(): MultOpContext {
		let _localctx: MultOpContext = new MultOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, babelParser.RULE_multOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << babelParser.T__15) | (1 << babelParser.T__16) | (1 << babelParser.T__17))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addOp(): AddOpContext {
		let _localctx: AddOpContext = new AddOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, babelParser.RULE_addOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			_la = this._input.LA(1);
			if (!(_la === babelParser.T__14 || _la === babelParser.T__18)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compreOp(): CompreOpContext {
		let _localctx: CompreOpContext = new CompreOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, babelParser.RULE_compreOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << babelParser.T__19) | (1 << babelParser.T__20) | (1 << babelParser.T__21) | (1 << babelParser.T__22) | (1 << babelParser.T__23) | (1 << babelParser.T__24))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolOp(): BoolOpContext {
		let _localctx: BoolOpContext = new BoolOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, babelParser.RULE_boolOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			_la = this._input.LA(1);
			if (!(_la === babelParser.T__25 || _la === babelParser.T__26)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, babelParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			_la = this._input.LA(1);
			if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (babelParser.BOOL - 33)) | (1 << (babelParser.STRING - 33)) | (1 << (babelParser.FLOAT - 33)) | (1 << (babelParser.INTEGER - 33)) | (1 << (babelParser.CHAR - 33)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, babelParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(babelParser.T__27);
			{
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << babelParser.T__5) | (1 << babelParser.T__7) | (1 << babelParser.T__13) | (1 << babelParser.T__14) | (1 << babelParser.T__27) | (1 << babelParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (babelParser.BOOL - 33)) | (1 << (babelParser.STRING - 33)) | (1 << (babelParser.FLOAT - 33)) | (1 << (babelParser.INTEGER - 33)) | (1 << (babelParser.CHAR - 33)) | (1 << (babelParser.IDENTIFIER - 33)))) !== 0)) {
				{
				this.state = 160;
				this.expression(0);
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === babelParser.T__28) {
					{
					{
					this.state = 161;
					this.match(babelParser.T__28);
					this.state = 162;
					this.expression(0);
					}
					}
					this.state = 167;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
			this.state = 170;
			this.match(babelParser.T__29);
			{
			this.state = 172;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 171;
				this.match(babelParser.T__28);
				}
				break;
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, babelParser.RULE_object);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(babelParser.T__7);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === babelParser.STRING || _la === babelParser.IDENTIFIER) {
				{
				this.state = 175;
				_la = this._input.LA(1);
				if (!(_la === babelParser.STRING || _la === babelParser.IDENTIFIER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 176;
				this.match(babelParser.T__12);
				this.state = 177;
				this.expression(0);
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 178;
						this.match(babelParser.T__28);
						this.state = 179;
						_la = this._input.LA(1);
						if (!(_la === babelParser.STRING || _la === babelParser.IDENTIFIER)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 180;
						this.match(babelParser.T__12);
						this.state = 181;
						this.expression(0);
						}
						}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
				}
			}

			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === babelParser.T__28) {
				{
				this.state = 189;
				this.match(babelParser.T__28);
				}
			}

			this.state = 192;
			this.match(babelParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comma(): CommaContext {
		let _localctx: CommaContext = new CommaContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, babelParser.RULE_comma);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(babelParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, babelParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(babelParser.T__30);
			this.state = 197;
			this.match(babelParser.T__5);
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === babelParser.IDENTIFIER) {
				{
				this.state = 198;
				this.match(babelParser.IDENTIFIER);
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === babelParser.T__28) {
					{
					{
					this.state = 199;
					this.match(babelParser.T__28);
					this.state = 200;
					this.match(babelParser.IDENTIFIER);
					}
					}
					this.state = 205;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 208;
			this.match(babelParser.T__6);
			this.state = 209;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, babelParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(babelParser.T__31);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << babelParser.T__5) | (1 << babelParser.T__7) | (1 << babelParser.T__13) | (1 << babelParser.T__14) | (1 << babelParser.T__27) | (1 << babelParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (babelParser.BOOL - 33)) | (1 << (babelParser.STRING - 33)) | (1 << (babelParser.FLOAT - 33)) | (1 << (babelParser.INTEGER - 33)) | (1 << (babelParser.CHAR - 33)) | (1 << (babelParser.IDENTIFIER - 33)))) !== 0)) {
				{
				this.state = 212;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, babelParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.match(babelParser.IDENTIFIER);
			this.state = 216;
			this.match(babelParser.T__5);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << babelParser.T__5) | (1 << babelParser.T__7) | (1 << babelParser.T__13) | (1 << babelParser.T__14) | (1 << babelParser.T__27) | (1 << babelParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (babelParser.BOOL - 33)) | (1 << (babelParser.STRING - 33)) | (1 << (babelParser.FLOAT - 33)) | (1 << (babelParser.INTEGER - 33)) | (1 << (babelParser.CHAR - 33)) | (1 << (babelParser.IDENTIFIER - 33)))) !== 0)) {
				{
				this.state = 217;
				this.expression(0);
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === babelParser.T__28) {
					{
					{
					this.state = 218;
					this.match(babelParser.T__28);
					this.state = 219;
					this.expression(0);
					}
					}
					this.state = 224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 227;
			this.match(babelParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);

		case 4:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\xE8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04=\n\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04C\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x05\bV\n\b\x03\t\x03\t\x07\tZ\n\t\f\t\x0E\t]\v\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x05\nd\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f{\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x07\f\x93\n\f\f\f\x0E\f\x96\v\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x07\x12\xA6\n\x12\f\x12\x0E\x12\xA9\v\x12\x05\x12\xAB\n\x12\x03\x12" +
		"\x03\x12\x05\x12\xAF\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x07\x13\xB9\n\x13\f\x13\x0E\x13\xBC\v\x13\x05\x13" +
		"\xBE\n\x13\x03\x13\x05\x13\xC1\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\xCC\n\x15\f\x15\x0E\x15\xCF" +
		"\v\x15\x05\x15\xD1\n\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16" +
		"\xD8\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\xDF\n\x17\f" +
		"\x17\x0E\x17\xE2\v\x17\x05\x17\xE4\n\x17\x03\x17\x03\x17\x03\x17\x02\x02" +
		"\x03\x16\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02\x02\t\x03\x02\x05\x06\x03\x02\x12\x14\x04\x02\x11" +
		"\x11\x15\x15\x03\x02\x16\x1B\x03\x02\x1C\x1D\x03\x02#\'\x04\x02$$++\x02" +
		"\xF2\x021\x03\x02\x02\x02\x046\x03\x02\x02\x02\x06B\x03\x02\x02\x02\b" +
		"D\x03\x02\x02\x02\nI\x03\x02\x02\x02\fM\x03\x02\x02\x02\x0EO\x03\x02\x02" +
		"\x02\x10W\x03\x02\x02\x02\x12`\x03\x02\x02\x02\x14e\x03\x02\x02\x02\x16" +
		"z\x03\x02\x02\x02\x18\x97\x03\x02\x02\x02\x1A\x99\x03\x02\x02\x02\x1C" +
		"\x9B\x03\x02\x02\x02\x1E\x9D\x03\x02\x02\x02 \x9F\x03\x02\x02\x02\"\xA1" +
		"\x03\x02\x02\x02$\xB0\x03\x02\x02\x02&\xC4\x03\x02\x02\x02(\xC6\x03\x02" +
		"\x02\x02*\xD5\x03\x02\x02\x02,\xD9\x03\x02\x02\x02.0\x05\x04\x03\x02/" +
		".\x03\x02\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x02" +
		"24\x03\x02\x02\x0231\x03\x02\x02\x0245\x07\x02\x02\x035\x03\x03\x02\x02" +
		"\x0267\x05\x06\x04\x027\x05\x03\x02\x02\x028=\x05\b\x05\x029=\x05\n\x06" +
		"\x02:=\x05\x16\f\x02;=\x05*\x16\x02<8\x03\x02\x02\x02<9\x03\x02\x02\x02" +
		"<:\x03\x02\x02\x02<;\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x07\x03\x02\x02" +
		"?C\x03\x02\x02\x02@C\x05\x0E\b\x02AC\x05\x14\v\x02B<\x03\x02\x02\x02B" +
		"@\x03\x02\x02\x02BA\x03\x02\x02\x02C\x07\x03\x02\x02\x02DE\x05\f\x07\x02" +
		"EF\x07+\x02\x02FG\x07\x04\x02\x02GH\x05\x16\f\x02H\t\x03\x02\x02\x02I" +
		"J\x07+\x02\x02JK\x07\x04\x02\x02KL\x05\x16\f\x02L\v\x03\x02\x02\x02MN" +
		"\t\x02\x02\x02N\r\x03\x02\x02\x02OP\x07\x07\x02\x02PQ\x07\b\x02\x02QR" +
		"\x05\x16\f\x02RS\x07\t\x02\x02SU\x05\x10\t\x02TV\x05\x12\n\x02UT\x03\x02" +
		"\x02\x02UV\x03\x02\x02\x02V\x0F\x03\x02\x02\x02W[\x07\n\x02\x02XZ\x05" +
		"\x04\x03\x02YX\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\" +
		"\x03\x02\x02\x02\\^\x03\x02\x02\x02][\x03\x02\x02\x02^_\x07\v\x02\x02" +
		"_\x11\x03\x02\x02\x02`c\x07\f\x02\x02ad\x05\x10\t\x02bd\x05\x0E\b\x02" +
		"ca\x03\x02\x02\x02cb\x03\x02\x02\x02d\x13\x03\x02\x02\x02ef\x07\r\x02" +
		"\x02fg\x07\b\x02\x02gh\x05\x16\f\x02hi\x07\t\x02\x02ij\x05\x10\t\x02j" +
		"\x15\x03\x02\x02\x02kl\b\f\x01\x02l{\x05 \x11\x02m{\x07+\x02\x02no\x07" +
		"\b\x02\x02op\x05\x16\f\x02pq\x07\t\x02\x02q{\x03\x02\x02\x02rs\x07\x10" +
		"\x02\x02s{\x05\x16\f\ftu\x07\x11\x02\x02u{\x05\x16\f\vv{\x05\"\x12\x02" +
		"w{\x05$\x13\x02x{\x05(\x15\x02y{\x05,\x17\x02zk\x03\x02\x02\x02zm\x03" +
		"\x02\x02\x02zn\x03\x02\x02\x02zr\x03\x02\x02\x02zt\x03\x02\x02\x02zv\x03" +
		"\x02\x02\x02zw\x03\x02\x02\x02zx\x03\x02\x02\x02zy\x03\x02\x02\x02{\x94" +
		"\x03\x02\x02\x02|}\f\x0E\x02\x02}~\x07\x0E\x02\x02~\x7F\x05\x16\f\x02" +
		"\x7F\x80\x07\x0F\x02\x02\x80\x81\x05\x16\f\x0F\x81\x93\x03\x02\x02\x02" +
		"\x82\x83\f\n\x02\x02\x83\x84\x05\x18\r\x02\x84\x85\x05\x16\f\v\x85\x93" +
		"\x03\x02\x02\x02\x86\x87\f\t\x02\x02\x87\x88\x05\x1A\x0E\x02\x88\x89\x05" +
		"\x16\f\n\x89\x93\x03\x02\x02\x02\x8A\x8B\f\b\x02\x02\x8B\x8C\x05\x1C\x0F" +
		"\x02\x8C\x8D\x05\x16\f\t\x8D\x93\x03\x02\x02\x02\x8E\x8F\f\x07\x02\x02" +
		"\x8F\x90\x05\x1E\x10\x02\x90\x91\x05\x16\f\b\x91\x93\x03\x02\x02\x02\x92" +
		"|\x03\x02\x02\x02\x92\x82\x03\x02\x02\x02\x92\x86\x03\x02\x02\x02\x92" +
		"\x8A\x03\x02\x02\x02\x92\x8E\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94" +
		"\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x17\x03\x02\x02\x02\x96" +
		"\x94\x03\x02\x02\x02\x97\x98\t\x03\x02\x02\x98\x19\x03\x02\x02\x02\x99" +
		"\x9A\t\x04\x02\x02\x9A\x1B\x03\x02\x02\x02\x9B\x9C\t\x05\x02\x02\x9C\x1D" +
		"\x03\x02\x02\x02\x9D\x9E\t\x06\x02\x02\x9E\x1F\x03\x02\x02\x02\x9F\xA0" +
		"\t\x07\x02\x02\xA0!\x03\x02\x02\x02\xA1\xAA\x07\x1E\x02\x02\xA2\xA7\x05" +
		"\x16\f\x02\xA3\xA4\x07\x1F\x02\x02\xA4\xA6\x05\x16\f\x02\xA5\xA3\x03\x02" +
		"\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02" +
		"\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xA2\x03\x02" +
		"\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x07 " +
		"\x02\x02\xAD\xAF\x07\x1F\x02\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02" +
		"\x02\x02\xAF#\x03\x02\x02\x02\xB0\xBD\x07\n\x02\x02\xB1\xB2\t\b\x02\x02" +
		"\xB2\xB3\x07\x0F\x02\x02\xB3\xBA\x05\x16\f\x02\xB4\xB5\x07\x1F\x02\x02" +
		"\xB5\xB6\t\b\x02\x02\xB6\xB7\x07\x0F\x02\x02\xB7\xB9\x05\x16\f\x02\xB8" +
		"\xB4\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA" +
		"\xBB\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD" +
		"\xB1\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF" +
		"\xC1\x07\x1F\x02\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1" +
		"\xC2\x03\x02\x02\x02\xC2\xC3\x07\v\x02\x02\xC3%\x03\x02\x02\x02\xC4\xC5" +
		"\x07\x1F\x02\x02\xC5\'\x03\x02\x02\x02\xC6\xC7\x07!\x02\x02\xC7\xD0\x07" +
		"\b\x02\x02\xC8\xCD\x07+\x02\x02\xC9\xCA\x07\x1F\x02\x02\xCA\xCC\x07+\x02" +
		"\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02" +
		"\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02" +
		"\x02\xD0\xC8\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02" +
		"\x02\xD2\xD3\x07\t\x02\x02\xD3\xD4\x05\x10\t\x02\xD4)\x03\x02\x02\x02" +
		"\xD5\xD7\x07\"\x02\x02\xD6\xD8\x05\x16\f\x02\xD7\xD6\x03\x02\x02\x02\xD7" +
		"\xD8\x03\x02\x02\x02\xD8+\x03\x02\x02\x02\xD9\xDA\x07+\x02\x02\xDA\xE3" +
		"\x07\b\x02\x02\xDB\xE0\x05\x16\f\x02\xDC\xDD\x07\x1F\x02\x02\xDD\xDF\x05" +
		"\x16\f\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03" +
		"\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03" +
		"\x02\x02\x02\xE3\xDB\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03" +
		"\x02\x02\x02\xE5\xE6\x07\t\x02\x02\xE6-\x03\x02\x02\x02\x161<BU[cz\x92" +
		"\x94\xA7\xAA\xAE\xBA\xBD\xC0\xCD\xD0\xD7\xE0\xE3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!babelParser.__ATN) {
			babelParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(babelParser._serializedATN));
		}

		return babelParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(babelParser.EOF, 0); }
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_program; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_line; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public reassignment(): ReassignmentContext | undefined {
		return this.tryGetRuleContext(0, ReassignmentContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_statement; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public assignKey(): AssignKeyContext {
		return this.getRuleContext(0, AssignKeyContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(babelParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_assignment; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReassignmentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(babelParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_reassignment; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterReassignment) {
			listener.enterReassignment(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitReassignment) {
			listener.exitReassignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitReassignment) {
			return visitor.visitReassignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignKeyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_assignKey; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterAssignKey) {
			listener.enterAssignKey(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitAssignKey) {
			listener.exitAssignKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitAssignKey) {
			return visitor.visitAssignKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public elseStatement(): ElseStatementContext | undefined {
		return this.tryGetRuleContext(0, ElseStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_block; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_elseStatement; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterElseStatement) {
			listener.enterElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitElseStatement) {
			listener.exitElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitElseStatement) {
			return visitor.visitElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ConstantExpressionContext extends ExpressionContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(babelParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegativeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterNegativeExpression) {
			listener.enterNegativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitNegativeExpression) {
			listener.exitNegativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitNegativeExpression) {
			return visitor.visitNegativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public multOp(): MultOpContext {
		return this.getRuleContext(0, MultOpContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public addOp(): AddOpContext {
		return this.getRuleContext(0, AddOpContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparativeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public compreOp(): CompreOpContext {
		return this.getRuleContext(0, CompreOpContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterComparativeExpression) {
			listener.enterComparativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitComparativeExpression) {
			listener.exitComparativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitComparativeExpression) {
			return visitor.visitComparativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public boolOp(): BoolOpContext {
		return this.getRuleContext(0, BoolOpContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterBooleanExpression) {
			listener.enterBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitBooleanExpression) {
			listener.exitBooleanExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitBooleanExpression) {
			return visitor.visitBooleanExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterArrayExpression) {
			listener.enterArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitArrayExpression) {
			listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectExpressionContext extends ExpressionContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterObjectExpression) {
			listener.enterObjectExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitObjectExpression) {
			listener.exitObjectExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitObjectExpression) {
			return visitor.visitObjectExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionExpressionContext extends ExpressionContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_multOp; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterMultOp) {
			listener.enterMultOp(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitMultOp) {
			listener.exitMultOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitMultOp) {
			return visitor.visitMultOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_addOp; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterAddOp) {
			listener.enterAddOp(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitAddOp) {
			listener.exitAddOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitAddOp) {
			return visitor.visitAddOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompreOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_compreOp; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterCompreOp) {
			listener.enterCompreOp(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitCompreOp) {
			listener.exitCompreOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitCompreOp) {
			return visitor.visitCompreOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_boolOp; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterBoolOp) {
			listener.enterBoolOp(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitBoolOp) {
			listener.exitBoolOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitBoolOp) {
			return visitor.visitBoolOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(babelParser.INTEGER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(babelParser.FLOAT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(babelParser.STRING, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(babelParser.BOOL, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(babelParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_constant; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_array; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(babelParser.IDENTIFIER);
		} else {
			return this.getToken(babelParser.IDENTIFIER, i);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(babelParser.STRING);
		} else {
			return this.getToken(babelParser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_object; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommaContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_comma; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterComma) {
			listener.enterComma(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitComma) {
			listener.exitComma(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitComma) {
			return visitor.visitComma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(babelParser.IDENTIFIER);
		} else {
			return this.getToken(babelParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_function; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(babelParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return babelParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: babelListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: babelListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: babelVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


