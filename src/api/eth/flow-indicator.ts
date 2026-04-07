import { CryptoQuantClient } from '../../client';
import { ExchangeParams } from '../../types/common';
import { EthExchangeSupplyRatioData } from '../../types/eth';

class EthFlowIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getExchangeSupplyRatio(params: ExchangeParams): Promise<EthExchangeSupplyRatioData[]> {
    return this.client.get(`${this.basePath}/exchange-supply-ratio`, params);
  }
}

export { EthFlowIndicatorApi };
