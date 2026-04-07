import { CryptoQuantClient } from '../../client';
import type {
  BaseParams,
  PriceOpenHighLowCloseVolumeData,
  CapitalizationData,
} from '../../types/common';

class TrxMarketDataApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getPriceOpenHighLowCloseVolume(
    params?: BaseParams,
  ): Promise<PriceOpenHighLowCloseVolumeData[]> {
    return this.client.get(`${this.basePath}/price-ohlcv`, params);
  }

  async getCapitalization(params?: BaseParams): Promise<CapitalizationData[]> {
    return this.client.get(`${this.basePath}/capitalization`, params);
  }
}

export { TrxMarketDataApi };
