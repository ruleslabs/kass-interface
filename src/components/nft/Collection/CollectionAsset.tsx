import { KassAsset, UniformAspectRatio } from 'src/types'
import { NftCard } from '../Card'

interface CollectionAssetProps {
  asset: KassAsset
  isMobile: boolean
  mediaShouldBePlaying: boolean
  setCurrentTokenPlayingMedia: (tokenId: string | undefined) => void
  uniformAspectRatio: UniformAspectRatio
  setUniformAspectRatio: (uniformAspectRatio: UniformAspectRatio) => void
  renderedHeight?: number
  setRenderedHeight: (renderedHeight: number | undefined) => void
}

export default function CollectionAsset({
  asset,
  isMobile,
  mediaShouldBePlaying,
  setCurrentTokenPlayingMedia,
  uniformAspectRatio,
  setUniformAspectRatio,
  renderedHeight,
  setRenderedHeight,
}: CollectionAssetProps) {
  return (
    <NftCard
      asset={asset}
      isDisabled={false}
      mediaShouldBePlaying={mediaShouldBePlaying}
      uniformAspectRatio={uniformAspectRatio}
      setUniformAspectRatio={setUniformAspectRatio}
      renderedHeight={renderedHeight}
      setRenderedHeight={setRenderedHeight}
      setCurrentTokenPlayingMedia={setCurrentTokenPlayingMedia}
    />
  )
}
