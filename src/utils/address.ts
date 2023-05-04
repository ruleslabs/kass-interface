import { getAddress } from '@ethersproject/address'

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenL1Address(address: string, chars = 4): string {
  try {
    const parsed = getAddress(address)
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
  } catch {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
}
