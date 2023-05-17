export const isAudio = (mimeType: string) => !!mimeType.match(/^audio\//i)

export const isVideo = (mimeType: string) => !!mimeType.match(/^video\//i)
