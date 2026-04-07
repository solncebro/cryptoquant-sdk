import { CryptoQuantClient } from '../../client';
import { AltMarketDataApi } from './market-data';

class AltApi {
  readonly marketData: AltMarketDataApi;

  constructor(private readonly client: CryptoQuantClient) {
    this.marketData = new AltMarketDataApi(client, '/v1/alt/market-data');
  }
}

export { AltApi };
