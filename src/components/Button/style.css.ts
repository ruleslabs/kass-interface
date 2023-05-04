import { style } from '@vanilla-extract/css'

import { sprinkles } from 'src/theme/css/sprinkles.css'

export const Base = sprinkles({
  borderRadius: '10',
  fontWeight: 'medium',
  cursor: 'pointer',
  paddingX: '16',
  paddingY: '8',
  fontSize: '16',
  color: 'text1',
})

export const PrimaryButton = style([
  Base,
  sprinkles({
    border: 'none',
    background: {
      default: 'accent',
      hover: 'accentDark',
      focus: 'accentDarker',
      active: 'accentDarker',
    },
    outlineStyle: 'solid',
    outlineWidth: '1px',
    outlineColor: {
      default: 'transparent',
      hover: 'accentDark',
      focus: 'accentDarker',
      active: 'accentDarker',
    },
    color: 'text1',
  }),
])

export const SecondaryButton = style([
  Base,
  sprinkles({
    background: 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'text1',
  }),
])
