import gql from 'graphql-tag'
import { KassCollection } from 'src/types'
import { useMemo } from 'react'

import * as Icons from 'src/theme/components/Icons'
import { NetworkLayer, NftCollection, useCollectionQuery } from './__generated__/types-and-hooks'

gql`
  query Collection($address: String!) {
    nftCollection(filter: { address: $address }) {
      bannerImageUrl
      imageUrl
      name
      nativeTokenAddress
      nativeLayer
    }
  }
`

export function formatCollectionQueryData(queryCollection: NonNullable<NftCollection>): KassCollection {
  return {
    nativeTokenAddress: queryCollection?.nativeTokenAddress ?? '',
    name: queryCollection?.name,
    bannerImageUrl: queryCollection?.bannerImageUrl,
    imageUrl: queryCollection?.imageUrl ?? '',
    getNativeLayerIcon: () => {
      switch (queryCollection?.nativeLayer) {
        case NetworkLayer.L1:
          return Icons.Ethereum({})

        case NetworkLayer.L2:
          return Icons.Starknet({})

        default:
          return null
      }
    }
  }
}

interface useCollectionReturnProps {
  data: KassCollection
  loading: boolean
}

export function useCollection(address: string, skip?: boolean): useCollectionReturnProps {
  const { data: queryData, loading } = useCollectionQuery({
    variables: {
      address: address,
    },
    skip,
  })

  const queryCollection = queryData?.nftCollection as NonNullable<NftCollection>
  return useMemo(() => {
    return {
      data: formatCollectionQueryData(queryCollection),
      loading,
    }
  }, [address, loading, queryCollection])
}
