import { constants } from 'starknet'

export enum EthereumChainId {
  MAINNET = 1,
  GOERLI = 5,
}

export enum StarknetChainId {
  MAINNET = (constants.StarknetChainId.MAINNET as any),
  TESTNET = (constants.StarknetChainId.TESTNET as any),
  TESTNET2 = (constants.StarknetChainId.TESTNET2 as any),
}

export type SupportedChainId = EthereumChainId & StarknetChainId

export const CHAIN_IDS_TO_NAMES = {
  [EthereumChainId.MAINNET]: 'mainnet',
  [EthereumChainId.GOERLI]: 'goerli',

  [constants.StarknetChainId.MAINNET]: 'starknet mainnet',
  [constants.StarknetChainId.TESTNET]: 'starknet testnet',
  [constants.StarknetChainId.TESTNET2]: 'starknet testnet 2',
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  ...Object.values(EthereumChainId),
  ...Object.values(constants.StarknetChainId)
].filter(
  (id) => typeof id === 'number' || typeof id === 'string'
) as SupportedChainId[]

export function isSupportedChain(chainId: number | string | null | undefined): chainId is SupportedChainId {
  return !!chainId && (!!EthereumChainId[chainId as any] || !!StarknetChainId[chainId as any])
}

/**
 * Chain IDs compatibility between layers
 */
export const COMPATIBLE_CHAINS: { [chainId in EthereumChainId]: StarknetChainId[] } = {
  [EthereumChainId.MAINNET]: [
    StarknetChainId.MAINNET
  ],
  [EthereumChainId.GOERLI]: [
    StarknetChainId.TESTNET,
    StarknetChainId.TESTNET2,
  ],
}

export function areChainsCompatible(ethereumChainId: EthereumChainId, starknetChainId: StarknetChainId): boolean {
  return (COMPATIBLE_CHAINS[ethereumChainId] ?? []).includes(starknetChainId)
}
