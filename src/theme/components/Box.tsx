// Inspired by https://github.com/Uniswap/interface/blob/main/src/nft/components/Box.ts

import React from 'react'
import clsx, { ClassValue } from 'clsx'

import { sprinkles, Sprinkles } from '../css/sprinkles.css'

type HTMLProperties<T = HTMLElement> = Omit<
  React.AllHTMLAttributes<T>,
  'as' | 'className' | 'color' | 'height' | 'width'
>

type Props = Sprinkles &
  HTMLProperties & {
    as?: React.ElementType,
    className?: ClassValue,
  }

const Box = React.forwardRef<HTMLElement, Props>(({ as = 'div', className, ...props }, ref) => {
  const atomProps: Record<string, unknown> = {}
  const nativeProps: Record<string, unknown> = {}

  // filter Native and Sprinkles props
  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      atomProps[key] = props[key as keyof typeof props]
    } else {
      nativeProps[key] = props[key as keyof typeof props]
    }
  }

  // compute class names
  const atomicClasses = clsx(className, sprinkles(atomProps))

  return React.createElement(as, {
    className: atomicClasses,
    ...nativeProps,
    ref,
  })
})

export default Box

export type BoxProps = Parameters<typeof Box>[0]
