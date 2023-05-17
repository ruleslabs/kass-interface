export interface KassCollection {
  nativeTokenAddress: string
  name?: string
  bannerImageUrl?: string
  imageUrl: string

  getNativeLayerIcon: () => React.ReactNode
}

export interface KassAsset {
  name?: string
  tokenId: string
  imageUrl: string
  animationUrl: string
  animationMimeType: string
  quantity: number
}
