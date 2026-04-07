import { CryptoQuantClient } from '../../client';
import { StatusApi } from '../shared/status';
import { XrpNetworkDataApi } from './network-data';
import { XrpMarketDataApi } from './market-data';
import { XrpEntityFlowsApi } from './entity-flows';
import { XrpFlowIndicatorApi } from './flow-indicator';
import { XrpDexDataApi } from './dex-data';
import { XrpDexIndicatorApi } from './dex-indicator';
import { XrpAmmDataApi } from './amm-data';
import { XrpNetworkIndicatorApi } from './network-indicator';

class XrpApi {
  readonly networkData: XrpNetworkDataApi;
  readonly marketData: XrpMarketDataApi;
  readonly entityFlows: XrpEntityFlowsApi;
  readonly flowIndicator: XrpFlowIndicatorApi;
  readonly dexData: XrpDexDataApi;
  readonly dexIndicator: XrpDexIndicatorApi;
  readonly ammData: XrpAmmDataApi;
  readonly networkIndicator: XrpNetworkIndicatorApi;
  readonly status: StatusApi;

  constructor(private readonly client: CryptoQuantClient) {
    this.networkData = new XrpNetworkDataApi(client, '/v1/xrp/network-data');
    this.marketData = new XrpMarketDataApi(client, '/v1/xrp/market-data');
    this.entityFlows = new XrpEntityFlowsApi(client, '/v1/xrp/entity-flows');
    this.flowIndicator = new XrpFlowIndicatorApi(client, '/v1/xrp/flow-indicator');
    this.dexData = new XrpDexDataApi(client, '/v1/xrp/dex-data');
    this.dexIndicator = new XrpDexIndicatorApi(client, '/v1/xrp/dex-indicator');
    this.ammData = new XrpAmmDataApi(client, '/v1/xrp/amm-data');
    this.networkIndicator = new XrpNetworkIndicatorApi(client, '/v1/xrp/network-indicator');
    this.status = new StatusApi(client, '/v1/xrp/status');
  }
}

export { XrpApi };
