import { KassAsset, UniformAspectRatio, UniformAspectRatios } from 'src/types'
import { getNftDisplayComponent } from './utils'
import * as styles from './style.css'
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
    <Box className={styles.cardContainer} draggable={false}>
      <Box className={styles.mediaContainer({ disabled: isDisabled })}>
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

      {/* <Card.DetailsRelativeContainer>
        <Card.DetailsContainer>
          <Card.InfoContainer>
            <Card.PrimaryRow>
              <Card.PrimaryDetails>
                <Card.PrimaryInfo>{display.primaryInfo}</Card.PrimaryInfo>
                {display.primaryInfoIcon}
              </Card.PrimaryDetails>
              {display.primaryInfoRight}
            </Card.PrimaryRow>
            <Card.SecondaryRow>
              <Card.SecondaryDetails>
                <Card.SecondaryInfo>{display.secondaryInfo}</Card.SecondaryInfo>
              </Card.SecondaryDetails>
            </Card.SecondaryRow>
          </Card.InfoContainer>
        </Card.DetailsContainer>
      </Card.DetailsRelativeContainer> */}
    </Box>
  )
}
