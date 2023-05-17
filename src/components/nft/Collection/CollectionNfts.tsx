import { useEffect, useMemo, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useAccount } from '@starknet-react/core'

import { ASSET_PAGE_SIZE, AssetFetcherParams, useAssets } from 'src/graphql/data/Assets'
import Box from 'src/theme/components/Box'
import Toggler from '../../Toggler'
import * as styles from './CollectionNfts.css'
import CollectionAsset from './CollectionAsset'
import { UniformAspectRatio, UniformAspectRatios } from 'src/types'
import { useIsMobile } from 'src/hooks/useIsMobile'
import LoadingAssets from './CollectionAssetsLoading'

interface CollectionAssetsProps {
  contractAddress: string
}

export default function CollectionAssets({ contractAddress }: CollectionAssetsProps) {
  const { address } = useAccount()

  const [uniformAspectRatio, setUniformAspectRatio] = useState<UniformAspectRatio>(UniformAspectRatios.unset)
  const [renderedHeight, setRenderedHeight] = useState<number | undefined>()

  const assetQueryParams: AssetFetcherParams = {
    filter: {
      collectionAddress: contractAddress,
      ownerAddress: '0x2fddb6f7a1e0203179f682b26c13ad46a78dd43db8748a462928ff2c4adf635', // rules
      // ownerAddress: '0x0004b6767aea46adba81b673177c30dcad9cfc719aaf6487c03f8319389a1548', // briq
    },
    first: ASSET_PAGE_SIZE,
  }

  const { data: collectionAssets, loading, hasNext, loadMore } = useAssets(assetQueryParams, !address)

  const [currentTokenPlayingMedia, setCurrentTokenPlayingMedia] = useState<string | undefined>()
  const isMobile = useIsMobile()

  const assets = useMemo(() => {
    if (!collectionAssets) return null

    return collectionAssets.map((asset) => (
      <CollectionAsset
        key={asset.tokenId}
        asset={asset}
        isMobile={isMobile}
        mediaShouldBePlaying={asset.tokenId === currentTokenPlayingMedia}
        setCurrentTokenPlayingMedia={setCurrentTokenPlayingMedia}
        uniformAspectRatio={uniformAspectRatio}
        setUniformAspectRatio={setUniformAspectRatio}
        renderedHeight={renderedHeight}
        setRenderedHeight={setRenderedHeight}
      />
    ))
  }, [collectionAssets, isMobile, currentTokenPlayingMedia, uniformAspectRatio, renderedHeight])

  useEffect(() => {
    setUniformAspectRatio(UniformAspectRatios.unset)
    setRenderedHeight(undefined)
  }, [contractAddress])

  return (
    <Box>
      <Toggler modes={['Ethereum', 'Starknet']} />

      <Box marginTop={'32'}>
        {loading ? (
          <Box className={styles.assetsGrid}>
            <LoadingAssets height={renderedHeight} />
          </Box>
        ) : (
          <InfiniteScroll
            next={loadMore}
            hasMore={hasNext ?? false}
            dataLength={collectionAssets?.length ?? 0}
            loader={hasNext && <LoadingAssets height={renderedHeight} />}
            className={styles.assetsGrid}
          >
            {assets}
          </InfiniteScroll>
        )}
      </Box>
    </Box>
  )
}
