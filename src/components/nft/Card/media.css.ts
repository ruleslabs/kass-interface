import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { breakpoints, sprinkles } from 'src/theme/css/sprinkles.css'
import { vars } from 'src/theme/css/vars.css'
import { container, mediaContainer } from './style.css'

const mediaScaleOnHover = style(
  {
    transition: `${vars.time.medium} ${vars.timing.ease} transform`,
    selectors: {
      [`${container().split(' ')[0]}:hover &`]: {
        transform: 'scale(1.15)',
      },
    },
  }
)

export const image = recipe({
  base: style([
    mediaScaleOnHover,
    sprinkles({
      width: 'full',
      objectFit: 'contain',
    }),
  ]),

  variants: {
    hidden: {
      true: sprinkles({ visibility: 'hidden' }),
    },
  },

  defaultVariants: {
    hidden: false,
  },
})

// playable media

export const playbackButton = recipe({
  base: [
    {
      pointerEvents: 'auto',

      '@media': {
        [`screen and (max-width: ${breakpoints.sm}px)`]: {
          display: 'flex',
        },
      },

      selectors: {
        [`${mediaContainer.split(' ')[0]}:hover &`]: {
          display: 'flex',
        },
      },
    },
    sprinkles({
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'text1',
      position: 'absolute',
      height: '20',
      width: '20',
      padding: '12',
      zIndex: '1',
      bottom: '8',
      right: '8',
      borderRadius: '10',
      background: 'bg1Transparent',
    })
  ],

  variants: {
    pauseButton: {
      true: sprinkles({ display: 'flex' }),
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

export const video = style([
  mediaScaleOnHover,
  sprinkles({
    width: 'full',
  }),
])

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
