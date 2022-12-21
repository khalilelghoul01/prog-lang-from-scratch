import { Result } from "./values";
export function register(func: Function) {
  return <Result>{
    type: "syscall",
    value: func,
  };
}
