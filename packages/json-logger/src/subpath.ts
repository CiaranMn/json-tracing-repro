import { logJson } from "./another-subpath.js";

const logSomething = () => {
  console.log("Logging json:")
  logJson();
}

export { logSomething }