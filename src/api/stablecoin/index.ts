import { CryptoQuantClient } from '../../client';
import { ExchangeFlowsApi } from '../shared/exchange-flows';
import { StatusApi } from '../shared/status';
import { StablecoinNetworkDataApi } from './network-data';
import { StablecoinMarketDataApi } from './market-data';
import { StablecoinFlowIndicatorApi } from './flow-indicator';
import type { TokenExchangeParams } from '../../types/common';

class StablecoinApi {
  readonly networkData: StablecoinNetworkDataApi;
  readonly marketData: StablecoinMarketDataApi;
  readonly exchangeFlows: ExchangeFlowsApi<TokenExchangeParams>;
  readonly flowIndicator: StablecoinFlowIndicatorApi;
  readonly status: StatusApi;

  constructor(private readonly client: CryptoQuantClient) {
    this.networkData = new StablecoinNetworkDataApi(client, '/v1/stablecoin/network-data');
    this.marketData = new StablecoinMarketDataApi(client, '/v1/stablecoin/market-data');
    this.exchangeFlows = new ExchangeFlowsApi(client, '/v1/stablecoin/exchange-flows');
    this.flowIndicator = new StablecoinFlowIndicatorApi(client, '/v1/stablecoin/flow-indicator');
    this.status = new StatusApi(client, '/v1/stablecoin/status');
  }
}

export { StablecoinApi };
