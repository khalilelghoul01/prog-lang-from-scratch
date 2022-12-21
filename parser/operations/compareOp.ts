import { Result } from "../values";

export function comparativeOperation(
  left: Result,
  right: Result,
  op: string
): Result {
  if (op === "<") {
    return lessThan(left, right);
  }
  if (op === ">") {
    return greaterThan(left, right);
  }
  if (op === "<=") {
    return lessThanOrEqual(left, right);
  }
  if (op === ">=") {
    return greaterThanOrEqual(left, right);
  }
  if (op === "==") {
    return equal(left, right);
  }
  if (op === "!=") {
    return notEqual(left, right);
  }

  throw new Error(`Unknown operation ${left.type} ${op} ${right.type}`);
}

function lessThan(left: Result, right: Result): Result {
  if (left.type === "number" && right.type === "number") {
    return {
      type: "boolean",
      value: (left.value as number) < (right.value as number),
    };
  }
  throw new Error(`Unknown operation ${left.type} < ${right.type}`);
}

function greaterThan(left: Result, right: Result): Result {
  if (left.type === "number" && right.type === "number") {
    return {
      type: "boolean",
      value: (left.value as number) > (right.value as number),
    };
  }
  throw new Error(`Unknown operation ${left.type} > ${right.type}`);
}

function lessThanOrEqual(left: Result, right: Result): Result {
  if (left.type === "number" && right.type === "number") {
    return {
      type: "boolean",
      value: (left.value as number) <= (right.value as number),
    };
  }
  throw new Error(`Unknown operation ${left.type} <= ${right.type}`);
}

function greaterThanOrEqual(left: Result, right: Result): Result {
  if (left.type === "number" && right.type === "number") {
    return {
      type: "boolean",
      value: (left.value as number) >= (right.value as number),
    };
  }
  throw new Error(`Unknown operation ${left.type} >= ${right.type}`);
}

function equal(left: Result, right: Result): Result {
  if (left.type === "number" && right.type === "number") {
    return {
      type: "boolean",
      value: (left.value as number) == (right.value as number),
    };
  }
  if (left.type === "string" && right.type === "string") {
    return {
      type: "boolean",
      value: (left.value as string) == (right.value as string),
    };
  }
  if (left.type === "boolean" && right.type === "boolean") {
    return {
      type: "boolean",
      value: (left.value as boolean) == (right.value as boolean),
    };
  }
  throw new Error(`Unknown operation ${left.type} == ${right.type}`);
}

function notEqual(left: Result, right: Result): Result {
  if (left.type === "number" && right.type === "number") {
    return {
      type: "boolean",
      value: (left.value as number) != (right.value as number),
    };
  }
  if (left.type === "string" && right.type === "string") {
    return {
      type: "boolean",
      value: (left.value as string) != (right.value as string),
    };
  }
  if (left.type === "boolean" && right.type === "boolean") {
    return {
      type: "boolean",
      value: (left.value as boolean) != (right.value as boolean),
    };
  }
  throw new Error(`Unknown operation ${left.type} != ${right.type}`);
}

// Path: parser\operations\logicalOp.ts
