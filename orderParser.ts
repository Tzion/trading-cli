// I want a parser for trading command in
// orderParser.js
export function parseOrder(orderString) {
  const regex =
    /(\w+)\s(\w+)\slimit\s([\d.]+)\sstop\s([\d.]+)\stake-profit\s([\d.]+)/;
  const match = orderString.match(regex);

  if (match) {
    return {
      symbol: match[1],
      orderType: match[2],
      limitPrice: parseFloat(match[3]),
      stopPrice: parseFloat(match[4]),
      takeProfitPrice: parseFloat(match[5]),
    };
  }

  return null;
}

// Example usage
const orderString = "NVDA buy limit 152.2 stop 152.1 take-profit 153";
const parsedOrder = parseOrder(orderString);
console.log(parsedOrder);
