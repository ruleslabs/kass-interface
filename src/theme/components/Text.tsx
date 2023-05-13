import Box, { BoxProps } from './Box'
import { Sprinkles, sprinkles } from '../css/sprinkles.css'
import clsx, { ClassValue } from 'clsx'

interface TextProps extends BoxProps {
  autoLoadingWidth?: Sprinkles['width']
  loading?: boolean
}

const TextWrapper = ({ autoLoadingWidth, loading = false, className, children, ...props }: TextProps) => {
  if (loading) {
    className = clsx(
      className,
      sprinkles({
        backgroundColor: 'bg2',
        width: autoLoadingWidth,
      })
    )
    children = <>&nbsp;</>
  }

  return (
    <Box className={className} {...props} >{children}</Box>
  )
}

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

export const HeadlineLarge = (props: TextProps) =>
  <TextWrapper
    className={sprinkles({
      fontWeight: 'semibold',
      color: 'text1',
      fontSize: '32',
    })}
    {...props}
  />
