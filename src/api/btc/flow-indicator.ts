import { CryptoQuantClient } from '../../client';
import type { ExchangeParams, MinerParams, StablecoinsRatioData } from '../../types/common';
import type {
  ExchangeShutdownIndexData,
  ExchangeWhaleRatioData,
  MinersPositionIndexData,
  FundFlowRatioData,
  ExchangeInflowCoinDaysDestroyedData,
  ExchangeInflowAgeDistributionData,
  ExchangeInflowSupplyDistributionData,
  ExchangeSupplyRatioData,
  MinerSupplyRatioData,
} from '../../types/btc';

class BtcFlowIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getExchangeShutdownIndex(params: ExchangeParams): Promise<ExchangeShutdownIndexData[]> {
    return this.client.get(`${this.basePath}/exchange-shutdown-index`, params);
  }

  async getExchangeWhaleRatio(params: ExchangeParams): Promise<ExchangeWhaleRatioData[]> {
    return this.client.get(`${this.basePath}/exchange-whale-ratio`, params);
  }

  async getMinersPositionIndex(params?: MinerParams): Promise<MinersPositionIndexData[]> {
    return this.client.get(`${this.basePath}/mpi`, params);
  }

  async getFundFlowRatio(params: ExchangeParams): Promise<FundFlowRatioData[]> {
    return this.client.get(`${this.basePath}/fund-flow-ratio`, params);
  }

  async getStablecoinsRatio(params: ExchangeParams): Promise<StablecoinsRatioData[]> {
    return this.client.get(`${this.basePath}/stablecoins-ratio`, params);
  }

  async getExchangeInflowCoinDaysDestroyed(
    params: ExchangeParams,
  ): Promise<ExchangeInflowCoinDaysDestroyedData[]> {
    return this.client.get(`${this.basePath}/exchange-inflow-cdd`, params);
  }

  async getExchangeInflowAgeDistribution(
    params: ExchangeParams,
  ): Promise<ExchangeInflowAgeDistributionData[]> {
    return this.client.get(`${this.basePath}/exchange-inflow-age-distribution`, params);
  }

  async getExchangeInflowSupplyDistribution(
    params: ExchangeParams,
  ): Promise<ExchangeInflowSupplyDistributionData[]> {
    return this.client.get(`${this.basePath}/exchange-inflow-supply-distribution`, params);
  }

  async getExchangeSupplyRatio(params: ExchangeParams): Promise<ExchangeSupplyRatioData[]> {
    return this.client.get(`${this.basePath}/exchange-supply-ratio`, params);
  }

  async getMinerSupplyRatio(params: MinerParams): Promise<MinerSupplyRatioData[]> {
    return this.client.get(`${this.basePath}/miner-supply-ratio`, params);
  }
}

export { BtcFlowIndicatorApi };
