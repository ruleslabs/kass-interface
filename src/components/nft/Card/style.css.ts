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

export const cardContainer = recipe({
  base: [
    {
      boxShadow: '0px 0px 8px rgba(51, 53, 72, 0.04), 1px 2px 4px rgba(51, 53, 72, 0.12)',
      boxSizing: 'border-box',
      isolation: 'isolate',
    },
    sprinkles({
      position: 'relative',
      borderRadius: '10',
      backgroundColor: 'bg2',
      overflow: 'hidden',
    }),
  ],
})


// const StyledCardContainer = styled.div<{ selected: boolean; isDisabled: boolean }>`
//   // position: relative;
//   // border-radius: ${BORDER_RADIUS}px;
//   // background-color: ${({ theme }) => theme.backgroundSurface};
//   // overflow: hidden;
//   // box-shadow: 0px 0px 8px rgba(51, 53, 72, 0.04), 1px 2px 4px rgba(51, 53, 72, 0.12);
//   // box-sizing: border-box;
//   // -webkit-box-sizing: border-box;
//   // isolation: isolate;

//   :after {
//     content: '';
//     position: absolute;
//     top: 0px;
//     right: 0px;
//     bottom: 0px;
//     left: 0px;
//     border: ${({ selected }) => (selected ? '3px' : '1px')} solid;
//     border-radius: ${BORDER_RADIUS}px;
//     border-color: ${({ theme, selected }) => (selected ? theme.accentAction : theme.backgroundOutline)};
//     pointer-events: none;
//     transition: ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.ease} border`};
//     will-change: border;

//     @media screen and (max-width: ${BREAKPOINTS.sm}px) {
//       ${({ selected, theme }) => selected && `border-color: ${theme.accentCritical}`};
//     }
//   }

//   :hover::after {
//     ${({ selected, theme }) => selected && `border-color: ${theme.accentCritical}`};
//   }

//   :hover {
//     ${StyledActionButton} {
//       visibility: visible;
//       bottom: 8px;
//     }

//     ${StyledDetailsContainer} {
//       height: 112px;
//       transform: translateY(-28px);
//     }

//     ${StyledImage} {
//       transform: scale(1.15);
//     }
//   }
// `
