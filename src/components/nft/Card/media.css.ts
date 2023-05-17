import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { breakpoints, sprinkles } from 'src/theme/css/sprinkles.css'
import { vars } from 'src/theme/css/vars.css'
import { container } from './containers.css'

export const mediaContainer = sprinkles({
  overflow: 'hidden',
})

export const image = recipe({
  base: style([
    {
      transition: `${vars.time.medium} ${vars.timing.ease} transform`,
      selectors: {
        [`${container().split(' ')[0]}:hover &`]: {
          transform: 'scale(1.15)',
        },
      },
    },
    sprinkles({
      width: 'full',
      objectFit: 'contain',
    })
  ]),

  variants: {
    hidden: {
      true: sprinkles({ visibility: 'hidden' }),
      false: sprinkles({ visibility: 'visible' }),
    }
  },

  defaultVariants: {
    hidden: false,
  },
})

// playable media

export const playbackButton = recipe({
  base: [
    {
      marginLeft: 'calc(100% - 50px)',
      transform: 'translateY(-76px)',

      '@media': {
        [`screen and (max-width: ${breakpoints.sm}px)`]: {
          display: 'block',
        },
      },

      selectors: {
        [`${mediaContainer}:hover &`]: {
          display: 'block',
        },
      },
    },
    sprinkles({
      color: 'accent',
      position: 'absolute',
      height: '40',
      width: '40',
      zIndex: '1',
    })
  ],

  variants: {
    pauseButton: {
      true: sprinkles({ display: 'block' }),
      false: sprinkles({ display: 'none' }),
    },
  },

  defaultVariants: {
    pauseButton: false
  }
})

export const audio = sprinkles({
  width: 'full',
  height: 'full',
})

export const video = sprinkles({
  width: 'full',
})

export const innerMediaContainer = sprinkles({
  position: 'absolute',
  left: '0',
  top: '0',
})

// No content

export const noContentContainerBackground = style([
  {
    background: `linear-gradient(90deg, ${vars.color.gray900} 0%, ${vars.color.gray800} 95.83%)`,
  },
  sprinkles({
    position: 'relative',
    width: 'full',
  })
])

export const noContentText = style([
  {
    transform: 'translate3d(-50%, -50%, 0)',
  },
  sprinkles({
    position: 'absolute',
    textAlign: 'center',
    left: '1/2',
    top: '1/2',
    color: 'text2',
  })
])
