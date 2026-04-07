import { NetworkDataApi } from '../shared/network-data';
import type { BaseParams } from '../../types/common';
import type {
  EnergyConsumptionData,
  BandwidthConsumptionData,
  TransactionsPerSecondData,
  TrxBlockCountData,
  TotalValueStakedData,
  StakingRateData,
} from '../../types/trx';

class TrxNetworkDataApi extends NetworkDataApi {
  async getEnergyConsumption(params?: BaseParams): Promise<EnergyConsumptionData[]> {
    return this.client.get(`${this.basePath}/energy-consumption`, params);
  }

  async getBandwidthConsumption(params?: BaseParams): Promise<BandwidthConsumptionData[]> {
    return this.client.get(`${this.basePath}/bandwidth-consumption`, params);
  }

  async getTransactionsPerSecond(params?: BaseParams): Promise<TransactionsPerSecondData[]> {
    return this.client.get(`${this.basePath}/tps`, params);
  }

  async getBlockCount(params?: BaseParams): Promise<TrxBlockCountData[]> {
    return this.client.get(`${this.basePath}/block-count`, params);
  }

  async getTotalValueStaked(params?: BaseParams): Promise<TotalValueStakedData[]> {
    return this.client.get(`${this.basePath}/total-value-staked`, params);
  }

  async getStakingRate(params?: BaseParams): Promise<StakingRateData[]> {
    return this.client.get(`${this.basePath}/staking-rate`, params);
  }
}

export { TrxNetworkDataApi };
