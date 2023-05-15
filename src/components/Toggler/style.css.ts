import { recipe } from '@vanilla-extract/recipes'
import { borderWidth } from 'polished'
import { sprinkles } from 'src/theme/css/sprinkles.css'
import { vars } from 'src/theme/css/vars.css'

export const togglerContainer = sprinkles({
  borderWidth: '0px',
  borderBottomWidth: '1px',
  borderColor: 'border1',
  borderStyle: 'solid',
})

export const togglerButton = recipe({
  base: [
    {
      '::after': {
        content: "",
        left: '0',
        right: '0',
        position: 'absolute',
        bottom: '-1px',
        height: '2px',
      },
    },
    sprinkles({
      position: 'relative',
      cursor: 'pointer',
      fontSize: '16',
      fontWeight: 'semibold',
      paddingBottom: '8',
    })
  ],

  variants: {
    active: {
      true: [
        {
          '::after': {
            backgroundColor: vars.color.text1,
          }
        },
        sprinkles({
          color: 'text1',
        })
      ],
      false: sprinkles({
        color: 'text2',
      }),
    },
  },

  defaultVariants: {
    active: false,
  },
})
