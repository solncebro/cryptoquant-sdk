import { CryptoQuantClient } from '../../client';
import type {
  TokenParams,
  NetworkAddressesCountData,
  SupplyData,
  TokensTransferredData,
} from '../../types/common';
import type { EventsCountData } from '../../types/stablecoin';

class StablecoinNetworkDataApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getSupply(params: TokenParams): Promise<SupplyData[]> {
    return this.client.get(`${this.basePath}/supply`, params);
  }

  async getEventsCount(params: TokenParams): Promise<EventsCountData[]> {
    return this.client.get(`${this.basePath}/events-count`, params);
  }

  async getTokensTransferred(params: TokenParams): Promise<TokensTransferredData[]> {
    return this.client.get(`${this.basePath}/tokens-transferred`, params);
  }

  async getAddressesCount(params: TokenParams): Promise<NetworkAddressesCountData[]> {
    return this.client.get(`${this.basePath}/addresses-count`, params);
  }
}

export { StablecoinNetworkDataApi };
