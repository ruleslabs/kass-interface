import React, { useCallback, useState } from 'react'

import Box, { BoxProps } from './Box'

const Image = React.forwardRef(({ loading, src, ...props }: BoxProps, ref: React.ForwardedRef<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback(() => setLoaded(true), [])

  return <Box
    as={src ? 'img' : 'div'}
    ref={ref}
    src={src}
    loading={loading !== undefined ? loading : !loaded}
    onLoad={onLoad}
    {...props}
  />
})

Image.displayName = 'Image'

export default Image
