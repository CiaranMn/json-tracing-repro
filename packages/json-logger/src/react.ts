import { TestClass } from "./another-subpath.js";
import { AnotherTestClass } from "./yet-another-subpath";

import { MyType } from "./types";

const createTest = () => {
  const foo = new TestClass();
  console.log(foo.name)
  foo.logJson();
}

const createAnotherTest = () => {
  const foo = new AnotherTestClass();
  console.log(foo.name)
  foo.logJson();
}

export { createTest }