import { useCallback, useMemo } from 'react'
import gql from 'graphql-tag'

import { Asset, AssetsFilterInput, AssetsQueryVariables, useAssetsQuery } from './__generated__/types-and-hooks'
import { KassAsset } from 'src/types'

gql`
  query Assets(
    $filter: AssetsFilterInput!,
    $after: String,
    $first: Int
  ) {
    assets(
      filter: $filter
      after: $after
      first: $first
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        name
        quantity
        tokenId
        imageUrl
        animationUrl
      }
    }
  }
`

export function formatAssetQueryData(queryAsset: NonNullable<Asset>): KassAsset {
  return {
    name: queryAsset.name,
    imageUrl: queryAsset.imageUrl ?? '',
    animationUrl: queryAsset.animationUrl ?? '',
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
    [data, fetchMore]
  )

  const assets: KassAsset[] | undefined = useMemo(
    () =>
      data?.assets?.nodes?.map((queryAsset: NonNullable<Asset>) => {
        return formatAssetQueryData(queryAsset)
      }),
    [data?.assets?.nodes, data?.assets]
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
