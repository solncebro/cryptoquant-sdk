import { CryptoQuantClient } from '../../client';
import { BaseParams } from '../../types/common';
import {
  EthTotalValueStakedData,
  EthStakingInflowTotalData,
  EthStakingValidatorTotalData,
  EthDepositorCountTotalData,
  EthDepositorCountNewData,
  EthStakingRateData,
  EthPhase0SuccessRateData,
  EthStakingTransactionCountData,
} from '../../types/eth';

class EthStakingApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getTotalValueStaked(params?: BaseParams): Promise<EthTotalValueStakedData[]> {
    return this.client.get(`${this.basePath}/total-value-staked`, params);
  }

  async getStakingInflowTotal(params?: BaseParams): Promise<EthStakingInflowTotalData[]> {
    return this.client.get(`${this.basePath}/staking-inflow-total`, params);
  }

  async getStakingValidatorTotal(params?: BaseParams): Promise<EthStakingValidatorTotalData[]> {
    return this.client.get(`${this.basePath}/staking-validator-total`, params);
  }

  async getDepositorCountTotal(params?: BaseParams): Promise<EthDepositorCountTotalData[]> {
    return this.client.get(`${this.basePath}/depositor-count-total`, params);
  }

  async getDepositorCountNew(params?: BaseParams): Promise<EthDepositorCountNewData[]> {
    return this.client.get(`${this.basePath}/depositor-count-new`, params);
  }

  async getStakingRate(params?: BaseParams): Promise<EthStakingRateData[]> {
    return this.client.get(`${this.basePath}/staking-rate`, params);
  }

  async getPhase0SuccessRate(params?: BaseParams): Promise<EthPhase0SuccessRateData[]> {
    return this.client.get(`${this.basePath}/phase0-success-rate`, params);
  }

  async getStakingTransactionCount(params?: BaseParams): Promise<EthStakingTransactionCountData[]> {
    return this.client.get(`${this.basePath}/staking-transaction-count`, params);
  }
}

export { EthStakingApi };
