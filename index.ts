import * as readline from "readline";
import { parseOrder, validateOrder } from "./orderParser";
import { TradingViewOrder } from "./orderAdapters";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

// Async function to handle the order processing
async function processOrder() {
  try {
    // const orderQuery = await question("Enter your order: ");
    const orderQuery = "NVDA buy limit 1 stop 0.5 take-profit 2";
    let order = parseOrder(orderQuery);
    order = validateOrder(order);
    console.log("Parsed Order:", order);

    const tradingViewOrder = new TradingViewOrder();
    const response = await tradingViewOrder.send(order);
    console.log("Response Status Code:", response.status);
    const responseData = await response.json();
    console.log("Response Data:", responseData);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    rl.close();
  }
}

processOrder();
