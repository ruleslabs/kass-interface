import { getAddress } from '@ethersproject/address'
import { validateAndParseAddress } from 'starknet'

import { NetworkLayer } from 'src/constants/networks'

const ETH_ADDRESS_BITS = 160

export default function useAddressNetworkLayer(address?: string): NetworkLayer | null {
  if (!address) return null

  try {
    getAddress(address)
    return NetworkLayer.L1
  } catch {}

  try {
    validateAndParseAddress(address)

    // assert address is not too small for starknet
    if (address.length <= ETH_ADDRESS_BITS / 4 + 2) return null

    return NetworkLayer.L2
  } catch {}

  return null
}
