import gql from 'graphql-tag'
import { GenieCollection } from 'src/types'
import { useMemo } from 'react'

import { NftCollection, useCollectionQuery } from './__generated__/types-and-hooks'

gql`
  query Collection($addresses: [String!]!) {
    nftCollections(filter: { addresses: $addresses }) {
      edges {
        cursor
        node {
          bannerImage {
            url
          }
          description
          image {
            url
          }
          isVerified
          name
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`

export function formatCollectionQueryData(
  queryCollection: NonNullable<NftCollection>,
  address?: string
): GenieCollection {
  return {
    address: address ?? queryCollection?.nftContracts?.[0]?.address ?? '',
    isVerified: queryCollection?.isVerified,
    name: queryCollection?.name,
    description: queryCollection?.description,
    bannerImageUrl: queryCollection?.bannerImage?.url,
    imageUrl: queryCollection?.image?.url ?? '',
  }
}

interface useCollectionReturnProps {
  data: GenieCollection
  loading: boolean
}

export function useCollection(address: string, skip?: boolean): useCollectionReturnProps {
  const { data: queryData, loading } = useCollectionQuery({
    variables: {
      addresses: address,
    },
    skip,
  })

  const queryCollection = queryData?.nftCollections?.edges?.[0]?.node as NonNullable<NftCollection>
  return useMemo(() => {
    return {
      data: formatCollectionQueryData(queryCollection, address),
      loading,
    }
  }, [address, loading, queryCollection])
}
