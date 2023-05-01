import React from 'react'
import { createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/macro'
import styled from 'styled-components'
import { Text } from 'rebass'
import { darkTheme } from './colors'

export function getTheme() {
  return { ...darkTheme }
}

export default function ThemeProvider({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <StyledComponentsThemeProvider theme={getTheme()}>{children}</StyledComponentsThemeProvider>
}

const getT = () => ({
  white: '#ffffff',
  black: '#000000',

  textColor: '#f7f7f7',

  primary1: '#9F04DC',
  primary2: '#7C03AE',

  bg1: '#0D1114',
})

const TextWrapper = styled(Text)<{ color: string }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const TYPE = {
  main(props: React.HTMLAttributes<HTMLDivElement>) {
    return <TextWrapper fontWeight={500} fontSize={14} color={'text1'} {...props} />
  },

  body(props: React.HTMLAttributes<HTMLDivElement>) {
    return <TextWrapper fontWeight={400} fontSize={14} color={'text1'} {...props} />
  },

  small(props: React.HTMLAttributes<HTMLDivElement>) {
    return <TextWrapper fontWeight={500} fontSize={11} color={'text1'} {...props} />
  },

  header(props: React.HTMLAttributes<HTMLDivElement>) {
    return <TextWrapper fontWeight={600} color={'text1'} {...props} />
  },

  largeHeader(props: React.HTMLAttributes<HTMLDivElement>) {
    return <TextWrapper fontWeight={500} color={'text1'} fontSize={24} {...props} />
  },

  light(props: React.HTMLAttributes<HTMLDivElement>) {
    return <TextWrapper fontWeight={400} color={'text3'} fontSize={14} {...props} />
  },
}

export const ThemedGlobalStyle = createGlobalStyle`
  html {
    color: ${({ theme }) => theme.primary1};
    background-color: ${({ theme }) => theme.bg1} !important;
  }

  summary::-webkit-details-marker {
    display:none;
  }

  a {
    color: ${({ theme }) => theme.primary1};
  }
`
