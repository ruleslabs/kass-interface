import { style } from '@vanilla-extract/css'

import { sprinkles } from 'src/theme/css/sprinkles.css'

export const Nav = style([
  sprinkles({
    position: 'sticky',
    padding: '24',
  }),
])

export const baseSideContainer = style([
  sprinkles({
    display: 'flex',
    flex: '1',
    flexShrink: '2',
    width: 'full',
  }),
])

export const leftSideContainer = style([
  baseSideContainer,
  sprinkles({
    flex: '1',
    justifyContent: 'flex-start',
  }),
])

export const searchContainer = style([
  sprinkles({
    flex: '1',
    justifyContent: 'center',
  }),
])

export const rightSideContainer = style([
  baseSideContainer,
  sprinkles({
    flex: '1',
    justifyContent: 'flex-end',
  }),
])
