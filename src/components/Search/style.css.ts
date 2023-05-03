import { style } from '@vanilla-extract/css'

import { sprinkles } from 'src/theme/css/sprinkles.css'

export const Search = style([
  sprinkles({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    background: 'bg2',
    outlineColor: 'none',
    width: 'full',
    color: {
      default: 'text1',
      placeholder: 'text2',
    },
    borderRadius: '10',
    padding: '12',
    fontSize: '16',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border1',
  }),
])
