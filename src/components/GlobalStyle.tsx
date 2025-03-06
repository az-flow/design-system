'use client'

import styled, { createGlobalStyle } from 'styled-components'
import { typography, fontWeightValues } from '@/styles/typography'

// 컬러 시스템 정의
const colorSystem = {
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

const GlobalStyles = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements */
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  :root {
    /* Neutral Colors */
    --color-neutral-black: ${colorSystem.neutral.black};
    --color-neutral-dark-text: ${colorSystem.neutral.darkText};
    --color-neutral-text-grey: ${colorSystem.neutral.textGrey};
    --color-neutral-icon-grey: ${colorSystem.neutral.iconGrey};
    --color-neutral-border-grey: ${colorSystem.neutral.borderGrey};
    --color-neutral-disabled-grey: ${colorSystem.neutral.disabledGrey};
    --color-neutral-hover-grey: ${colorSystem.neutral.hoverGrey};
    --color-neutral-surface-grey-1: ${colorSystem.neutral.surfaceGrey1};

    /* Brand Colors */
    --color-brand-deep-blue: ${colorSystem.brand.deepBlue};
    --color-brand-sky-blue: ${colorSystem.brand.skyBlue};
    --color-brand-active-blue: ${colorSystem.brand.activeBlue};
    --color-brand-hover-blue: ${colorSystem.brand.hoverBlue};

    /* System Colors - Error */
    --color-system-error-alert: ${colorSystem.system.error.alertRed};
    --color-system-error-warning: ${colorSystem.system.error.warningPink};
    --color-system-error-bg: ${colorSystem.system.error.errorBg};

    /* System Colors - Success */
    --color-system-success-green: ${colorSystem.system.success.successGreen};
    --color-system-success-bg: ${colorSystem.system.success.successBg};

    /* System Colors - Warning */
    --color-system-warning-yellow: ${colorSystem.system.warning.warningYellow};
    --color-system-warning-bg: ${colorSystem.system.warning.warningBg};

    /* System Colors - Info */
    --color-system-info-mint: ${colorSystem.system.info.infoMint};
    --color-system-info-bg: ${colorSystem.system.info.infoBg};

    /* Gradients */
    --gradient-brand: ${colorSystem.gradients.brand};
    --gradient-grey: ${colorSystem.gradients.grey};

    /* Background Colors */
    --color-background-white: ${colorSystem.background.white};
    --color-background-grey: ${colorSystem.background.grey};
  }

  /* Headline Styles */
  h1 {
    font-size: ${typography.h1.size};
    font-weight: ${fontWeightValues[typography.h1.weight]};
    line-height: ${typography.h1.lineHeight};
  }

  h2 {
    font-size: ${typography.h2.size};
    font-weight: ${fontWeightValues[typography.h2.weight]};
    line-height: ${typography.h2.lineHeight};
  }

  h3 {
    font-size: ${typography.h3.size};
    font-weight: ${fontWeightValues[typography.h3.weight]};
    line-height: ${typography.h3.lineHeight};
  }

  h4 {
    font-size: ${typography.h4.size};
    font-weight: ${fontWeightValues[typography.h4.weight]};
    line-height: ${typography.h4.lineHeight};
  }

  h5 {
    font-size: ${typography.h5.size};
    font-weight: ${fontWeightValues[typography.h5.weight]};
    line-height: ${typography.h5.lineHeight};
  }

  h6 {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }

  /* Body Text Classes */
  .subtitle1 {
    font-size: ${typography.subtitle1.size};
    font-weight: ${fontWeightValues[typography.subtitle1.weight]};
    line-height: ${typography.subtitle1.lineHeight};
  }

  .subtitle2 {
    font-size: ${typography.subtitle2.size};
    font-weight: ${fontWeightValues[typography.subtitle2.weight]};
    line-height: ${typography.subtitle2.lineHeight};
  }

  .body1 {
    font-size: ${typography.body1.size};
    font-weight: ${fontWeightValues[typography.body1.weight]};
    line-height: ${typography.body1.lineHeight};
  }

  .body2 {
    font-size: ${typography.body2.size};
    font-weight: ${fontWeightValues[typography.body2.weight]};
    line-height: ${typography.body2.lineHeight};
  }

  .body3 {
    font-size: ${typography.body3.size};
    font-weight: ${fontWeightValues[typography.body3.weight]};
    line-height: ${typography.body3.lineHeight};
  }

  .body4 {
    font-size: ${typography.body4.size};
    font-weight: ${fontWeightValues[typography.body4.weight]};
    line-height: ${typography.body4.lineHeight};
  }

  /* Caption Classes */
  .caption1 {
    font-size: ${typography.caption1.size};
    font-weight: ${fontWeightValues[typography.caption1.weight]};
    line-height: ${typography.caption1.lineHeight};
  }

  .caption2 {
    font-size: ${typography.caption2.size};
    font-weight: ${fontWeightValues[typography.caption2.weight]};
    line-height: ${typography.caption2.lineHeight};
  }

  .caption3 {
    font-size: ${typography.caption3.size};
    font-weight: ${fontWeightValues[typography.caption3.weight]};
    line-height: ${typography.caption3.lineHeight};
  }

  /* Label Class */
  .label {
    font-size: ${typography.label.size};
    font-weight: ${fontWeightValues[typography.label.weight]};
    line-height: ${typography.label.lineHeight};
  }

  /* Button Classes */
  .btn-giant {
    font-size: ${typography.button.giant.size};
    font-weight: ${fontWeightValues[typography.button.giant.weight]};
    line-height: ${typography.button.giant.lineHeight};
  }

  .btn-large {
    font-size: ${typography.button.large.size};
    font-weight: ${fontWeightValues[typography.button.large.weight]};
    line-height: ${typography.button.large.lineHeight};
  }

  .btn-medium {
    font-size: ${typography.button.medium.size};
    font-weight: ${fontWeightValues[typography.button.medium.weight]};
    line-height: ${typography.button.medium.lineHeight};
  }

  .btn-small {
    font-size: ${typography.button.small.size};
    font-weight: ${fontWeightValues[typography.button.small.weight]};
    line-height: ${typography.button.small.lineHeight};
  }

  .btn-tiny {
    font-size: ${typography.button.tiny.size};
    font-weight: ${fontWeightValues[typography.button.tiny.weight]};
    line-height: ${typography.button.tiny.lineHeight};
  }

  /* Divider */
  .divider {
    width: 100%;
    height: 1px;
    background-color: ${colorSystem.neutral.borderGrey};
  }
`

export { colorSystem }
const StyledWrapper = styled.div``

export default function GlobalStyleWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  )
} 