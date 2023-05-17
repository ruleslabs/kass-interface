import { KassAsset, UniformAspectRatio, UniformAspectRatios } from 'src/types'
import { getNftDisplayComponent } from './utils'
import * as Card from './containers'
import * as Text from 'src/theme/components/Text'
import Box from 'src/theme/components/Box'

interface NftCardProps {
  asset: KassAsset
  isDisabled: boolean
  mediaShouldBePlaying: boolean
  uniformAspectRatio?: UniformAspectRatio
  setUniformAspectRatio?: (uniformAspectRatio: UniformAspectRatio) => void
  renderedHeight?: number
  setRenderedHeight?: (renderedHeight: number | undefined) => void
  setCurrentTokenPlayingMedia: (tokenId: string | undefined) => void
}

/**
 * NftCard is a component that displays an NFT asset.
 */
export const NftCard = ({
  asset,
  isDisabled,
  mediaShouldBePlaying,
  uniformAspectRatio = UniformAspectRatios.square,
  setUniformAspectRatio,
  renderedHeight,
  setRenderedHeight,
  setCurrentTokenPlayingMedia,
}: NftCardProps) => {
  return (
    <Card.Container>
      <Card.MediaContainer isDisabled={isDisabled}>
        {getNftDisplayComponent(
          asset,
          mediaShouldBePlaying,
          setCurrentTokenPlayingMedia,
          uniformAspectRatio,
          setUniformAspectRatio,
          renderedHeight,
          setRenderedHeight
        )}
      </Card.MediaContainer>

      <Card.DetailsContainer>
        <Card.PrimaryInfo>{asset.name ?? `#${asset.tokenId}`}</Card.PrimaryInfo>
      </Card.DetailsContainer>
    </Card.Container>
  )
}
