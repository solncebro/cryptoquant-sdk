import { CryptoQuantClient } from '../../client';
import type { TokenExchangeParams } from '../../types/common';
import type { StablecoinExchangeSupplyRatioData } from '../../types/stablecoin';

class StablecoinFlowIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getExchangeSupplyRatio(
    params: TokenExchangeParams,
  ): Promise<StablecoinExchangeSupplyRatioData[]> {
    return this.client.get(`${this.basePath}/exchange-supply-ratio`, params);
  }
}

export { StablecoinFlowIndicatorApi };
