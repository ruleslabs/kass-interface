import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from 'src/theme/css/sprinkles.css'

export const collectionContainer = sprinkles({
  paddingX: '16',
})

export const bannerContainer = sprinkles({
  position: 'relative',
})

export const banner = sprinkles({
  height: '288',
  width: 'full',
  objectFit: 'cover',
  borderRadius: '10',
  backgroundColor: 'bg2',
})

export const image = recipe({
  base: [
    {
      bottom: '-24px',
    },
    sprinkles({
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: 'bg1',
      borderRadius: 'round',
      width: '140',
      height: '140',
      position: 'absolute',
      left: '72',
    })
  ],

  variants: {
    loading: {
      true: sprinkles({ backgroundColor: 'bg2' }),
      false: sprinkles({ backgroundColor: 'bg1' }),
    },
  },

  defaultVariants: {
    loading: false,
  }
})

export const collectionDetaiContainer = sprinkles({
  paddingX: '24',
})

export const networkIcon = sprinkles({
  width: '32',
  height: '32',
  color: 'text1',
})

export const loadingText = recipe({
  base: sprinkles({
    minWidth: '276',
    background: 'bg2',
  }),

  variants: {
    loading: {

    }
  }
})
