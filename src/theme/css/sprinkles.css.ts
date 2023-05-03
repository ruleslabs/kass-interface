import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { dimensions, spacing, vars, zIndices } from './vars.css'

const overflow = ['hidden', 'inherit', 'scroll', 'visible', 'auto'] as const

const borderStyle = ['none', 'solid'] as const
const borderWidth = ['0px', '0.5px', '1px', '1.5px', '2px', '3px', '4px'] as const

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
}

const flexAlignment = [
  'flex-start',
  'center',
  'flex-end',
  'stretch',
  'baseline',
  'space-around',
  'space-between',
] as const

// STYLES

const layoutStyles = defineProperties({
  conditions: {
    xs: {},
    sm: { '@media': `screen and (min-width: ${breakpoints.sm}px)` },
    md: { '@media': `screen and (min-width: ${breakpoints.md}px)` },
    lg: { '@media': `screen and (min-width: ${breakpoints.lg}px)` },
  },
  defaultCondition: 'sm',
  properties: {
    alignItems: flexAlignment,
    flexDirection: ['row', 'column', 'column-reverse'],
    justifyContent: flexAlignment,
    flex: ['1', '1.5', '2', '3'],
    flexShrink: ['1', '1.5', '2', '3'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],

    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,

    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    marginTop: spacing,
    margin: spacing,

    width: dimensions,
    height: dimensions,
    maxWidth: dimensions,
    minWidth: dimensions,
    maxHeight: dimensions,
    minHeight: dimensions,

    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    paddingTop: spacing,
    padding: spacing,

    bottom: spacing,
    left: spacing,
    right: spacing,
    top: spacing,

    zIndex: zIndices,

    gap: spacing,

    display: ['none', 'block', 'flex', 'inline-flex', 'inline-block', 'grid', 'inline'],

    whiteSpace: ['nowrap'],

    textAlign: ['left', 'right', 'center', 'justify'],

    visibility: ['visible', 'hidden'],

    position: ['absolute', 'fixed', 'relative', 'sticky', 'static'],

    objectFit: ['contain', 'cover'],

    opacity: ['auto', '0', '0.1', '0.3', '0.5', '0.7', '1'],
  } as const,
  shorthands: {
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],

    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
})

const colorStyles = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    before: { selector: '&:before' },
    placeholder: { selector: '&::placeholder' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.color,

    background: vars.color,
    backgroundColor: vars.color,

    borderColor: vars.color,
    borderLeftColor: vars.color,
    borderBottomColor: vars.color,
    borderTopColor: vars.color,
    outlineColor: vars.color,

    fill: vars.color,

    boxShadow: vars.shadows,
  },
})

const unresponsiveProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
    before: { selector: '&:before' },
  },
  defaultCondition: 'default',
  properties: {
    cursor: ['default', 'pointer', 'auto'],

    borderStyle,
    borderLeftStyle: borderStyle,
    borderBottomStyle: borderStyle,
    borderTopStyle: borderStyle,
    borderRadius: vars.radii,
    border: vars.border,
    borderBottom: vars.border,
    borderTop: vars.border,
    borderWidth,
    borderBottomWidth: borderWidth,
    borderTopWidth: borderWidth,

    fontFamily: vars.fonts,

    overflow,
    overflowX: overflow,
    overflowY: overflow,

    transition: vars.time,
    transitionDuration: vars.time,
    animationDuration: vars.time,
  },
})

export const sprinkles = createSprinkles(layoutStyles, colorStyles, unresponsiveProperties)
export type Sprinkles = Parameters<typeof sprinkles>[0]
