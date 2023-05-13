import { getAddress } from '@ethersproject/address'
import { validateAndParseAddress } from 'starknet'
import { address as addressSdk } from '@rulesorg/sdk-core'

import { NetworkLayer } from 'src/graphql/data/__generated__/types-and-hooks'

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenL1Address(address: string, chars = 4): string {
  try {
    const parsed = getAddress(address)
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
  } catch {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
}

export function shortenL2Address(address: string, chars = 4): string {
  try {
    const parsed = validateAndParseAddress(address)
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(66 - chars)}`
  } catch {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
}

export function getNetworkLayer(address: string): NetworkLayer | null {
  if (addressSdk.isEthereumAddress(address)) return NetworkLayer.L1
  if (addressSdk.isStarknetAddress(address)) return NetworkLayer.L2

  return null
}
