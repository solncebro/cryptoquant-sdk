import { CryptoQuantClient } from '../../client';
import type { PriceOpenHighLowCloseVolumeData, TokenMarketParams } from '../../types/common';

class AltMarketDataApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getPriceOpenHighLowCloseVolume(
    params: TokenMarketParams,
  ): Promise<PriceOpenHighLowCloseVolumeData[]> {
    return this.client.get(`${this.basePath}/price-ohlcv`, params);
  }
}

export { AltMarketDataApi };
