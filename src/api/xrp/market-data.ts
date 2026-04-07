import type { ExchangeParams, EstimatedLeverageRatioData } from '../../types/common';
import { MarketDataApi } from '../shared/market-data';

class XrpMarketDataApi extends MarketDataApi {
  async getEstimatedLeverageRatio(params: ExchangeParams): Promise<EstimatedLeverageRatioData[]> {
    return this.client.get(`${this.basePath}/estimated-leverage-ratio`, params);
  }
}

export { XrpMarketDataApi };
