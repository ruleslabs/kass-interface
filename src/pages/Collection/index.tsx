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
          as={collection.bannerImageUrl ? 'img' : 'div'}
          className={styles.banner}
          src={collection.bannerImageUrl ?? ''}
        />

        <Box
          as={collection.imageUrl ? 'img' : 'div'}
          className={styles.image({ loading: !collection.imageUrl })}
          src={collection.imageUrl ?? ''}
        />
      </Box>

      <Box className={styles.collectionDetaiContainer}>
        <Row gap={'16'}>
          <Box className={styles.networkIcon}>
            {collection.getNativeLayerIcon()}
          </Box>
          <Text.HeadlineLarge autoLoadingWidth={'276'} loading={!collection.name}>
            {collection.name}
          </Text.HeadlineLarge>
        </Row>
      </Box>
    </Column>
  )
}
