import { Result } from "../values";

export function boolOperation(left: Result, right: Result, op: string): Result {
  if (op === "&&") {
    return and(left, right);
  }
  if (op === "||") {
    return or(left, right);
  }

  throw new Error(`Unknown operation ${left.type} ${op} ${right.type}`);
}

function and(left: Result, right: Result): Result {
  if (left.type === "boolean" && right.type === "boolean") {
    return {
      type: "boolean",
      value: (left.value as boolean) && (right.value as boolean),
    };
  }
  throw new Error(`Unknown operation ${left.type} && ${right.type}`);
}

export function or(left: Result, right: Result): Result {
  if (left.type === "boolean" && right.type === "boolean") {
    return {
      type: "boolean",
      value: (left.value as boolean) || (right.value as boolean),
    };
  }
  throw new Error(`Unknown operation ${left.type} || ${right.type}`);
}
