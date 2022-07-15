import { TestClass } from "./another-subpath.js";

const createTest = () => {
  const foo = new TestClass();
  console.log(foo.name)
  foo.logJson();
}

export { createTest }