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
  @import url('https://rsms.me/inter/inter.css');

  * {
    font-family: 'Inter', sans-serif;
  }

  @supports (font-variation-settings: normal) {
    * {
      font-family: 'Inter var', sans-serif;
    }
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    font-variant: none;
    color: 'black';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100%;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  html {
    background-color: ${({ theme }) => theme.bg1};
  }

  // elements

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary1};

    :hover {
      text-decoration: none
    }
  }

  button {
    user-select: none;
  }
`
