export type PrimitiveType = string | number | boolean | Symbol;

export function ObjectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

export function isPrimitive(value: any): value is PrimitiveType {
  return (
    typeof value == "string" ||
    typeof value == "number" ||
    typeof value == "boolean" ||
    typeof value == "symbol"
  );
}
