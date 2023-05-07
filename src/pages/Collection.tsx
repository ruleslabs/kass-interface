import { useMatch } from 'react-router-dom'

import { useCollection } from 'src/graphql/data/Collection'
import useAddressNetworkLayer from 'src/hooks/useGetAddressNetwork'

export default function CollectionPage() {
  const match = useMatch('/collection/:address')
  const collectionAddress = match?.params.address

  const network = useAddressNetworkLayer(collectionAddress)

  const collection = useCollection(collectionAddress!)

  console.log(collection)

  if (!network) return null

  return <>{collectionAddress}</>
}
