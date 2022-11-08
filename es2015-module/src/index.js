import foods from "./foods";
import { choice, remove } from "./helpers";

const selection = choice(foods);
console.log(`I'd like one ${selection}, please.`);
console.log(`Here you go: ${selection}`);
console.log(`Delicious!  May I have another?`);
remove(foods, selection);
console.log(`I'm sorry, we are all out.  We have ${foods.length} left.`);
