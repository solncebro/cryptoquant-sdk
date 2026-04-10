import { CryptoQuantClient } from '../../client';
import type { BaseParams, ExchangeParams, EstimatedLeverageRatioData } from '../../types/common';
import type {
  StablecoinSupplyRatioDataRaw,
  MarketValueToRealizedValueDataRaw,
  SpentOutputProfitRatioDataRaw,
  SpentOutputProfitRatioRatioDataRaw,
  RealizedPriceDataRaw,
  UnspentTransactionOutputRealizedPriceAgeDistributionDataRaw,
  ProfitAndLossIndexDataRaw,
} from '../../types/btc';

class BtcMarketIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getStablecoinSupplyRatio(params?: BaseParams): Promise<StablecoinSupplyRatioDataRaw[]> {
    return this.client.get(`${this.basePath}/stablecoin-supply-ratio`, params);
  }

  async getEstimatedLeverageRatio(params: ExchangeParams): Promise<EstimatedLeverageRatioData[]> {
    return this.client.get(`${this.basePath}/estimated-leverage-ratio`, params);
  }

  async getMarketValueToRealizedValue(
    params?: BaseParams,
  ): Promise<MarketValueToRealizedValueDataRaw[]> {
    return this.client.get(`${this.basePath}/mvrv`, params);
  }

  async getSpentOutputProfitRatio(params?: BaseParams): Promise<SpentOutputProfitRatioDataRaw[]> {
    return this.client.get(`${this.basePath}/sopr`, params);
  }

  async getSpentOutputProfitRatioRatio(
    params?: BaseParams,
  ): Promise<SpentOutputProfitRatioRatioDataRaw[]> {
    return this.client.get(`${this.basePath}/sopr-ratio`, params);
  }

  async getRealizedPrice(params?: BaseParams): Promise<RealizedPriceDataRaw[]> {
    return this.client.get(`${this.basePath}/realized-price`, params);
  }

  async getUnspentTransactionOutputRealizedPriceAgeDistribution(
    params?: BaseParams,
  ): Promise<UnspentTransactionOutputRealizedPriceAgeDistributionDataRaw[]> {
    return this.client.get(`${this.basePath}/utxo-realized-price-age-distribution`, params);
  }

  async getProfitAndLossIndex(params?: BaseParams): Promise<ProfitAndLossIndexDataRaw[]> {
    return this.client.get(`${this.basePath}/pnl-index`, params);
  }
}

export { BtcMarketIndicatorApi };
