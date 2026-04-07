import { CryptoQuantClient } from '../../client';
import type { BaseParams } from '../../types/common';
import type { BuySellRatioData, TradeShareData } from '../../types/xrp';

class XrpDexIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getBuySellRatio(params?: BaseParams): Promise<BuySellRatioData[]> {
    return this.client.get(`${this.basePath}/buy-sell-ratio`, params);
  }

  async getTradeShare(params?: BaseParams): Promise<TradeShareData[]> {
    return this.client.get(`${this.basePath}/trade-share`, params);
  }
}

export { XrpDexIndicatorApi };
