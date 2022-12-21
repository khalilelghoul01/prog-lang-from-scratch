import { Result } from "./../values";
export function recursivePrint(...args: Result[]) {
  for (let i = 0; i < args.length; i++) {
    if (args[i].type === "array") {
      recursivePrint(args[i].value as Result[]);
    } else {
      console.log(args[i].value);
    }
  }
}
