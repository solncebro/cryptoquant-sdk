import { CryptoQuantClient } from '../../client';
import { BtcNetworkDataApi } from './network-data';
import { MarketDataApi } from '../shared/market-data';
import { BtcExchangeFlowsApi } from './exchange-flows';
import { BtcMinerFlowsApi } from './miner-flows';
import { BtcInterEntityFlowsApi } from './inter-entity-flows';
import { BtcFlowIndicatorApi } from './flow-indicator';
import { BtcNetworkIndicatorApi } from './network-indicator';
import { BtcMarketIndicatorApi } from './market-indicator';
import { FundDataApi } from '../shared/fund-data';
import { BtcMinerDataApi } from './miner-data';
import { BtcMempoolApi } from './mempool';
import { BtcLightningApi } from './lightning';
import { StatusApi } from '../shared/status';

class BtcApi {
  readonly networkData: BtcNetworkDataApi;
  readonly marketData: MarketDataApi;
  readonly exchangeFlows: BtcExchangeFlowsApi;
  readonly minerFlows: BtcMinerFlowsApi;
  readonly interEntityFlows: BtcInterEntityFlowsApi;
  readonly flowIndicator: BtcFlowIndicatorApi;
  readonly networkIndicator: BtcNetworkIndicatorApi;
  readonly marketIndicator: BtcMarketIndicatorApi;
  readonly fundData: FundDataApi;
  readonly minerData: BtcMinerDataApi;
  readonly mempool: BtcMempoolApi;
  readonly lightning: BtcLightningApi;
  readonly status: StatusApi;

  constructor(private readonly client: CryptoQuantClient) {
    this.networkData = new BtcNetworkDataApi(client, '/v1/btc/network-data');
    this.marketData = new MarketDataApi(client, '/v1/btc/market-data');
    this.exchangeFlows = new BtcExchangeFlowsApi(client, '/v1/btc/exchange-flows');
    this.minerFlows = new BtcMinerFlowsApi(client, '/v1/btc/miner-flows');
    this.interEntityFlows = new BtcInterEntityFlowsApi(client, '/v1/btc/inter-entity-flows');
    this.flowIndicator = new BtcFlowIndicatorApi(client, '/v1/btc/flow-indicator');
    this.networkIndicator = new BtcNetworkIndicatorApi(client, '/v1/btc/network-indicator');
    this.marketIndicator = new BtcMarketIndicatorApi(client, '/v1/btc/market-indicator');
    this.fundData = new FundDataApi(client, '/v1/btc/fund-data');
    this.minerData = new BtcMinerDataApi(client, '/v1/btc/miner-data');
    this.mempool = new BtcMempoolApi(client, '/v1/btc/mempool');
    this.lightning = new BtcLightningApi(client, '/v1/btc/lightning');
    this.status = new StatusApi(client, '/v1/btc/status');
  }
}

export { BtcApi };
