import { style } from '@vanilla-extract/css'

import { sprinkles } from 'src/theme/css/sprinkles.css'

export const Nav = style([
  sprinkles({
    position: 'sticky',
    padding: '24',
  }),
])
