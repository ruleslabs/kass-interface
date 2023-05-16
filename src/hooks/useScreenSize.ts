// HOW TO USE:
// the hook returns a record of booleans, where the key is the name of the breakpoint
// if the screen size is greater than or equal to the breakpoint, the value will be true
// for example if the screen size is 1024px, the value of the 'md' key will be true and the value of the 'lg' key will be true
// if you were to check if the screen is smaller than a breakpoint you would check if it is false

import { useEffect, useState } from 'react'
import { breakpoints } from 'src/theme/css/sprinkles.css'

const isClient = typeof window !== 'undefined'

function getScreenSize(): Record<keyof typeof breakpoints, boolean> {
  return Object.keys(breakpoints).reduce(
    (obj, key) =>
      Object.assign(obj, {
        [key]: isClient ? window.innerWidth >= breakpoints[key as keyof typeof breakpoints] : false,
      }),
    {} as Record<keyof typeof breakpoints, boolean>
  )
}

export function useScreenSize(): Record<keyof typeof breakpoints, boolean> {
  const [screenSize, setScreenSize] = useState(getScreenSize())

  useEffect(() => {
    function handleResize() {
      setScreenSize(getScreenSize())
    }

    if (isClient) {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
    return undefined
  }, [])

  return screenSize
}
