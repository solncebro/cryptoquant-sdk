import { CryptoQuantClient } from '../../client';
import { ExchangeParams, EstimatedLeverageRatioData } from '../../types/common';

class EthMarketIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getEstimatedLeverageRatio(params: ExchangeParams): Promise<EstimatedLeverageRatioData[]> {
    return this.client.get(`${this.basePath}/estimated-leverage-ratio`, params);
  }
}

export { EthMarketIndicatorApi };
