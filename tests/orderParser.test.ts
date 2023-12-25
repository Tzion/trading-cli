// orderParser.test.ts
import { parseOrder } from "../orderParser";

describe("parseOrder", () => {
  it("should correctly parse a valid order string", () => {
    const orderString = "NVDA buy limit 152.2 stop 152.1 take-profit 153";
    const expected = {
      symbol: "NVDA",
      orderType: "buy",
      limitPrice: 152.2,
      stopPrice: 152.1,
      takeProfitPrice: 153,
    };

    expect(parseOrder(orderString)).toEqual(expected);
  });

  it("should return null for an invalid order string", () => {
    const orderString = "Invalid String";
    expect(parseOrder(orderString)).toBeNull();
  });

  // Additional tests can be added here
});
