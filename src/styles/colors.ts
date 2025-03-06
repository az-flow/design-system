export const colors = {
  neutral: {
    black: '#000000',
    darkText: '#1F1F1F',
    textGrey: '#67727A',
    iconGrey: '#8C929A',
    borderGrey: '#D1DAE3',
    disabledGrey: '#D7DBE1',
    hoverGrey: '#D9E2ED',
    surfaceGrey1: '#EDF2F8',
  },
  brand: {
    deepBlue: '#0054C6',
    skyBlue: '#68A9FF',
    activeBlue: '#358CFF',
    hoverBlue: '#E8F2FF',
  },
  system: {
    error: {
      alertRed: '#FF2732',
      warningPink: '#FFC9C9',
      errorBg: '#FCEFED',
    },
    success: {
      successGreen: '#65FF17',
      successBg: '#D4FFBF',
    },
    warning: {
      warningYellow: '#F6FF4F',
      warningBg: '#F9FF8C',
    },
    info: {
      infoMint: '#3EFFEF',
      infoBg: '#C5FFFA',
    },
  },
  gradients: {
    brand: 'linear-gradient(180deg, #68A9FF 0%, #0054C6 100%)',
    grey: 'linear-gradient(180deg, #D9E2ED 0%, #B7BEC8 100%)',
  },
  background: {
    white: '#FFFFFF',
    grey: '#F2F3F6'
  },
} as const 