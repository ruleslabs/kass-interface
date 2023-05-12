import { useMatch } from 'react-router-dom'

import { useCollection } from 'src/graphql/data/Collection'
import Box from 'src/theme/components/Box'
import * as styles from './style.css'
import * as Text from 'src/theme/components/Text'
import { Column, Row } from 'src/theme/components/Flex'

export default function CollectionPage() {
  const match = useMatch('/collection/:address')
  const collectionAddress = match?.params.address

  const { data: collection } = useCollection(collectionAddress!)

  return (
    <Column className={styles.collectionContainer} marginTop={'32'} gap={'48'}>
      <Box className={styles.bannerContainer}>
        <Box
          as={'img'}
          className={styles.banner}
          src={collection.bannerImageUrl ? `${collection.bannerImageUrl}?w=${window.innerWidth}` : ''}
        />

        <Box as={'img'} className={styles.image} src={collection.imageUrl} />
      </Box>

      <Box className={styles.collectionDetaiContainer}>
        <Row gap={'16'}>
          <Box className={styles.networkIcon}>
            {collection.getNativeLayerIcon()}
          </Box>
          <Text.HeadlineLarge>{collection.name ?? collection.nativeTokenAddress}</Text.HeadlineLarge>
        </Row>
      </Box>
    </Column>
  )
}
