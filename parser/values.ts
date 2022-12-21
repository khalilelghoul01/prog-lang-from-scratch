import { BlockContext } from "../core/babelParser";

export interface Result {
  type:
    | "number"
    | "string"
    | "boolean"
    | "null"
    | "array"
    | "object"
    | "function"
    | "syscall";

  value:
    | number
    | string
    | boolean
    | null
    | Result[]
    | any[]
    | { [key: string]: Result }
    | functionObj
    | Function;
}

export type ValueType =
  | number
  | string
  | boolean
  | null
  | Result[]
  | any[]
  | { [key: string]: Result }
  | functionObj
  | Function;

export function predictType(value: string): string {
  if (value === "null") {
    return "null";
  }
  if (value === "true" || value === "false") {
    return "boolean";
  }
  if (value.startsWith('"') && value.endsWith('"')) {
    return "string";
  }
  if (!isNaN(Number(value))) {
    return "number";
  }
  throw new Error(`Unknown type for value ${value}`);
}

export function evaluateType(type: string, constant: any): Result {
  if (type === "number") {
    return {
      type,
      value: Number(constant),
    };
  }
  if (type === "string") {
    return {
      type,
      value: constant.slice(1, constant.length - 1),
    };
  }
  if (type === "boolean") {
    return {
      type,
      value: constant === "true",
    };
  }
  if (type === "null") {
    return {
      type,
      value: null,
    };
  }
  throw new Error(`Unknown type for value ${constant}`);
}

export interface functionObj {
  parameters: string[];
  body: BlockContext;
}
