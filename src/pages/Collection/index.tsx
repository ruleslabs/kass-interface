import { useMemo, useState } from 'react'
import { useMatch } from 'react-router-dom'

import { useCollection } from 'src/graphql/data/Collection'
import Box from 'src/theme/components/Box'
import * as styles from './style.css'
import * as Text from 'src/theme/components/Text'
import { Column, Row } from 'src/theme/components/Flex'
import { addr } from '@rulesorg/sdk-core'
import CollectionAssets from 'src/components/nft/Collection/CollectionNfts'
import Image from 'src/theme/components/Image'

export default function CollectionPage() {
  const [bannerLoaded, setBannerLoaded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

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
    <>
      <Box className={styles.collectionHeaderContainer} marginTop={'32'}>
        <Box className={styles.bannerContainer}>
          <Image className={styles.banner} src={collection.bannerImageUrl} />

          <Image className={styles.image} src={collection.imageUrl} />
        </Box>
      </Box>

      <Column className={styles.collectionBodyContainer} gap={'48'} marginTop={'48'} paddingBottom={'32'}>
        <Row gap={'16'}>
          <Box className={styles.networkIcon}>
            {collection.getNativeLayerIcon()}
          </Box>
          <Text.HeadlineLarge loadingWidth={'276'} loading={!collection.name}>
            {collection.name}
          </Text.HeadlineLarge>
        </Row>

        {collectionAddress && <CollectionAssets contractAddress={collectionAddress} />}
      </Column>
    </>
  )
}
