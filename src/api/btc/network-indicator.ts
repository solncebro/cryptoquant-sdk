import { CryptoQuantClient } from '../../client';
import type { BaseParams } from '../../types/common';
import type {
  NetworkValueToMetcalfeData,
  StockToFlowData,
  NetworkValueToTransactionsData,
  PuellMultipleData,
  NetworkValueToTransactionsGoldenCrossData,
  CoinDaysDestroyedData,
  SupplyWeightedCoinAgeData,
  NetUnrealizedProfitLossData,
  ProfitAndLossSupplyData,
  ProfitAndLossUnspentTransactionOutputData,
  SupplyWeightedCoinAgeDistributionData,
  DormancyData,
  UnspentTransactionOutputAgeDistributionData,
  UnspentTransactionOutputRealizedAgeDistributionData,
  UnspentTransactionOutputCountAgeDistributionData,
  SpentOutputAgeDistributionData,
  UnspentTransactionOutputSupplyDistributionData,
  UnspentTransactionOutputCountSupplyDistributionData,
  SpentOutputSupplyDistributionData,
  UnspentTransactionOutputRealizedSupplyDistributionData,
  NetRealizedProfitLossData,
  MarketCapToActiveData,
} from '../../types/btc';

class BtcNetworkIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getNetworkValueToMetcalfe(params?: BaseParams): Promise<NetworkValueToMetcalfeData[]> {
    return this.client.get(`${this.basePath}/nvm`, params);
  }

  async getStockToFlow(params?: BaseParams): Promise<StockToFlowData[]> {
    return this.client.get(`${this.basePath}/stock-to-flow`, params);
  }

  async getNetworkValueToTransactions(
    params?: BaseParams,
  ): Promise<NetworkValueToTransactionsData[]> {
    return this.client.get(`${this.basePath}/nvt`, params);
  }

  async getPuellMultiple(params?: BaseParams): Promise<PuellMultipleData[]> {
    return this.client.get(`${this.basePath}/puell-multiple`, params);
  }

  async getNetworkValueToTransactionsGoldenCross(
    params?: BaseParams,
  ): Promise<NetworkValueToTransactionsGoldenCrossData[]> {
    return this.client.get(`${this.basePath}/nvt-golden-cross`, params);
  }

  async getCoinDaysDestroyed(params?: BaseParams): Promise<CoinDaysDestroyedData[]> {
    return this.client.get(`${this.basePath}/cdd`, params);
  }

  async getSupplyWeightedCoinAge(params?: BaseParams): Promise<SupplyWeightedCoinAgeData[]> {
    return this.client.get(`${this.basePath}/sca`, params);
  }

  async getNetUnrealizedProfitLoss(params?: BaseParams): Promise<NetUnrealizedProfitLossData[]> {
    return this.client.get(`${this.basePath}/nupl`, params);
  }

  async getProfitAndLossSupply(params?: BaseParams): Promise<ProfitAndLossSupplyData[]> {
    return this.client.get(`${this.basePath}/pnl-supply`, params);
  }

  async getProfitAndLossUnspentTransactionOutput(
    params?: BaseParams,
  ): Promise<ProfitAndLossUnspentTransactionOutputData[]> {
    return this.client.get(`${this.basePath}/pnl-utxo`, params);
  }

  async getSupplyWeightedCoinAgeDistribution(
    params?: BaseParams,
  ): Promise<SupplyWeightedCoinAgeDistributionData[]> {
    return this.client.get(`${this.basePath}/sca-distribution`, params);
  }

  async getDormancy(params?: BaseParams): Promise<DormancyData[]> {
    return this.client.get(`${this.basePath}/dormancy`, params);
  }

  async getUnspentTransactionOutputAgeDistribution(
    params?: BaseParams,
  ): Promise<UnspentTransactionOutputAgeDistributionData[]> {
    return this.client.get(`${this.basePath}/utxo-age-distribution`, params);
  }

  async getUnspentTransactionOutputRealizedAgeDistribution(
    params?: BaseParams,
  ): Promise<UnspentTransactionOutputRealizedAgeDistributionData[]> {
    return this.client.get(`${this.basePath}/utxo-realized-age-distribution`, params);
  }

  async getUnspentTransactionOutputCountAgeDistribution(
    params?: BaseParams,
  ): Promise<UnspentTransactionOutputCountAgeDistributionData[]> {
    return this.client.get(`${this.basePath}/utxo-count-age-distribution`, params);
  }

  async getSpentOutputAgeDistribution(
    params?: BaseParams,
  ): Promise<SpentOutputAgeDistributionData[]> {
    return this.client.get(`${this.basePath}/spent-output-age-distribution`, params);
  }

  async getUnspentTransactionOutputSupplyDistribution(
    params?: BaseParams,
  ): Promise<UnspentTransactionOutputSupplyDistributionData[]> {
    return this.client.get(`${this.basePath}/utxo-supply-distribution`, params);
  }

  async getUnspentTransactionOutputCountSupplyDistribution(
    params?: BaseParams,
  ): Promise<UnspentTransactionOutputCountSupplyDistributionData[]> {
    return this.client.get(`${this.basePath}/utxo-count-supply-distribution`, params);
  }

  async getSpentOutputSupplyDistribution(
    params?: BaseParams,
  ): Promise<SpentOutputSupplyDistributionData[]> {
    return this.client.get(`${this.basePath}/spent-output-supply-distribution`, params);
  }

  async getUnspentTransactionOutputRealizedSupplyDistribution(
    params?: BaseParams,
  ): Promise<UnspentTransactionOutputRealizedSupplyDistributionData[]> {
    return this.client.get(`${this.basePath}/utxo-realized-supply-distribution`, params);
  }

  async getNetRealizedProfitLoss(params?: BaseParams): Promise<NetRealizedProfitLossData[]> {
    return this.client.get(`${this.basePath}/nrpl`, params);
  }

  async getMarketCapToActive(params?: BaseParams): Promise<MarketCapToActiveData[]> {
    return this.client.get(`${this.basePath}/mca`, params);
  }
}

export { BtcNetworkIndicatorApi };
