grammar babel;

program: line* EOF;

line: statement;

statement: (
		(
			assignment
			| reassignment
			| expression
			| returnStatement
		) ';'
	)
	| ifStatement
	| whileStatement;

assignment: assignKey IDENTIFIER '=' expression;

reassignment: IDENTIFIER '=' expression;

assignKey: 'let' | 'const';

ifStatement: 'if' '(' expression ')' block elseStatement?;
block: '{' line* '}';
elseStatement: 'else' (block | ifStatement);

whileStatement: 'while' '(' expression ')' block;

expression:
	constant									# constantExpression
	| IDENTIFIER								# identifierExpression
	| expression '?' expression ':' expression	# ternaryExpression
	| '(' expression ')'						# parenthesizedExpression
	| '!' expression							# notExpression
	| '-' expression							# negativeExpression
	| expression multOp expression				# multiplicativeExpression
	| expression addOp expression				# additiveExpression
	| expression compreOp expression			# comparativeExpression
	| expression boolOp expression				# booleanExpression
	| array										# arrayExpression
	| object									# objectExpression
	| function									# functionExpression
	| functionCall								# functionCallExpression;


multOp: '*' | '/' | '%';
addOp: '+' | '-';
compreOp: '<' | '>' | '<=' | '>=' | '==' | '!=';
boolOp: '&&' | '||';

constant: INTEGER | FLOAT | STRING | BOOL | CHAR;

BOOL: 'true' | 'false';
STRING: '"' ( ~'"')* '"';
FLOAT: [0-9]+ '.' [0-9]+;
INTEGER: [0-9]+;
CHAR: '\'' (. | '\\' .) '\'';
array: '[' ((expression (',' expression)*)?) ']' (','?);
object:
	'{' (
		(IDENTIFIER | STRING) ':' expression (
			',' (IDENTIFIER | STRING) ':' expression
		)*
	)? (',')? '}';
comma: ',';
function:
	'function' '(' (IDENTIFIER (',' IDENTIFIER)*)? ')' block;
returnStatement: 'return' (expression)?;
functionCall:
	IDENTIFIER '(' (expression (',' expression)*)? ')';

WS: [ \t\n\r]+ -> skip;
COMMENT: '/*' .*? '*/' -> skip;

LINE_COMMENT: '//' ~[\r\n]* -> skip;
IDENTIFIER: ([a-zA-Z_][a-zA-Z0-9_]*)+;
