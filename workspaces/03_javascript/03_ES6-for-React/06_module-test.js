// default로 내보낸 경우 {중괄호} 없이 가져올 수 있음
import returnMessage from "./05_module-message.js";

import myModule from "./05_module-message.js";

import { person } from "./05_module-message.js";

console.log(returnMessage);
console.log(person);