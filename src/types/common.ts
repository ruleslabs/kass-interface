export interface KassCollection {
  nativeTokenAddress: string
  name?: string
  bannerImageUrl?: string
  imageUrl: string

  getNativeLayerIcon: () => React.ReactNode
}
