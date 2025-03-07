export type FontWeight = 'Regular' | 'Medium' | 'Semi Bold'
export type FontSize = '48' | '40' | '32' | '28' | '24' | '20' | '18' | '16' | '14' | '12' | '10'
export type LineHeight = '58' | '48' | '38' | '34' | '28' | '24' | '20' | '16' | '14' | '12'

export const fontWeightValues = {
  'Regular': 400,
  'Medium': 500,
  'Semi Bold': 600,
}

export const typography = {
  h1: {
    size: '48px',
    weight: 'Semi Bold',
    lineHeight: '58px',
  },
  h2: {
    size: '40px',
    weight: 'Semi Bold',
    lineHeight: '48px',
  },
  h3: {
    size: '32px',
    weight: 'Semi Bold',
    lineHeight: '38px',
  },
  h4: {
    size: '28px',
    weight: 'Semi Bold',
    lineHeight: '34px',
  },
  h5: {
    size: '24px',
    weight: 'Semi Bold',
    lineHeight: '28px',
  },
  h6: {
    size: '20px',
    weight: 'Semi Bold',
    lineHeight: '24px',
  },
  subtitle1: {
    size: '18px',
    weight: 'Semi Bold',
    lineHeight: '28px',
  },
  subtitle2: {
    size: '16px',
    weight: 'Semi Bold',
    lineHeight: '24px',
  },
  body1: {
    size: '16px',
    weight: 'Regular',
    lineHeight: '24px',
  },
  body2: {
    size: '16px',
    weight: 'Medium',
    lineHeight: '24px',
  },
  body3: {
    size: '14px',
    weight: 'Regular',
    lineHeight: '20px',
  },
  body4: {
    size: '14px',
    weight: 'Medium',
    lineHeight: '20px',
  },
  caption1: {
    size: '12px',
    weight: 'Regular',
    lineHeight: '16px',
  },
  caption2: {
    size: '12px',
    weight: 'Medium',
    lineHeight: '16px',
  },
  caption3: {
    size: '10px',
    weight: 'Medium',
    lineHeight: '14px',
  },
  label: {
    size: '12px',
    weight: 'Medium',
    lineHeight: '16px',
  },
  button: {
    giant: {
      size: '18px',
      weight: 'Semi Bold',
      lineHeight: '24px',
    },
    large: {
      size: '16px',
      weight: 'Semi Bold',
      lineHeight: '20px',
    },
    medium: {
      size: '14px',
      weight: 'Semi Bold',
      lineHeight: '16px',
    },
    small: {
      size: '12px',
      weight: 'Semi Bold',
      lineHeight: '16px',
    },
    tiny: {
      size: '10px',
      weight: 'Semi Bold',
      lineHeight: '12px',
    },
  },
} as const 