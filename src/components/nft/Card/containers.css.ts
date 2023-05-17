import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { sprinkles } from 'src/theme/css/sprinkles.css'

export const mediaContainer = recipe({
  base: style([
    {
      pointerEvents: 'auto',
    },
    sprinkles({
      position: 'relative',
    }),
  ]),

  variants: {
    disabled: {
      false: sprinkles({
        opacity: {
          hover: 'disabled',
        },
        cursor: {
          hover: 'pointer',
        },
      }),
    },
  },

  defaultVariants: {
    disabled: false,
  },
})

export const container = recipe({
  base: [
    {
      boxSizing: 'border-box',
      isolation: 'isolate',
    },
    sprinkles({
      position: 'relative',
      borderRadius: '10',
      overflow: 'hidden',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border1',
    }),
  ],

  variants: {
    loading: {
      true: sprinkles({ background: 'bg2' }),
      false: sprinkles({ background: 'black' }),
    },
  },

  defaultVariants: {
    loading: false,
  },
})

export const detailsContainer = sprinkles({
  paddingX: '8',
  paddingY: '16',
  background: 'bg2',
})

export const primaryInfo = style([
  {
    textOverflow: 'ellipsis',
  },
  sprinkles({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  }),
])
