'use client'

import styled, { createGlobalStyle } from 'styled-components'
import { typography, fontWeightValues } from '@/styles/typography'
import { colors } from '@/styles/colors'

// For backward compatibility with existing code
export const colorSystem = colors;

// Import Pretendard font using <link> tag instead of @import in createGlobalStyle
// This should be added to your _document.js or similar file
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />

const GlobalStyles = createGlobalStyle`
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
    --color-neutral-black: ${colors.neutral.black};
    --color-neutral-dark-text: ${colors.neutral.darkText};
    --color-neutral-text-grey: ${colors.neutral.textGrey};
    --color-neutral-icon-grey: ${colors.neutral.iconGrey};
    --color-neutral-border-grey: ${colors.neutral.borderGrey};
    --color-neutral-disabled-grey: ${colors.neutral.disabledGrey};
    --color-neutral-hover-grey: ${colors.neutral.hoverGrey};
    --color-neutral-surface-grey-1: ${colors.neutral.surfaceGrey1};

    /* Brand Colors */
    --color-brand-deep-blue: ${colors.brand.deepBlue};
    --color-brand-sky-blue: ${colors.brand.skyBlue};
    --color-brand-active-blue: ${colors.brand.activeBlue};
    --color-brand-hover-blue: ${colors.brand.hoverBlue};

    /* System Colors - Error */
    --color-system-error-alert: ${colors.system.error.alertRed};
    --color-system-error-warning: ${colors.system.error.warningPink};
    --color-system-error-bg: ${colors.system.error.errorBg};

    /* System Colors - Success */
    --color-system-success-green: ${colors.system.success.successGreen};
    --color-system-success-bg: ${colors.system.success.successBg};

    /* System Colors - Warning */
    --color-system-warning-yellow: ${colors.system.warning.warningYellow};
    --color-system-warning-bg: ${colors.system.warning.warningBg};

    /* System Colors - Info */
    --color-system-info-mint: ${colors.system.info.infoMint};
    --color-system-info-bg: ${colors.system.info.infoBg};

    /* Gradients */
    --gradient-brand: ${colors.gradients.brand};
    --gradient-grey: ${colors.gradients.grey};

    /* Background Colors */
    --color-background-white: ${colors.background.white};
    --color-background-grey: ${colors.background.grey};
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
    background-color: ${colors.neutral.borderGrey};
  }
`

const StyledWrapper = styled.div``

export default function GlobalStyleWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  )
}