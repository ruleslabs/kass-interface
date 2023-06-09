import { useEffect, useRef, useState } from 'react'

import Box from 'src/theme/components/Box'
import * as styles from './media.css'
import * as Text from 'src/theme/components/Text'
import * as Icons from 'src/theme/components/Icons'
import { UniformAspectRatio, UniformAspectRatios } from 'src/types'
import { getHeightFromAspectRatio, getMediaAspectRatio, handleUniformAspectRatio } from './utils'
import { Row } from 'src/theme/components/Flex'
import Image from 'src/theme/components/Image'
import SizingImage from 'src/assets/sizingImage.png'

interface NftImageProps {
  src?: string
  uniformAspectRatio?: UniformAspectRatio
  setUniformAspectRatio?: (uniformAspectRatio: UniformAspectRatio) => void
  renderedHeight?: number
  setRenderedHeight?: (renderedHeight: number | undefined) => void
}

export function NftImage({
  src,
  uniformAspectRatio = UniformAspectRatios.square,
  setUniformAspectRatio,
  renderedHeight,
  setRenderedHeight,
}: NftImageProps) {
  const [noContent, setNoContent] = useState(!src)

  if (noContent) {
    return <NoContentContainer height={getHeightFromAspectRatio(uniformAspectRatio, renderedHeight)} />
  }

  return (
    <Row>
      <Image
        className={styles.image()}
        src={src}
        draggable={false}
        onError={() => setNoContent(true)}
        onLoad={(e) => {
          handleUniformAspectRatio(uniformAspectRatio, e, setUniformAspectRatio, renderedHeight, setRenderedHeight)
        }}
        style={{ aspectRatio: getMediaAspectRatio(uniformAspectRatio, setUniformAspectRatio) }}
      />
    </Row>
  )
}

interface NftPlayableMediaProps extends NftImageProps {
  isAudio?: boolean
  mediaSrc?: string
  tokenId?: string
  shouldPlay: boolean
  setCurrentTokenPlayingMedia: (tokenId: string | undefined) => void
}

export const NftPlayableMedia = ({
  isAudio,
  src,
  mediaSrc,
  tokenId,
  uniformAspectRatio = UniformAspectRatios.square,
  setUniformAspectRatio,
  renderedHeight,
  setRenderedHeight,
  shouldPlay,
  setCurrentTokenPlayingMedia,
}: NftPlayableMediaProps) => {
  const mediaRef = useRef<HTMLVideoElement>(null)
  const [noContent, setNoContent] = useState(!src)

  useEffect(() => {
    if (shouldPlay && mediaRef.current) {
      mediaRef.current.play()
    } else if (!shouldPlay && mediaRef.current) {
      mediaRef.current.pause()
    }
  }, [shouldPlay])

  if (noContent) {
    return <NoContentContainer height={getHeightFromAspectRatio(uniformAspectRatio, renderedHeight)} />
  }

  const aspectRatio = getMediaAspectRatio(uniformAspectRatio, setUniformAspectRatio)

  return (
    <>
      <Row>
        <Image
          className={styles.image({ hidden: shouldPlay && !isAudio })}
          src={src}
          draggable={false}
          onError={() => setNoContent(true)}
          onLoad={(e) => {
            handleUniformAspectRatio(uniformAspectRatio, e, setUniformAspectRatio, renderedHeight, setRenderedHeight)
          }}
          style={{ aspectRatio }}
        />
      </Row>
      {shouldPlay ? (
        <>
          <Box
            className={styles.playbackButton({ pauseButton: true })}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setCurrentTokenPlayingMedia(undefined)
            }}
          >
            <Icons.Pause />
          </Box>

          <Row className={styles.innerMediaContainer}>
            {isAudio ? (
              <Box
                as={'audio'}
                className={styles.audio}
                ref={mediaRef}
                onEnded={(e) => {
                  e.preventDefault()
                  setCurrentTokenPlayingMedia(undefined)
                }}
              >
                <source src={mediaSrc} />
              </Box>
            ) : (
              <Box
                as={'video'}
                className={styles.video}
                ref={mediaRef}
                onEnded={(e) => {
                  e.preventDefault()
                  setCurrentTokenPlayingMedia(undefined)
                }}
                style={{ aspectRatio }}
                loop
                playsInline
              >
                <source src={mediaSrc} />
              </Box>
            )}
          </Row>
        </>
      ) : (
        <Box
          className={styles.playbackButton()}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setCurrentTokenPlayingMedia(tokenId)
          }}
        >
          <Icons.Play />
        </Box>
      )}
    </>
  )
}

const NoContentContainer = ({ height }: { height?: number }) => (
  <Box className={styles.noContentContainerBackground} style={{ height: height ? `${height}px` : 'auto' }}>
    {!height && <Box as={'img'} src={SizingImage} width={'full'} opacity={'0'} draggable={false} />}
    <Text.Custom className={styles.noContentText}>
      Content not
      <br />
      available yet
    </Text.Custom>
  </Box>
)
