import { CryptoQuantClient } from '../../client';
import type { BaseParams, ExchangeParams, EstimatedLeverageRatioData } from '../../types/common';
import type {
  StablecoinSupplyRatioData,
  MarketValueToRealizedValueData,
  SpentOutputProfitRatioData,
  SpentOutputProfitRatioRatioData,
  RealizedPriceData,
  UnspentTransactionOutputRealizedPriceAgeDistributionData,
  ProfitAndLossIndexData,
} from '../../types/btc';

class BtcMarketIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getStablecoinSupplyRatio(params?: BaseParams): Promise<StablecoinSupplyRatioData[]> {
    return this.client.get(`${this.basePath}/stablecoin-supply-ratio`, params);
  }

  async getEstimatedLeverageRatio(params: ExchangeParams): Promise<EstimatedLeverageRatioData[]> {
    return this.client.get(`${this.basePath}/estimated-leverage-ratio`, params);
  }

  async getMarketValueToRealizedValue(
    params?: BaseParams,
  ): Promise<MarketValueToRealizedValueData[]> {
    return this.client.get(`${this.basePath}/mvrv`, params);
  }

  async getSpentOutputProfitRatio(params?: BaseParams): Promise<SpentOutputProfitRatioData[]> {
    return this.client.get(`${this.basePath}/sopr`, params);
  }

  async getSpentOutputProfitRatioRatio(
    params?: BaseParams,
  ): Promise<SpentOutputProfitRatioRatioData[]> {
    return this.client.get(`${this.basePath}/sopr-ratio`, params);
  }

  async getRealizedPrice(params?: BaseParams): Promise<RealizedPriceData[]> {
    return this.client.get(`${this.basePath}/realized-price`, params);
  }

  async getUnspentTransactionOutputRealizedPriceAgeDistribution(
    params?: BaseParams,
  ): Promise<UnspentTransactionOutputRealizedPriceAgeDistributionData[]> {
    return this.client.get(`${this.basePath}/utxo-realized-price-age-distribution`, params);
  }

  async getProfitAndLossIndex(params?: BaseParams): Promise<ProfitAndLossIndexData[]> {
    return this.client.get(`${this.basePath}/pnl-index`, params);
  }
}

export { BtcMarketIndicatorApi };
