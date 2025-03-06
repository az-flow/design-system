'use client'

import styled, { css } from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'
import { Section, SectionInner, SectionTitle, SectionContent } from '@/app/sections/page'

// Types
type ButtonSize = 'large' | 'mid' | 'small' | 'xsmall' | 'xxsmall'
type ButtonColor = 'special' | 'special_disabled' | 'primary' | 'subprimary' | 'disabled' | 'alert'
type ButtonType = 'filled' | 'outline'

interface ButtonProps {
  $type: ButtonType
  $color: ButtonColor
  $size: ButtonSize
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
const buttonColorStyles = {
  filled: {
    special: css`
      background: ${colorSystem.gradients.brand.replace('0deg', '270deg')};
      color: ${colorSystem.background.white};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    special_disabled: css`
      background: ${colorSystem.gradients.grey.replace('0deg', '270deg')};
      color: ${colorSystem.background.white};
    `,
    primary: css`
      background: ${colorSystem.brand.deepBlue};
      color: ${colorSystem.background.white};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    subprimary: css`
      background: ${colorSystem.brand.skyBlue};
      color: ${colorSystem.background.white};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    disabled: css`
      background: ${colorSystem.neutral.disabledGrey};
      color: ${colorSystem.background.white};
      cursor: not-allowed;
    `,
    alert: css`
      background: ${colorSystem.system.error.alertRed};
      color: ${colorSystem.background.white};
      &:hover {
        filter: brightness(0.9);
      }
    `
  },
  outline: {
    special: css`
      border-color: ${colorSystem.brand.deepBlue};
      color: ${colorSystem.brand.deepBlue};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    special_disabled: css`
      border-color: ${colorSystem.neutral.disabledGrey};
      color: ${colorSystem.neutral.disabledGrey};
      cursor: not-allowed;
    `,
    primary: css`
      border-color: ${colorSystem.brand.deepBlue};
      color: ${colorSystem.brand.deepBlue};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    subprimary: css`
      border-color: ${colorSystem.brand.skyBlue};
      color: ${colorSystem.brand.skyBlue};
      &:hover {
        filter: brightness(0.9);
      }
    `,
    disabled: css`
      border-color: ${colorSystem.neutral.disabledGrey};
      color: ${colorSystem.neutral.disabledGrey};
      cursor: not-allowed;
    `,
    alert: css`
      border-color: ${colorSystem.system.error.alertRed};
      color: ${colorSystem.system.error.alertRed};
      &:hover {
        filter: brightness(0.9);
      }
    `
  }
}

// Button Component
const Button = styled.button<ButtonProps>`
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

  /* Type specific styles */
  ${props => props.$type === 'filled' ? css`
    border: none;
  ` : css`
    background: ${colorSystem.background.white};
    border: 1px solid;
  `}

  /* Size styles */
  ${props => buttonSizeStyles[props.$size]}

  /* Color styles */
  ${props => buttonColorStyles[props.$type][props.$color]}
`

// Layout Components
const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 20px;
`

const VariantLabel = styled.div`
  width: 120px;
  font-size: 14px;
  color: ${colorSystem.neutral.darkText};
  font-weight: 600;
`

const SizeLabel = styled.div`
  font-size: 12px;
  color: ${colorSystem.neutral.darkText};
  text-align: center;
  min-width: 70px;
  flex: 1;
  
  &:nth-child(1) { min-width: 120px; }
  &:nth-child(2) { min-width: 100px; }
  &:nth-child(3) { min-width: 90px; }
  &:nth-child(4) { min-width: 80px; }
  &:nth-child(5) { min-width: 70px; }
`

const SizeLabelRow = styled(ButtonRow)`
  margin-left: 120px;
  margin-bottom: 32px;
  gap: 12px;
`

// Main Component
export default function ButtonsContent() {
  const sizes: ButtonSize[] = ['large', 'mid', 'small', 'xsmall', 'xxsmall']
  const colors: ButtonColor[] = ['special', 'special_disabled', 'primary', 'subprimary', 'disabled', 'alert']

  return (
    <Container>
      <Section>
        <SectionInner>
          <div>
            <SectionTitle className="h6">Filled</SectionTitle>
          </div>
          <SectionContent>
            <SizeLabelRow>
              {sizes.map(size => (
                <SizeLabel key={size}>{size}</SizeLabel>
              ))}
            </SizeLabelRow>
            {colors.map(color => (
              <ButtonRow key={color}>
                <VariantLabel>{color}</VariantLabel>
                {sizes.map(size => (
                  <Button
                    key={`${color}-${size}`}
                    $type="filled"
                    $color={color}
                    $size={size}
                  >
                    확인
                  </Button>
                ))}
              </ButtonRow>
            ))}
          </SectionContent>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <div>
            <SectionTitle className="h6">Outline</SectionTitle>
          </div>
          <SectionContent>
            <SizeLabelRow>
              {sizes.map(size => (
                <SizeLabel key={size}>{size}</SizeLabel>
              ))}
            </SizeLabelRow>
            {colors.map(color => (
              <ButtonRow key={color}>
                <VariantLabel>{color}</VariantLabel>
                {sizes.map(size => (
                  <Button
                    key={`${color}-${size}`}
                    $type="outline"
                    $color={color}
                    $size={size}
                  >
                    확인
                  </Button>
                ))}
              </ButtonRow>
            ))}
          </SectionContent>
        </SectionInner>
      </Section>
    </Container>
  )
} 