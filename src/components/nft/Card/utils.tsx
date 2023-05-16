import { useCallback } from 'react'

import { KassAsset, UniformAspectRatio, UniformAspectRatios } from 'src/types'
import { isAudio } from 'src/utils/nft/isAudio'
import { isVideo } from 'src/utils/nft/isVideo'
import { NftImage, NftPlayableMedia } from './media'

enum AssetMediaType {
  Image,
  Video,
  Audio,
}

function getAssetMediaType(asset: KassAsset) {
  let assetMediaType = AssetMediaType.Image
  if (asset.animationUrl) {
    if (isAudio(asset.animationUrl)) {
      assetMediaType = AssetMediaType.Audio
    } else if (isVideo(asset.animationUrl)) {
      assetMediaType = AssetMediaType.Video
    }
  }
  return assetMediaType
}

export function getNftDisplayComponent(
  asset: KassAsset,
  mediaShouldBePlaying: boolean,
  setCurrentTokenPlayingMedia: (tokenId: string | undefined) => void,
  uniformAspectRatio?: UniformAspectRatio,
  setUniformAspectRatio?: (uniformAspectRatio: UniformAspectRatio) => void,
  renderedHeight?: number,
  setRenderedHeight?: (renderedHeight: number | undefined) => void
) {
  switch (getAssetMediaType(asset)) {
    case AssetMediaType.Image:
      return (
        <NftImage
          src={asset.imageUrl}
          uniformAspectRatio={uniformAspectRatio}
          setUniformAspectRatio={setUniformAspectRatio}
          renderedHeight={renderedHeight}
          setRenderedHeight={setRenderedHeight}
        />
      )
    case AssetMediaType.Video:
      return (
        <NftPlayableMedia
          src={asset.imageUrl}
          mediaSrc={asset.animationUrl}
          tokenId={asset.tokenId}
          shouldPlay={mediaShouldBePlaying}
          setCurrentTokenPlayingMedia={setCurrentTokenPlayingMedia}
          uniformAspectRatio={uniformAspectRatio}
          setUniformAspectRatio={setUniformAspectRatio}
          renderedHeight={renderedHeight}
          setRenderedHeight={setRenderedHeight}
        />
      )
    case AssetMediaType.Audio:
      return (
        <NftPlayableMedia
          isAudio={true}
          src={asset.imageUrl}
          mediaSrc={asset.animationUrl}
          tokenId={asset.tokenId}
          shouldPlay={mediaShouldBePlaying}
          setCurrentTokenPlayingMedia={setCurrentTokenPlayingMedia}
          uniformAspectRatio={uniformAspectRatio}
          setUniformAspectRatio={setUniformAspectRatio}
          renderedHeight={renderedHeight}
          setRenderedHeight={setRenderedHeight}
        />
      )
  }
}

export function useSelectAsset({
  selectAsset,
  unselectAsset,
  isSelected,
  isDisabled,
  onClick,
}: {
  selectAsset?: () => void
  unselectAsset?: () => void
  isSelected: boolean
  isDisabled: boolean
  onClick?: () => void
}) {
  return useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()

      if (isDisabled) {
        return
      }

      if (onClick) {
        onClick()
        return
      }

      return isSelected ? unselectAsset?.() : selectAsset?.()
    },
    [selectAsset, isDisabled, onClick, unselectAsset, isSelected]
  )
}

export const handleUniformAspectRatio = (
  uniformAspectRatio: UniformAspectRatio,
  e: React.SyntheticEvent<HTMLElement, Event>,
  setUniformAspectRatio?: (uniformAspectRatio: UniformAspectRatio) => void,
  renderedHeight?: number,
  setRenderedHeight?: (renderedHeight: number | undefined) => void
) => {
  if (uniformAspectRatio !== UniformAspectRatios.square && setUniformAspectRatio) {
    const height = e.currentTarget.clientHeight
    const width = e.currentTarget.clientWidth
    const aspectRatio = width / height

    if (
      (!renderedHeight || renderedHeight !== height) &&
      aspectRatio < 1 &&
      uniformAspectRatio !== UniformAspectRatios.square &&
      setRenderedHeight
    ) {
      setRenderedHeight(height)
    }

    const variance = 0.05
    if (uniformAspectRatio === UniformAspectRatios.unset) {
      setUniformAspectRatio(aspectRatio >= 1 ? UniformAspectRatios.square : aspectRatio)
    } else if (aspectRatio > uniformAspectRatio + variance || aspectRatio < uniformAspectRatio - variance) {
      setUniformAspectRatio(UniformAspectRatios.square)
      setRenderedHeight && setRenderedHeight(undefined)
    }
  }
}

export function getHeightFromAspectRatio(
  uniformAspectRatio: UniformAspectRatio,
  renderedHeight?: number
): number | undefined {
  return uniformAspectRatio === UniformAspectRatios.square || uniformAspectRatio === UniformAspectRatios.unset
    ? undefined
    : renderedHeight
}

export function getMediaAspectRatio(
  uniformAspectRatio?: UniformAspectRatio,
  setUniformAspectRatio?: (uniformAspectRatio: UniformAspectRatio) => void
): string {
  return uniformAspectRatio === UniformAspectRatios.square || !setUniformAspectRatio ? '1' : 'auto'
}
