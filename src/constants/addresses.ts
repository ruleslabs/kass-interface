import { EthereumChainId, StarknetChainId, SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

const ETHEREUM_NETWORKS = [EthereumChainId.MAINNET, EthereumChainId.GOERLI]
const STARKNET_NETWORKS = [StarknetChainId.MAINNET, StarknetChainId.TESTNET, StarknetChainId.TESTNET2]

function constructSameAddressMap(address: string, chainIds: SupportedChainId[]): AddressMap {
  return chainIds.reduce<AddressMap>((acc, chainId) => {
    acc[chainId] = address
    return acc
  }, {})
}

const constructSameEthereumAddressMap = (address: string): AddressMap =>
  constructSameAddressMap(address, ETHEREUM_NETWORKS)

const constructSameStarknetAddressMap = (address: string): AddressMap =>
  constructSameAddressMap(address, STARKNET_NETWORKS)

// ethereum addresses
const ETHERUM_KASS_ADDRESSES = '0xdead'

// starknet addresses
const STARKNET_KASS_ADDRESSES = '0xdead'

/* Kass Contract Addresses */
export const KASS_ADDRESSES: AddressMap = {
  ...constructSameEthereumAddressMap(ETHERUM_KASS_ADDRESSES),
  ...constructSameStarknetAddressMap(STARKNET_KASS_ADDRESSES),
}
