import { CryptoQuantClient } from '../../client';
import { ExchangeFlowsApi } from '../shared/exchange-flows';
import { StatusApi } from '../shared/status';
import { Erc20NetworkDataApi } from './network-data';
import { Erc20MarketDataApi } from './market-data';
import { Erc20FlowIndicatorApi } from './flow-indicator';
import type { TokenExchangeParams } from '../../types/common';

class Erc20Api {
  readonly networkData: Erc20NetworkDataApi;
  readonly marketData: Erc20MarketDataApi;
  readonly exchangeFlows: ExchangeFlowsApi<TokenExchangeParams>;
  readonly flowIndicator: Erc20FlowIndicatorApi;
  readonly status: StatusApi;

  constructor(private readonly client: CryptoQuantClient) {
    this.networkData = new Erc20NetworkDataApi(client, '/v1/erc20/network-data');
    this.marketData = new Erc20MarketDataApi(client, '/v1/erc20/market-data');
    this.exchangeFlows = new ExchangeFlowsApi(client, '/v1/erc20/exchange-flows');
    this.flowIndicator = new Erc20FlowIndicatorApi(client, '/v1/erc20/flow-indicator');
    this.status = new StatusApi(client, '/v1/erc20/status');
  }
}

export { Erc20Api };
