import { useMemo } from 'react'
import { useMatch } from 'react-router-dom'

import { useCollection } from 'src/graphql/data/Collection'
import Box from 'src/theme/components/Box'
import * as styles from './style.css'
import * as Text from 'src/theme/components/Text'
import * as Icons from 'src/theme/components/Icons'
import { Column, Row } from 'src/theme/components/Flex'
import { addr } from '@rulesorg/sdk-core'

export default function CollectionPage() {
  const match = useMatch('/collection/:address')
  const collectionAddress = useMemo(() => {
    try {
      return addr.checksum(match?.params.address)
    } catch (error) {
      console.error(error)
      return null
    }
  }, [match?.params.address])

  const { data: collection } = useCollection(collectionAddress ?? '', !collectionAddress)

  return (
    <Column className={styles.collectionContainer} marginTop={'32'} gap={'48'}>
      <Box className={styles.bannerContainer}>
        <Box
          as={collection.bannerImageUrl ? 'img' : 'div'}
          loading={!collection.bannerImageUrl}
          className={styles.banner}
          src={collection.bannerImageUrl}
        />

        <Box
          as={collection.imageUrl ? 'img' : 'div'}
          loading={!collection.imageUrl}
          className={styles.image}
          src={collection.imageUrl ?? ''}
        />
      </Box>

      <Box className={styles.collectionDetaiContainer}>
        <Text.HeadlineLarge loadingWidth={'276'} loading={!collection.name}>
          {collection.name}
        </Text.HeadlineLarge>
      </Box>

      {/* <Row gap={'16'}>
        <Text.
      </Row> */}
    </Column>
  )
}
