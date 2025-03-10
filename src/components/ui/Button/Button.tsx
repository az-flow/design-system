'use client'

import styled, { css } from 'styled-components'
import { colors } from '@/styles/colors'

// Types
export type ButtonSize = 'large' | 'mid' | 'small' | 'xsmall' | 'xxsmall'
export type FilledButtonColor = 'special' | 'special_disabled' | 'primary' | 'subprimary' | 'disabled' | 'alert'
export type OutlineButtonColor = 'default' | 'primary' | 'subprimary' | 'disabled' | 'alert'
export type ButtonColor = FilledButtonColor | OutlineButtonColor
export type ButtonType = 'filled' | 'outline'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $type?: ButtonType
  $color?: ButtonColor
  $size?: ButtonSize
  children: React.ReactNode
}

// Size styles
const buttonSizeStyles = {
  large: css`
    min-width: 120px;
    height: 56px;
    padding: 16px 23px;
    font-size: 20px;
  `,
  mid: css`
    min-width: 100px;
    height: 48px;
    padding: 14px 20px;
    font-size: 18px;
  `,
  small: css`
    min-width: 90px;
    height: 40px;
    padding: 12px 18px;
    font-size: 16px;
  `,
  xsmall: css`
    min-width: 80px;
    height: 36px;
    padding: 10px 16px;
    font-size: 14px;
  `,
  xxsmall: css`
    min-width: 70px;
    height: 32px;
    padding: 8px 14px;
    font-size: 12px;
  `
}

// Color styles
type ButtonColorStyles = {
  filled: { [K in FilledButtonColor]: ReturnType<typeof css> }
  outline: { [K in OutlineButtonColor]: ReturnType<typeof css> }
}

const buttonColorStyles: ButtonColorStyles = {
  filled: {
    special: css`
      background: ${colors.gradients.brand.replace('0deg', '270deg')};
      color: ${colors.background.white};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    special_disabled: css`
      background: ${colors.gradients.grey.replace('0deg', '270deg')};
      color: ${colors.background.white};
    `,
    primary: css`
      background: ${colors.brand.deepBlue};
      color: ${colors.background.white};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    subprimary: css`
      background: ${colors.brand.skyBlue};
      color: ${colors.background.white};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    disabled: css`
      background: ${colors.neutral.disabledGrey};
      color: ${colors.background.white};
      cursor: not-allowed;
    `,
    alert: css`
      background: ${colors.system.error.alertRed};
      color: ${colors.background.white};
      &:hover {
        filter: brightness(0.9);
      }
    `
  },
  outline: {
    default: css`
      border-color: ${colors.neutral.borderGrey};
      color: ${colors.neutral.textGrey};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    primary: css`
      border-color: ${colors.brand.deepBlue};
      color: ${colors.brand.deepBlue};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    subprimary: css`
      border-color: ${colors.brand.skyBlue};
      color: ${colors.brand.skyBlue};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    disabled: css`
      border-color: ${colors.neutral.disabledGrey};
      color: ${colors.neutral.disabledGrey};
      cursor: not-allowed;
    `,
    alert: css`
      border-color: ${colors.system.error.alertRed};
      color: ${colors.system.error.alertRed};
      &:hover {
        filter: brightness(0.9);
      }
    `
  }
}

// Button Component
const StyledButton = styled.button<ButtonProps>`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  position: relative;

  /* Common styles */
  border-radius: 7px;
  font-weight: ${props => props.$type === 'filled' ? 600 : 500};
  line-height: 1.2;
  transition: all 0.2s ease;
  cursor: pointer;
  font-family: 'Pretendard';
  font-style: normal;

  /* Type specific styles */
  ${props => props.$type === 'filled' ? css`
    border: none;
  ` : css`
    background: ${colors.background.white};
    border: 1px solid;
  `}

  /* Size styles */
  ${props => buttonSizeStyles[props.$size || 'mid']}

  /* Color styles */
  ${props => {
    const type = props.$type || 'filled'
    const color = props.$color || (type === 'filled' ? 'primary' : 'default')
    if (type === 'filled') {
      return buttonColorStyles.filled[color as FilledButtonColor]
    }
    return buttonColorStyles.outline[color as OutlineButtonColor]
  }}
`

export const Button = ({
  $type = 'filled',
  $color = 'primary',
  $size = 'mid',
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $type={$type}
      $color={$color}
      $size={$size}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button