import { doNothing } from "./another-subpath.js";

const logSomething = () => {
  doNothing();
  console.log("Something")
}

export { logSomething }