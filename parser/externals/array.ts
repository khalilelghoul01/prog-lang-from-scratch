import { Result } from "./../values";
export function ArrayAt(array: Result, index: Result): Result {
  return (array.value as Result[])[index.value as number];
}

export function ArrayLength(array: Result): Result {
  return {
    type: "number",
    value: (array.value as Result[]).length,
  };
}

export function ArrayPush(array: Result, value: any): Result {
  (array.value as Result[]).push(value);
  return {
    type: "array",
    value: array.value,
  };
}

export function ArrayPop(array: Result): Result {
  (array.value as Result[]).pop();
  return {
    type: "array",
    value: array.value,
  };
}

export function ArrayShift(array: Result): Result {
  return (array.value as Result[]).shift() as Result;
}

export function ArrayInsertAt(
  array: Result,
  index: Result,
  value: Result
): Result {
  (array.value as Result[]).splice(index.value as number, 0, value);
  return array;
}
