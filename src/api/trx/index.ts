import { CryptoQuantClient } from '../../client';
import { StatusApi } from '../shared/status';
import { TrxNetworkDataApi } from './network-data';
import { TrxMarketDataApi } from './market-data';
import { TrxDefiApi } from './defi';

class TrxApi {
  readonly networkData: TrxNetworkDataApi;
  readonly marketData: TrxMarketDataApi;
  readonly defi: TrxDefiApi;
  readonly status: StatusApi;

  constructor(private readonly client: CryptoQuantClient) {
    this.networkData = new TrxNetworkDataApi(client, '/v1/trx/network-data');
    this.marketData = new TrxMarketDataApi(client, '/v1/trx/market-data');
    this.defi = new TrxDefiApi(client, '/v1/trx/defi');
    this.status = new StatusApi(client, '/v1/trx/status');
  }
}

export { TrxApi };
