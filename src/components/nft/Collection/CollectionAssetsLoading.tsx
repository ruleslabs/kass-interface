import { ASSET_PAGE_SIZE } from 'src/graphql/data/Assets'
import { LoadingNftCard } from '../Card'

interface LoadingAssetsProps {
  count?: number
  height?: number
}

const LoadingAssets = ({ count = ASSET_PAGE_SIZE, height }: LoadingAssetsProps) => (
  <>{Array.from(Array(count), (_, index) => <LoadingNftCard key={index} height={height} />)}</>
)

export default LoadingAssets
