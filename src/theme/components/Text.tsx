import Box, { BoxProps } from './Box'
import { Sprinkles, sprinkles } from '../css/sprinkles.css'
import clsx from 'clsx'

interface TextProps extends BoxProps {
  loadingWidth?: Sprinkles['width']
}

const TextWrapper = ({ loadingWidth, loading, className, children, ...props }: TextProps) => {
  if (loading) {
    className = clsx(
      className,
      sprinkles({
        width: loadingWidth,
      })
    )
    children = <>&nbsp;</>
  }

  return (
    <Box className={className} loading={loading} {...props}>
      {children}
    </Box>
  )
}

export const Body = (props: TextProps) =>
  <TextWrapper
    className={sprinkles({
      fontWeight: 'normal',
      color: 'text1',
      fontSize: '16',
    })}
    {...props}
  />

export const Link = (props: TextProps) =>
  <TextWrapper
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

  export const HeadlineSmall = (props: TextProps) =>
    <TextWrapper
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
