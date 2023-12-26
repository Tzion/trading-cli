export interface Order {
  symbol: string;
  orderType: string;
  limitPrice: number;
  stopPrice: number;
  takeProfitPrice: number;
}

export function parseOrder(orderString: string): Order | null {
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

export function validateOrder(order: Order | null): Order {
  // TODO
  return order!;
}
