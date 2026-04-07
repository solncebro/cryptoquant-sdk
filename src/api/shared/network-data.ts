import { CryptoQuantClient } from '../../client';
import {
  BaseParams,
  NetworkAddressesCountData,
  NetworkTransactionsCountData,
  TokensTransferredData,
  SupplyData,
  VelocityData,
  FeesData,
} from '../../types/common';

class NetworkDataApi {
  constructor(
    protected readonly client: CryptoQuantClient,
    protected readonly basePath: string,
  ) {}

  async getAddressesCount(params?: BaseParams): Promise<NetworkAddressesCountData[]> {
    return this.client.get(`${this.basePath}/addresses-count`, params);
  }

  async getTransactionsCount(params?: BaseParams): Promise<NetworkTransactionsCountData[]> {
    return this.client.get(`${this.basePath}/transactions-count`, params);
  }

  async getTokensTransferred(params?: BaseParams): Promise<TokensTransferredData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred`, params);
  }

  async getSupply(params?: BaseParams): Promise<SupplyData[]> {
    return this.client.get(`${this.basePath}/supply`, params);
  }

  async getVelocity(params?: BaseParams): Promise<VelocityData[]> {
    return this.client.get(`${this.basePath}/velocity`, params);
  }

  async getFees(params?: BaseParams): Promise<FeesData[]> {
    return this.client.get(`${this.basePath}/fees`, params);
  }
}

export { NetworkDataApi };
