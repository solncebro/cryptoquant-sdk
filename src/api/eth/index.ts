import { CryptoQuantClient } from '../../client';
import { ExchangeParams } from '../../types/common';
import { ExchangeFlowsApi } from '../shared/exchange-flows';
import { MarketDataApi } from '../shared/market-data';
import { FundDataApi } from '../shared/fund-data';
import { StatusApi } from '../shared/status';
import { EthNetworkDataApi } from './network-data';
import { EthStakingApi } from './eth2';
import { EthMarketIndicatorApi } from './market-indicator';
import { EthFlowIndicatorApi } from './flow-indicator';

class EthApi {
  readonly networkData: EthNetworkDataApi;
  readonly eth2: EthStakingApi;
  readonly exchangeFlows: ExchangeFlowsApi<ExchangeParams>;
  readonly marketData: MarketDataApi;
  readonly marketIndicator: EthMarketIndicatorApi;
  readonly fundData: FundDataApi;
  readonly flowIndicator: EthFlowIndicatorApi;
  readonly status: StatusApi;

  constructor(private readonly client: CryptoQuantClient) {
    this.networkData = new EthNetworkDataApi(client);
    this.eth2 = new EthStakingApi(client, '/v1/eth/eth2');
    this.exchangeFlows = new ExchangeFlowsApi(client, '/v1/eth/exchange-flows');
    this.marketData = new MarketDataApi(client, '/v1/eth/market-data');
    this.marketIndicator = new EthMarketIndicatorApi(client, '/v1/eth/market-indicator');
    this.fundData = new FundDataApi(client, '/v1/eth/fund-data');
    this.flowIndicator = new EthFlowIndicatorApi(client, '/v1/eth/flow-indicator');
    this.status = new StatusApi(client, '/v1/eth/status');
  }
}

export { EthApi };
