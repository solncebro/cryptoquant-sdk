import { NetworkDataApi } from '../shared/network-data';
import type { BaseParams } from '../../types/common';
import type {
  BlockBytesData,
  BlockIntervalData,
  UnspentTransactionOutputCountData,
  FeesTransactionData,
  BlockRewardData,
  DifficultyData,
  HashrateData,
  BlockCountData,
} from '../../types/btc';

class BtcNetworkDataApi extends NetworkDataApi {
  async getBlockBytes(params?: BaseParams): Promise<BlockBytesData[]> {
    return this.client.get(`${this.basePath}/block-bytes`, params);
  }

  async getBlockInterval(params?: BaseParams): Promise<BlockIntervalData[]> {
    return this.client.get(`${this.basePath}/block-interval`, params);
  }

  async getUnspentTransactionOutputCount(
    params?: BaseParams,
  ): Promise<UnspentTransactionOutputCountData[]> {
    return this.client.get(`${this.basePath}/utxo-count`, params);
  }

  async getFeesTransaction(params?: BaseParams): Promise<FeesTransactionData[]> {
    return this.client.get(`${this.basePath}/fees-transaction`, params);
  }

  async getBlockReward(params?: BaseParams): Promise<BlockRewardData[]> {
    return this.client.get(`${this.basePath}/blockreward`, params);
  }

  async getDifficulty(params?: BaseParams): Promise<DifficultyData[]> {
    return this.client.get(`${this.basePath}/difficulty`, params);
  }

  async getHashrate(params?: BaseParams): Promise<HashrateData[]> {
    return this.client.get(`${this.basePath}/hashrate`, params);
  }

  async getBlockCount(params?: BaseParams): Promise<BlockCountData[]> {
    return this.client.get(`${this.basePath}/block-count`, params);
  }
}

export { BtcNetworkDataApi };
