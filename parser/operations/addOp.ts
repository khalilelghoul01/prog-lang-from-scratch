import { Result } from "../values";

export function additiveOperation(
  left: Result,
  right: Result,
  op: string
): Result {
  if (op === "+") {
    return add(left, right);
  }
  if (op === "-") {
    return sub(left, right);
  }
  throw new Error(`Unknown operation ${left.type} ${op} ${right.type}`);
}

function add(left: Result, right: Result): Result {
  if (left.type === "number" && right.type === "number") {
    return {
      type: "number",
      value: (left.value as number) + (right.value as number),
    };
  }
  if (left.type === "string" && right.type === "string") {
    return {
      type: "string",
      value: (left.value as string) + (right.value as string),
    };
  }
  throw new Error(`Unknown operation ${left.type} + ${right.type}`);
}

export function sub(left: Result, right: Result): Result {
  if (left.type === "number" && right.type === "number") {
    return {
      type: "number",
      value: (left.value as number) - (right.value as number),
    };
  }
  throw new Error(`Unknown operation ${left.type} - ${right.type}`);
}
