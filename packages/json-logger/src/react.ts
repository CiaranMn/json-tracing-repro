import { TestClass } from "./another-subpath.js";

import { MyType } from "./types";

const createTest = () => {
  const foo = new TestClass();
  console.log(foo.name)
  foo.logJson();
}

export { createTest }