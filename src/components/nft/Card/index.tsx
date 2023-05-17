import { KassAsset, UniformAspectRatio, UniformAspectRatios } from 'src/types'
import { getNftDisplayComponent } from './utils'
import * as Text from 'src/theme/components/Text'
import * as styles from './style.css'
import Box from 'src/theme/components/Box'
import SizingImage from 'src/assets/sizingImage.png'

interface NftCardProps {
  asset: KassAsset
  isMobile: boolean
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
  isMobile,
  mediaShouldBePlaying,
  uniformAspectRatio = UniformAspectRatios.square,
  setUniformAspectRatio,
  renderedHeight,
  setRenderedHeight,
  setCurrentTokenPlayingMedia,
}: NftCardProps) => {
  return (
    <Box className={styles.container()}>
      <Box className={styles.mediaContainer}>
        {getNftDisplayComponent(
          asset,
          mediaShouldBePlaying,
          setCurrentTokenPlayingMedia,
          uniformAspectRatio,
          setUniformAspectRatio,
          renderedHeight,
          setRenderedHeight
        )}
      </Box>

      <Box className={styles.detailsContainer}>
        <Text.Small className={styles.primaryInfo}>{asset.name ?? `#${asset.tokenId}`}</Text.Small>
      </Box>
    </Box>
  )
}

interface LoadingNftCardProps {
  height?: number
}

export const LoadingNftCard = ({ height }: LoadingNftCardProps) => (
  <Box className={styles.container()} background={'bg2'}>
    <Box position={'relative'} width={'full'} style={{ height: height ? `${height}px` : 'auto' }} loading={true}>
      <Box position={'absolute'} width={'full'} height={'full'} />
      <Box as={'img'} src={SizingImage} width={'full'} opacity={'0'} draggable={false} />
    </Box>

    <Box className={styles.detailsContainer}>
      <Text.Small loading={true} loadingWidth={'120'} />
    </Box>
  </Box>
)
