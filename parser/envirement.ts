import { Result } from "./values";

export default class Envirement {
  private parent?: Envirement;
  private variables: Map<string, Result>;
  private constants: Set<string>;

  constructor(parent?: Envirement) {
    this.parent = parent;
    this.variables = new Map();
    this.constants = new Set();
  }

  public declareVar(name: string, value: Result, isConst: boolean): Result {
    if (this.variables.has(name)) {
      throw new Error(`Variable ${name} already exists`);
    }
    if (isConst) {
      this.constants.add(name);
    }
    this.variables.set(name, value);
    return value;
  }

  public assignVar(name: string, value: Result): Result {
    if (this.checkConst(name)) {
      throw new Error(`Variable ${name} is constant`);
    }
    const env = this.resolve(name);
    env.variables.set(name, value);
    return value;
  }

  public resolve(name: string): Envirement {
    if (this.variables.has(name)) {
      return this;
    }
    if (this.parent) {
      return this.parent.resolve(name);
    }
    throw new Error(`Variable ${name} does not exist`);
  }

  public lookupVar(name: string): Result {
    const env = this.resolve(name);
    return env.variables.get(name) as Result;
  }

  public checkConst(name: string): boolean {
    const env = this.resolve(name);
    return env.constants.has(name);
  }

  public getVars(): [any, any][] {
    if (this.parent) {
      return [...this.parent.getVars(), ...this.variables];
    }
    return Array.from(this.variables);
  }

  public dump(): void {
    console.log(this.getVars());
  }
}
