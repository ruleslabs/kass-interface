import { useCallback, useMemo } from 'react'
import gql from 'graphql-tag'

import { AssetEdge, AssetsFilterInput, AssetsQueryVariables, useAssetsQuery } from './__generated__/types-and-hooks'
import { KassAsset } from 'src/types'

gql`
  query Assets($filter: AssetsFilterInput!, $after: String, $first: Int) {
    assets(filter: $filter, after: $after, first: $first) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          name
          quantity
          tokenId
          imageUrl
          animation {
            url
            mimeType
          }
        }
      }
    }
  }
`

export function formatAssetQueryData({ node: queryAsset }: NonNullable<AssetEdge>): KassAsset {
  return {
    name: queryAsset.name,
    imageUrl: queryAsset.imageUrl ?? '',
    animationUrl: queryAsset.animation?.url ?? '',
    animationMimeType: queryAsset.animation?.mimeType ?? '',
    tokenId: queryAsset.tokenId,
    quantity: queryAsset.quantity,
  }
}

export interface AssetFetcherParams {
  filter: AssetsFilterInput
  first?: number
  after?: string
}

export const ASSET_PAGE_SIZE = 25

const defaultAssetFetcherParams: Omit<AssetsQueryVariables, 'filter'> = {
  first: ASSET_PAGE_SIZE,
}

export function useAssets(params: AssetFetcherParams, skip?: boolean) {
  const variables = useMemo(() => ({ ...defaultAssetFetcherParams, ...params }), [params])

  const { data, loading, fetchMore } = useAssetsQuery({ variables, skip })
  const hasNext = data?.assets?.pageInfo?.hasNextPage
  const loadMore = useCallback(
    () =>
      fetchMore({
        variables: {
          after: data?.assets?.pageInfo?.endCursor,
        },
      }),
    [data?.assets?.pageInfo?.endCursor, fetchMore]
  )

  const assets: KassAsset[] | undefined = useMemo(
    () =>
      data?.assets?.edges?.map((queryAsset: NonNullable<AssetEdge>) => {
        return formatAssetQueryData(queryAsset)
      }),
    [data?.assets?.edges, data?.assets]
  )

  return useMemo(() => {
    return {
      data: assets,
      hasNext,
      loading,
      loadMore,
    }
  }, [assets, hasNext, loadMore, loading])
}
