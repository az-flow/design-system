'use client'

import React, { ElementType } from 'react'
import styled, { css } from 'styled-components'
import { typography, fontWeightValues } from '@/styles/typography'

type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' 
  | 'subtitle1' | 'subtitle2' 
  | 'body1' | 'body2' | 'body3' | 'body4' 
  | 'caption1' | 'caption2' | 'caption3' 
  | 'label' 
  | 'button-giant' | 'button-large' | 'button-medium' | 'button-small' | 'button-tiny'

type TypographyElement = ElementType

export interface TypographyProps {
  variant: TypographyVariant
  children: React.ReactNode
  className?: string
}

const variantStyles = {
  'h1': css`
    font-size: ${typography.h1.size};
    font-weight: ${fontWeightValues[typography.h1.weight]};
    line-height: ${typography.h1.lineHeight};
  `,
  'h2': css`
    font-size: ${typography.h2.size};
    font-weight: ${fontWeightValues[typography.h2.weight]};
    line-height: ${typography.h2.lineHeight};
  `,
  'h3': css`
    font-size: ${typography.h3.size};
    font-weight: ${fontWeightValues[typography.h3.weight]};
    line-height: ${typography.h3.lineHeight};
  `,
  'h4': css`
    font-size: ${typography.h4.size};
    font-weight: ${fontWeightValues[typography.h4.weight]};
    line-height: ${typography.h4.lineHeight};
  `,
  'h5': css`
    font-size: ${typography.h5.size};
    font-weight: ${fontWeightValues[typography.h5.weight]};
    line-height: ${typography.h5.lineHeight};
  `,
  'h6': css`
    font-size: ${typography.h6.size};
    font-weight: ${fontWeightValues[typography.h6.weight]};
    line-height: ${typography.h6.lineHeight};
  `,
  'subtitle1': css`
    font-size: ${typography.subtitle1.size};
    font-weight: ${fontWeightValues[typography.subtitle1.weight]};
    line-height: ${typography.subtitle1.lineHeight};
  `,
  'subtitle2': css`
    font-size: ${typography.subtitle2.size};
    font-weight: ${fontWeightValues[typography.subtitle2.weight]};
    line-height: ${typography.subtitle2.lineHeight};
  `,
  'body1': css`
    font-size: ${typography.body1.size};
    font-weight: ${fontWeightValues[typography.body1.weight]};
    line-height: ${typography.body1.lineHeight};
  `,
  'body2': css`
    font-size: ${typography.body2.size};
    font-weight: ${fontWeightValues[typography.body2.weight]};
    line-height: ${typography.body2.lineHeight};
  `,
  'body3': css`
    font-size: ${typography.body3.size};
    font-weight: ${fontWeightValues[typography.body3.weight]};
    line-height: ${typography.body3.lineHeight};
  `,
  'body4': css`
    font-size: ${typography.body4.size};
    font-weight: ${fontWeightValues[typography.body4.weight]};
    line-height: ${typography.body4.lineHeight};
  `,
  'caption1': css`
    font-size: ${typography.caption1.size};
    font-weight: ${fontWeightValues[typography.caption1.weight]};
    line-height: ${typography.caption1.lineHeight};
  `,
  'caption2': css`
    font-size: ${typography.caption2.size};
    font-weight: ${fontWeightValues[typography.caption2.weight]};
    line-height: ${typography.caption2.lineHeight};
  `,
  'caption3': css`
    font-size: ${typography.caption3.size};
    font-weight: ${fontWeightValues[typography.caption3.weight]};
    line-height: ${typography.caption3.lineHeight};
  `,
  'label': css`
    font-size: ${typography.label.size};
    font-weight: ${fontWeightValues[typography.label.weight]};
    line-height: ${typography.label.lineHeight};
  `,
  'button-giant': css`
    font-size: ${typography.button.giant.size};
    font-weight: ${fontWeightValues[typography.button.giant.weight]};
    line-height: ${typography.button.giant.lineHeight};
  `,
  'button-large': css`
    font-size: ${typography.button.large.size};
    font-weight: ${fontWeightValues[typography.button.large.weight]};
    line-height: ${typography.button.large.lineHeight};
  `,
  'button-medium': css`
    font-size: ${typography.button.medium.size};
    font-weight: ${fontWeightValues[typography.button.medium.weight]};
    line-height: ${typography.button.medium.lineHeight};
  `,
  'button-small': css`
    font-size: ${typography.button.small.size};
    font-weight: ${fontWeightValues[typography.button.small.weight]};
    line-height: ${typography.button.small.lineHeight};
  `,
  'button-tiny': css`
    font-size: ${typography.button.tiny.size};
    font-weight: ${fontWeightValues[typography.button.tiny.weight]};
    line-height: ${typography.button.tiny.lineHeight};
  `,
}

const StyledTypography = styled.div<{ $variant: TypographyVariant }>`
  ${props => variantStyles[props.$variant]}
`

const variantElementMap: Record<TypographyVariant, TypographyElement> = {
  'h1': 'h1',
  'h2': 'h2',
  'h3': 'h3',
  'h4': 'h4',
  'h5': 'h5',
  'h6': 'h6',
  'subtitle1': 'h6',
  'subtitle2': 'h6',
  'body1': 'p',
  'body2': 'p',
  'body3': 'p',
  'body4': 'p',
  'caption1': 'span',
  'caption2': 'span',
  'caption3': 'span',
  'label': 'label',
  'button-giant': 'span',
  'button-large': 'span',
  'button-medium': 'span',
  'button-small': 'span',
  'button-tiny': 'span',
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  return (
    <StyledTypography 
      as={variantElementMap[variant]} 
      $variant={variant} 
      className={className}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography