import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import { darken } from 'polished'

const themeContractValues = {
  color: {
    transparent: null,
    none: null,
    white: null,
    black: null,

    text1: null,
    text2: null,

    bg1: null,
    bg2: null,

    border1: null,

    accent: null,
    accentDark: null,
    accentDarker: null,
  },
  border: {
    light: null,
    none: null,
  },
  radii: {
    '10': null,
    'round': null,
  },
  fontSize: {
    '0': null,
    '16': null,
    '18': null,
    '24': null,
    '32': null,
  },
  fontWeight: {
    normal: null,
    medium: null,
    semibold: null,
    bold: null,
  },
  time: {
    '125': null,
    '250': null,
    '500': null,
  },
  fonts: {
    body: null,
    heading: null,
  },
  shadows: {
    none: null,
  },
}

export const vars = createGlobalThemeContract(themeContractValues, (_, path) => `theme-${path.join('-')}`)

export const dimensions = {
  '0': '0',
  '2': '2',
  '4': '4px',
  '8': '8px',
  '12': '12px',
  '16': '16px',
  '18': '18px',
  '20': '20px',
  '24': '24px',
  '26': '26px',
  '28': '28px',
  '32': '32px',
  '36': '36px',
  '40': '40px',
  '42': '42px',
  '44': '44px',
  '48': '48px',
  '52': '52px',
  '54': '54px',
  '56': '56px',
  '60': '60px',
  '64': '64px',
  '68': '68px',
  '72': '72px',
  '80': '80px',
  '100': '100px',
  '120': '120px',
  '140': '140px',
  '276': '276px',
  '288': '288px',
  '292': '292px',
  '332': '332px',
  '386': '386px',
  half: '50%',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  viewHeight: '100vh',
  viewWidth: '100vw',
  auto: 'auto',
  inherit: 'inherit',
}

export const spacing = {
  '0': '0',
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '6': '6px',
  '8': '8px',
  '10': '10px',
  '12': '12px',
  '14': '14px',
  '16': '16px',
  '18': '18px',
  '20': '20px',
  '24': '24px',
  '28': '28px',
  '32': '32px',
  '36': '36px',
  '40': '40px',
  '48': '48px',
  '50': '50px',
  '52': '52px',
  '56': '56px',
  '60': '60px',
  '64': '64px',
  '82': '82px',
  '72': '72px',
  '88': '88px',
  '100': '100px',
  '104': '104px',
  '136': '136px',
  '150': '150px',
  '1/2': '50%',
  auto: 'auto',
  unset: 'unset',
}

export const zIndices = {
  auto: 'auto',
  '1': '1',
  '2': '2',
  '3': '3',
  sticky: '1020',
  fixed: '1030',
  modalBackdrop: '1040',
  modal: '1060',
  tooltip: '1080',
}

const colors = {
  transparent: 'transparent',
  none: 'none',
  white: '#ffffff',
  black: '#000000',

  gray50: '#f7f7f7',
  gray950: '#0D1114',
  gray900: '#191B1D',
  gray800: '#363838',
  gray500: '#828585',

  vibrantPurple: '#9F04DC',
}

createGlobalTheme(':root', vars, {
  color: {
    ...Object
      .keys(colors)
      .filter((key) => (themeContractValues.color as any)[key] === null)
      .reduce((acc: any, key) => {
        acc[key] = (colors as any)[key]
        return acc
      }, {}),

    text1: colors.gray50,
    text2: colors.gray500,

    bg1: colors.gray950,
    bg2: colors.gray900,

    border1: colors.gray800,

    accent: colors.vibrantPurple,
    accentDark: darken(0.05, colors.vibrantPurple),
    accentDarker: darken(0.1, colors.vibrantPurple),
  },
  border: {
    light: '1px solid rgba(0, 0, 0, 0.3)',
    none: 'none',
  },
  radii: {
    '10': '10px',
    'round': '9999px',
  },
  fontSize: {
    '0': '0',
    '16': '16px',
    '18': '18px',
    '24': '24px',
    '32': '32px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  time: {
    '125': '125ms',
    '250': '250ms',
    '500': '500ms',
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'montserrat, sans-serif',
  },
  shadows: {
    none: 'none',
  },
})
