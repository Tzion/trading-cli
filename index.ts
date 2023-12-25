import * as readline from "readline";
import { parseOrder } from "./orderParser";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your order: ", (order) => {
  const parsedOrder = parseOrder(order);
  console.log("Parsed Order:", parsedOrder);
  rl.close();
});
