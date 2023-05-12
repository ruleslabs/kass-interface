import Box, { BoxProps } from './Box'
import { sprinkles } from '../css/sprinkles.css'

export const Body = (props: BoxProps) =>
  <Box
    className={sprinkles({
      fontWeight: 'normal',
      color: 'text1',
      fontSize: '16',
    })}
    {...props}
  />

export const Link = (props: BoxProps) =>
  <Box
    className={sprinkles({
      fontWeight: 'normal',
      color: 'text1',
      fontSize: '16',
      cursor: 'pointer',
      textDecoration: {
        hover: 'underline',
      },
    })}
    {...props}
  />

  export const HeadlineSmall = (props: BoxProps) =>
    <Box
      className={sprinkles({
        fontWeight: 'medium',
        color: 'text1',
        fontSize: '18',
      })}
      {...props}
    />

export const HeadlineLarge = (props: BoxProps) =>
  <Box
    className={sprinkles({
      fontWeight: 'semibold',
      color: 'text1',
      fontSize: '32',
    })}
    {...props}
  />
