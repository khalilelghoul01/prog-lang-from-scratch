import { Result } from "../values";

export function multiplictiveOperation(
  left: Result,
  right: Result,
  op: string
): Result {
  if (op === "*") {
    return mul(left, right);
  }
  if (op === "/") {
    return div(left, right);
  }
  throw new Error(`Unknown operation ${left.type} ${op} ${right.type}`);
}

function mul(left: Result, right: Result): Result {
  if (left.type === "number" && right.type === "number") {
    return {
      type: "number",
      value: (left.value as number) * (right.value as number),
    };
  }

  throw new Error(`Unknown operation ${left.type} * ${right.type}`);
}

export function div(left: Result, right: Result): Result {
  if (left.type === "number" && right.type === "number") {
    return {
      type: "number",
      value: (left.value as number) / (right.value as number),
    };
  }
  throw new Error(`Unknown operation ${left.type} / ${right.type}`);
}
