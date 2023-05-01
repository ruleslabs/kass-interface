export const colors = {
  white: '#ffffff',
  black: '#000000',

  gray50: '#f7f7f7',
  gray950: '#0D1114',

  vibrantPurple: '#9F04DC',
  purple: '#7C03AE',
}

type Theme = typeof darkTheme

export const commonTheme = {
  white: colors.white,
  black: colors.black,
}

export const darkTheme = {
  ...commonTheme,

  text1: colors.gray50,
  bg1: colors.gray950,

  primary1: colors.vibrantPurple,
  primary2: colors.purple,
}
