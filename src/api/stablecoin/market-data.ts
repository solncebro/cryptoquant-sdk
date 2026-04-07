import { CryptoQuantClient } from '../../client';
import type {
  TokenParams,
  TokenMarketParams,
  CapitalizationData,
  PriceOpenHighLowCloseVolumeData,
} from '../../types/common';

class StablecoinMarketDataApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getPriceOpenHighLowCloseVolume(
    params: TokenMarketParams,
  ): Promise<PriceOpenHighLowCloseVolumeData[]> {
    return this.client.get(`${this.basePath}/price-ohlcv`, params);
  }

  async getCapitalization(params: TokenParams): Promise<CapitalizationData[]> {
    return this.client.get(`${this.basePath}/capitalization`, params);
  }
}

export { StablecoinMarketDataApi };
