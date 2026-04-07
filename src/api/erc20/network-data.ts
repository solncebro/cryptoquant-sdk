import { CryptoQuantClient } from '../../client';
import type {
  TokenParams,
  NetworkAddressesCountData,
  NetworkTransactionsCountData,
  TokensTransferredData,
  SupplyData,
  VelocityData,
} from '../../types/common';
import type { TokensTransferredCountData } from '../../types/erc20';

class Erc20NetworkDataApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getSupply(params: TokenParams): Promise<SupplyData[]> {
    return this.client.get(`${this.basePath}/supply`, params);
  }

  async getVelocity(params: TokenParams): Promise<VelocityData[]> {
    return this.client.get(`${this.basePath}/velocity`, params);
  }

  async getTransactionsCount(params: TokenParams): Promise<NetworkTransactionsCountData[]> {
    return this.client.get(`${this.basePath}/transactions-count`, params);
  }

  async getTokensTransferredCount(params: TokenParams): Promise<TokensTransferredCountData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred-count`, params);
  }

  async getTokensTransferred(params: TokenParams): Promise<TokensTransferredData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred`, params);
  }

  async getAddressesCount(params: TokenParams): Promise<NetworkAddressesCountData[]> {
    return this.client.get(`${this.basePath}/addresses-count`, params);
  }
}

export { Erc20NetworkDataApi };
