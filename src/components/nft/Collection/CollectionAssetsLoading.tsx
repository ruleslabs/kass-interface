import { ASSET_PAGE_SIZE } from 'src/graphql/data/Assets'
import Box from 'src/theme/components/Box'
import * as Text from 'src/theme/components/Text'
import * as Card from '../Card/containers'

import SizingImage from 'src/assets/sizingImage.png'
import { container } from '../Card/containers.css'

const CollectionAssetLoading = ({ height }: { height?: number }) => {

}

interface LoadingAssetsProps {
  count?: number
  height?: number
}
Text
export default function LoadingAssets({ count = ASSET_PAGE_SIZE, height }: LoadingAssetsProps) {

  return (
    <>
      {Array.from(Array(count), (_, index) => (
        <Card.Container key={index} background={'bg2'}>
          <Box position={'relative'} width={'full'} style={{ height: height ? `${height}px` : 'auto' }} loading={true}>
            <Box position={'absolute'} width={'full'} height={'full'} />
            <Box as={'img'} src={SizingImage} width={'full'} opacity={'0'} draggable={false} />
          </Box>

          <Card.DetailsContainer>
            <Card.PrimaryInfo loading={true} loadingWidth={'120'} />
          </Card.DetailsContainer>
        </Card.Container>
      ))}
    </>
  )
}
