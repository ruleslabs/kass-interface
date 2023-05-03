import { style } from '@vanilla-extract/css'

import { sprinkles } from 'src/theme/css/sprinkles.css'

export const Base = style([
  sprinkles({
    border: 'none',
    borderRadius: '10',
    fontWeight: 'medium',
    cursor: 'pointer',
    paddingX: '16',
    paddingY: '8',
    fontSize: '16',
  }),
])

export const PrimaryButton = style([
  Base,
  sprinkles({
    background: {
      default: 'accent',
      hover: 'accentDark',
      focus: 'accentDarker',
      active: 'accentDarker',
    },
    boxShadow: {
      hover: 'smallAccentDark',
      focus: 'smallAccentDarker',
      active: 'smallAccentDarker',
    },
    color: 'text1',
  }),
])
