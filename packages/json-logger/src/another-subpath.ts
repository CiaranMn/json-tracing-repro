import { testJson } from "./json.js"

export class TestClass {
  name: string;

  constructor() {
    this.name = "Hello, world!"
  }

  logJson() {
    console.log(testJson);
  }
}