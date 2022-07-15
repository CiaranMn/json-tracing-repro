import { testJson } from "./json.js"

import { MyType } from "./types";

export class TestClass {
  name: string;

  constructor() {
    this.name = "Hello, world!"
  }

  logJson() {
    console.log(testJson);
  }
}