import { CryptoQuantClient } from '../../client';
import type { TokenExchangeParams } from '../../types/common';
import type { Erc20ExchangeSupplyRatioData } from '../../types/erc20';

class Erc20FlowIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getExchangeSupplyRatio(
    params: TokenExchangeParams,
  ): Promise<Erc20ExchangeSupplyRatioData[]> {
    return this.client.get(`${this.basePath}/exchange-supply-ratio`, params);
  }
}

export { Erc20FlowIndicatorApi };
