import { babelParser } from "./../core/babelParser";
import { babelLexer } from "./../core/babelLexer";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { BabelInterpreter } from "./interpreter";
import Envirement from "./envirement";
import { register } from "./external";
import * as ArrayExternal from "./externals/array";
import * as IoExternal from "./externals/io";
import HttpExternal from "./externals/http";

//#region External functions
const globalEnv = new Envirement();
globalEnv.declareVar("null", { type: "null", value: null }, true);
globalEnv.declareVar("true", { type: "boolean", value: true }, true);
globalEnv.declareVar("false", { type: "boolean", value: false }, true);

// io
globalEnv.declareVar("print", register(IoExternal.recursivePrint), true);
globalEnv.declareVar(
  "exit",
  register(() => process.exit(0)),
  true
);

// array
globalEnv.declareVar("arrayAt", register(ArrayExternal.ArrayAt), true);
globalEnv.declareVar("arrayLength", register(ArrayExternal.ArrayLength), true);
globalEnv.declareVar("arrayPush", register(ArrayExternal.ArrayPush), true);
globalEnv.declareVar("arrayPop", register(ArrayExternal.ArrayPop), true);
globalEnv.declareVar("arrayShift", register(ArrayExternal.ArrayShift), true);
globalEnv.declareVar(
  "arrayInsertAt",
  register(ArrayExternal.ArrayInsertAt),
  true
);

// http
globalEnv.declareVar("fetch", register(HttpExternal.HttpFetch), true);

//#endregion

// prompt-sync import
const prompt = require("prompt-sync")({
  history: require("prompt-sync-history")(),
});

function run(source: string, env: Envirement) {
  const data = new ANTLRInputStream(source);
  const lexer = new babelLexer(data);

  const stream = new CommonTokenStream(lexer);
  const parser = new babelParser(stream);
  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
      console.log(
        "\x1b[31m%s\x1b[0m",
        "Syntax error:",
        "\x1b[0m",
        `\n\tat line ${line},\n\tcolumn ${column}:\n\t\t ${msg}`
      );
      console.log("\x1b[0m", offendingSymbol);
      // exit the process with an error code
    },
  });
  const tree = parser.program();
  const visitor = new BabelInterpreter();
  try {
    visitor.visitTree(tree, env);
  } catch (error) {
    let err = error as Error;

    // print in red
    console.log("\x1b[31m%s\x1b[0m", "Error:", "\x1b[0m", err.message);
    console.log("\x1b[0m", err.stack);
  }
}

function main() {
  // args
  const args = process.argv.slice(2);
  if (args.length > 0) {
    const source = require("fs").readFileSync(args[0], "utf8");
    run(source, globalEnv);
    // globalEnv.dump();

    return;
  }

  // repl
  while (true) {
    const line = prompt("babel> ");
    if (
      line === "exit" ||
      line === "quit" ||
      line === "q" ||
      line === "bye" ||
      line === "exit()" ||
      line === ""
    ) {
      break;
    }
    run(line, globalEnv);
  }
}

main();
