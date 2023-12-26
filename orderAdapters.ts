import { Order } from "./orderParser";

interface OrderRequest {
  send(order: Order): Promise<Response>;
}

export class TradingViewOrder implements OrderRequest {
  async send(order: Order): Promise<Response> {
    const requestBody = {
      symbol: `NASDAQ:${order.symbol}`,
      side: order.orderType,
      type: "limit", // TODO figure out the options
      qty: 1, // TODO calculate
      price: order.limitPrice,
      sl: order.stopPrice,
      expiration: 1704147844, // TODO
    };

    const response = await fetch(
      "https://papertrading.tradingview.com/trading/place/574917",
      {
        headers: {
          authority: "papertrading.tradingview.com",
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          cookie:
            'cookiePrivacyPreferenceBannerProduction=notApplicable; _ga=GA1.1.1471136470.1695401158; cookiesSettings={"analytics":true,"advertising":true}; device_t=ZDcwdTow.DSgKyezwGR77FzfYoJozuJZEAvM35eMxIBmycdc1d2Q; sessionid=e5139honiigvywgfbhznnt20b7hc5w2a; sessionid_sign=v1:bFGZ5fr7njJU7P+XNTgnQHPwx0Umb1scJHyS7R3Su8M=; tv_ecuid=8ba5660c-99f9-4ca9-8631-25f6fc7189b1; _ga_YVVRYGL0E0=GS1.1.1695501465.24.1.1695505840.35.0.0; theme=dark; _sp_ses.cf1a=*; _sp_id.cf1a=787f0ba2-dd6c-4d03-8013-9a2797b228df.1695401158.92.1703543045.1703516723.b837716c-dbb8-44f7-a057-42e13752def8',
          dnt: "1",
          origin: "https://www.tradingview.com",
          referer: "https://www.tradingview.com/",
          "sec-ch-ua": 'Chromium";v="119", "Not?A_Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": 'macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        },
        referrer: "https://www.tradingview.com/",
        referrerPolicy: "origin-when-cross-origin",
        body: JSON.stringify(requestBody),
        method: "POST",
        mode: "cors",
        credentials: "include",
      }
    );

    return response;
  }
}
