import ms from 'ms.macro'

import { SupportedChainId, SupportedL1ChainId } from './chains'

export const AVERAGE_L1_BLOCK_TIME = ms`12s`

export enum NetworkType {
  L1,
}

interface BaseChainInfo {
  readonly networkType: NetworkType
  readonly docs: string
  readonly explorer: string
  readonly label: string
  readonly nativeCurrency: {
    name: string // e.g. 'Goerli ETH',
    symbol: string // e.g. 'gorETH',
    decimals: number // e.g. 18,
  }
}

interface L1ChainInfo extends BaseChainInfo {
  readonly networkType: NetworkType.L1
  readonly defaultListUrl?: string
}

type ChainInfoMap = { readonly [chainId: number]: L1ChainInfo } & {
  readonly [chainId in SupportedL1ChainId]: L1ChainInfo
}

const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.MAINNET]: {
    networkType: NetworkType.L1,
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://etherscan.io/',
    label: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  },
  [SupportedChainId.GOERLI]: {
    networkType: NetworkType.L1,
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://goerli.etherscan.io/',
    label: 'Görli',
    nativeCurrency: { name: 'Görli Ether', symbol: 'görETH', decimals: 18 },
  },
}

export function getChainInfo(
  chainId: SupportedChainId | SupportedL1ChainId | number | undefined
): L1ChainInfo | undefined

/**
 * Overloaded method for returning ChainInfo given a chainID
 * Return type varies depending on input type:
 * number | undefined -> returns chaininfo | undefined
 * SupportedChainId -> returns L1ChainInfo
 * SupportedL1ChainId -> returns L1ChainInfo
 */
export function getChainInfo(chainId: any): any {
  if (chainId) {
    return CHAIN_INFO[chainId] ?? undefined
  }
  return undefined
}
