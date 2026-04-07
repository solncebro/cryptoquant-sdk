import type { TimeFieldData } from './common';

interface EthBlockBytesData extends TimeFieldData {
  blockBytes: number;
}

interface EthBlockCountData extends TimeFieldData {
  blockCount: number;
}

interface EthUncleBlockCountData extends TimeFieldData {
  uncleBlockCount: number;
}

interface EthBlockIntervalData extends TimeFieldData {
  blockInterval: number;
}

interface EthFeesBurntData extends TimeFieldData {
  feesBurnt: number;
}

interface EthFeesTipsData extends TimeFieldData {
  feesTips: number;
}

interface EthFeesTransactionData extends TimeFieldData {
  feesTransaction: number;
}

interface EthFeesBurntTransactionData extends TimeFieldData {
  feesBurntTransaction: number;
}

interface EthFeesTipsTransactionData extends TimeFieldData {
  feesTipsTransaction: number;
}

interface EthBlockRewardData extends TimeFieldData {
  blockReward: number;
}

interface EthDifficultyData extends TimeFieldData {
  difficulty: number;
}

interface EthHashrateData extends TimeFieldData {
  hashrate: number;
}

interface EthGasData extends TimeFieldData {
  gasUsed: number;
  gasLimit: number;
}

interface EthBaseFeeData extends TimeFieldData {
  baseFee: number;
}

interface EthMaxFeeData extends TimeFieldData {
  maxFee: number;
}

interface EthMaxPriorityFeeData extends TimeFieldData {
  maxPriorityFee: number;
}

interface EthContractsCountData extends TimeFieldData {
  contractsCount: number;
}

interface EthContractCallsCountData extends TimeFieldData {
  contractCallsCount: number;
}

interface EthFailedTransactionsCountData extends TimeFieldData {
  failedTransactionsCount: number;
}

interface EthFailedTokensTransferredCountData extends TimeFieldData {
  failedTokensTransferredCount: number;
}

interface EthTokensTransferredCountData extends TimeFieldData {
  tokensTransferredCount: number;
}

interface EthTotalValueStakedData extends TimeFieldData {
  totalValueStaked: number;
}

interface EthStakingInflowTotalData extends TimeFieldData {
  stakingInflowTotal: number;
}

interface EthStakingValidatorTotalData extends TimeFieldData {
  stakingValidatorTotal: number;
}

interface EthDepositorCountTotalData extends TimeFieldData {
  depositorCountTotal: number;
}

interface EthDepositorCountNewData extends TimeFieldData {
  depositorCountNew: number;
}

interface EthStakingRateData extends TimeFieldData {
  stakingRate: number;
}

interface EthPhase0SuccessRateData extends TimeFieldData {
  phase0SuccessRate: number;
}

interface EthStakingTransactionCountData extends TimeFieldData {
  stakingTransactionCount: number;
}

interface EthExchangeSupplyRatioData extends TimeFieldData {
  exchangeSupplyRatio: number;
}

export type {
  EthBlockBytesData,
  EthBlockCountData,
  EthUncleBlockCountData,
  EthBlockIntervalData,
  EthFeesBurntData,
  EthFeesTipsData,
  EthFeesTransactionData,
  EthFeesBurntTransactionData,
  EthFeesTipsTransactionData,
  EthBlockRewardData,
  EthDifficultyData,
  EthHashrateData,
  EthGasData,
  EthBaseFeeData,
  EthMaxFeeData,
  EthMaxPriorityFeeData,
  EthContractsCountData,
  EthContractCallsCountData,
  EthFailedTransactionsCountData,
  EthFailedTokensTransferredCountData,
  EthTokensTransferredCountData,
  EthTotalValueStakedData,
  EthStakingInflowTotalData,
  EthStakingValidatorTotalData,
  EthDepositorCountTotalData,
  EthDepositorCountNewData,
  EthStakingRateData,
  EthPhase0SuccessRateData,
  EthStakingTransactionCountData,
  EthExchangeSupplyRatioData,
};
