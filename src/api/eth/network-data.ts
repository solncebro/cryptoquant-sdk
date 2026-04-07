import { CryptoQuantClient } from '../../client';
import { NetworkDataApi } from '../shared/network-data';
import {
  BaseParams,
  NetworkAddressesCountData,
  NetworkTransactionsCountData,
  TokensTransferredData,
} from '../../types/common';
import {
  EthBlockBytesData,
  EthBlockCountData,
  EthUncleBlockCountData,
  EthBlockIntervalData,
  EthFeesBurntData,
  EthFeesTipsData,
  EthFeesTransactionData,
  EthFeesBurntTransactionData,
  EthFeesTipsTransactionData,
  EthBlockRewardData,
  EthDifficultyData,
  EthHashrateData,
  EthGasData,
  EthBaseFeeData,
  EthMaxFeeData,
  EthMaxPriorityFeeData,
  EthContractsCountData,
  EthContractCallsCountData,
  EthFailedTransactionsCountData,
  EthFailedTokensTransferredCountData,
  EthTokensTransferredCountData,
} from '../../types/eth';

class EthNetworkDataApi extends NetworkDataApi {
  constructor(client: CryptoQuantClient) {
    super(client, '/v1/eth/network-data');
  }

  async getBlockBytes(params?: BaseParams): Promise<EthBlockBytesData[]> {
    return this.client.get(`${this.basePath}/block-bytes`, params);
  }

  async getBlockCount(params?: BaseParams): Promise<EthBlockCountData[]> {
    return this.client.get(`${this.basePath}/block-count`, params);
  }

  async getUncleBlockCount(params?: BaseParams): Promise<EthUncleBlockCountData[]> {
    return this.client.get(`${this.basePath}/uncle-block-count`, params);
  }

  async getBlockInterval(params?: BaseParams): Promise<EthBlockIntervalData[]> {
    return this.client.get(`${this.basePath}/block-interval`, params);
  }

  async getFeesBurnt(params?: BaseParams): Promise<EthFeesBurntData[]> {
    return this.client.get(`${this.basePath}/fees-burnt`, params);
  }

  async getFeesTips(params?: BaseParams): Promise<EthFeesTipsData[]> {
    return this.client.get(`${this.basePath}/fees-tips`, params);
  }

  async getFeesTransaction(params?: BaseParams): Promise<EthFeesTransactionData[]> {
    return this.client.get(`${this.basePath}/fees-transaction`, params);
  }

  async getFeesBurntTransaction(params?: BaseParams): Promise<EthFeesBurntTransactionData[]> {
    return this.client.get(`${this.basePath}/fees-burnt-transaction`, params);
  }

  async getFeesTipsTransaction(params?: BaseParams): Promise<EthFeesTipsTransactionData[]> {
    return this.client.get(`${this.basePath}/fees-tips-transaction`, params);
  }

  async getBlockReward(params?: BaseParams): Promise<EthBlockRewardData[]> {
    return this.client.get(`${this.basePath}/blockreward`, params);
  }

  async getBlockRewardExceptUncle(params?: BaseParams): Promise<EthBlockRewardData[]> {
    return this.client.get(`${this.basePath}/blockreward-except-uncle`, params);
  }

  async getUncleBlockReward(params?: BaseParams): Promise<EthBlockRewardData[]> {
    return this.client.get(`${this.basePath}/uncle-blockreward`, params);
  }

  async getDifficulty(params?: BaseParams): Promise<EthDifficultyData[]> {
    return this.client.get(`${this.basePath}/difficulty`, params);
  }

  async getHashrate(params?: BaseParams): Promise<EthHashrateData[]> {
    return this.client.get(`${this.basePath}/hashrate`, params);
  }

  async getGas(params?: BaseParams): Promise<EthGasData[]> {
    return this.client.get(`${this.basePath}/gas`, params);
  }

  async getBaseFee(params?: BaseParams): Promise<EthBaseFeeData[]> {
    return this.client.get(`${this.basePath}/base-fee`, params);
  }

  async getMaxFee(params?: BaseParams): Promise<EthMaxFeeData[]> {
    return this.client.get(`${this.basePath}/max-fee`, params);
  }

  async getMaxPriorityFee(params?: BaseParams): Promise<EthMaxPriorityFeeData[]> {
    return this.client.get(`${this.basePath}/max-priority-fee`, params);
  }

  async getContractsCount(params?: BaseParams): Promise<EthContractsCountData[]> {
    return this.client.get(`${this.basePath}/contracts-count`, params);
  }

  async getTransactionsCountBetweenExternallyOwnedAccount(
    params?: BaseParams,
  ): Promise<NetworkTransactionsCountData[]> {
    return this.client.get(`${this.basePath}/transactions-count-between-eoa`, params);
  }

  async getContractCallsCountExternal(params?: BaseParams): Promise<EthContractCallsCountData[]> {
    return this.client.get(`${this.basePath}/contract-calls-count-external`, params);
  }

  async getContractCallsCountInternal(params?: BaseParams): Promise<EthContractCallsCountData[]> {
    return this.client.get(`${this.basePath}/contract-calls-count-internal`, params);
  }

  async getContractCallsCount(params?: BaseParams): Promise<EthContractCallsCountData[]> {
    return this.client.get(`${this.basePath}/contract-calls-count`, params);
  }

  async getTransactionsCountAll(params?: BaseParams): Promise<NetworkTransactionsCountData[]> {
    return this.client.get(`${this.basePath}/transactions-count-all`, params);
  }

  async getTokensTransferredCount(params?: BaseParams): Promise<EthTokensTransferredCountData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred-count`, params);
  }

  async getTokensTransferredCountBetweenExternallyOwnedAccount(
    params?: BaseParams,
  ): Promise<EthTokensTransferredCountData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred-count-between-eoa`, params);
  }

  async getTokensTransferredCountByContractCallsExternal(
    params?: BaseParams,
  ): Promise<EthTokensTransferredCountData[]> {
    return this.client.get(
      `${this.basePath}/tokens-transferred-count-by-contract-calls-external`,
      params,
    );
  }

  async getTokensTransferredCountByContractCallsInternal(
    params?: BaseParams,
  ): Promise<EthTokensTransferredCountData[]> {
    return this.client.get(
      `${this.basePath}/tokens-transferred-count-by-contract-calls-internal`,
      params,
    );
  }

  async getTokensTransferredCountByContractCalls(
    params?: BaseParams,
  ): Promise<EthTokensTransferredCountData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred-count-by-contract-calls`, params);
  }

  async getTokensTransferredCountAll(
    params?: BaseParams,
  ): Promise<EthTokensTransferredCountData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred-count-all`, params);
  }

  async getTokensTransferredBetweenExternallyOwnedAccount(
    params?: BaseParams,
  ): Promise<TokensTransferredData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred-between-eoa`, params);
  }

  async getTokensTransferredByContractCallsExternal(
    params?: BaseParams,
  ): Promise<TokensTransferredData[]> {
    return this.client.get(
      `${this.basePath}/tokens-transferred-by-contract-calls-external`,
      params,
    );
  }

  async getTokensTransferredByContractCallsInternal(
    params?: BaseParams,
  ): Promise<TokensTransferredData[]> {
    return this.client.get(
      `${this.basePath}/tokens-transferred-by-contract-calls-internal`,
      params,
    );
  }

  async getTokensTransferredByContractCalls(params?: BaseParams): Promise<TokensTransferredData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred-by-contract-calls`, params);
  }

  async getTokensTransferredAll(params?: BaseParams): Promise<TokensTransferredData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred-all`, params);
  }

  async getFailedTransactionsCount(params?: BaseParams): Promise<EthFailedTransactionsCountData[]> {
    return this.client.get(`${this.basePath}/failed-transactions-count`, params);
  }

  async getFailedTokensTransferredCount(
    params?: BaseParams,
  ): Promise<EthFailedTokensTransferredCountData[]> {
    return this.client.get(`${this.basePath}/failed-tokens-transferred-count`, params);
  }

  async getAddressesCountAll(params?: BaseParams): Promise<NetworkAddressesCountData[]> {
    return this.client.get(`${this.basePath}/addresses-count-all`, params);
  }
}

export { EthNetworkDataApi };
