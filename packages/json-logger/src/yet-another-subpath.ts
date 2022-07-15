import { testJson } from "./json.js"

import { MyType } from "./types";

export class AnotherTestClass {
  name: string;

  constructor() {
    this.name = "Hello, world!"
  }

  logJson() {
    console.log(testJson);
  }
}