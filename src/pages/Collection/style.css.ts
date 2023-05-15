import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from 'src/theme/css/sprinkles.css'

export const collectionHeaderContainer = sprinkles({
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
})

export const image = style([
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
  }),
])

export const collectionBodyContainer = sprinkles({
  paddingX: '48',
})

export const networkIcon = sprinkles({
  width: '32',
  height: '32',
  color: 'text1',
})
