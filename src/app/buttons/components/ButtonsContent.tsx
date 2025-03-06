'use client'

import styled from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'
import { Section, SectionInner, SectionTitle, SectionContent, Grid } from '@/app/sections/page'

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
  
  &:nth-child(1) { min-width: 120px; }  /* large */
  &:nth-child(2) { min-width: 100px; }  /* mid */
  &:nth-child(3) { min-width: 90px; }   /* small */
  &:nth-child(4) { min-width: 80px; }   /* xsmall */
  &:nth-child(5) { min-width: 70px; }   /* xxsmall */
`

const SizeLabelRow = styled(ButtonRow)`
  margin-left: 120px;
  margin-bottom: 32px;
  gap: 12px;
`

interface ButtonProps {
  $size?: 'large' | 'mid' | 'small' | 'xsmall' | 'xxsmall';
  $variant?: 'gradientBrand' | 'gradientGrey' | 'deepBlue' | 'skyBlue' | 'disabledGrey' | 'alertRed';
}

const getButtonSize = (size: ButtonProps['$size']) => {
  switch (size) {
    case 'large':
      return { minWidth: '120px', height: '56px', padding: '16px 23px', fontSize: '20px' };
    case 'mid':
      return { minWidth: '100px', height: '48px', padding: '14px 20px', fontSize: '18px' };
    case 'small':
      return { minWidth: '90px', height: '40px', padding: '12px 18px', fontSize: '16px' };
    case 'xsmall':
      return { minWidth: '80px', height: '36px', padding: '10px 16px', fontSize: '14px' };
    case 'xxsmall':
      return { minWidth: '70px', height: '32px', padding: '8px 14px', fontSize: '12px' };
    default:
      return { minWidth: '120px', height: '56px', padding: '16px 23px', fontSize: '20px' };
  }
};

const getButtonColor = (variant: ButtonProps['$variant']) => {
  switch (variant) {
    case 'gradientBrand':
      return { background: colorSystem.gradients.brand.replace('0deg', '270deg') };
    case 'gradientGrey':
      return { background: colorSystem.gradients.grey.replace('0deg', '270deg') };
    case 'deepBlue':
      return { background: colorSystem.brand.deepBlue };
    case 'skyBlue':
      return { background: colorSystem.brand.skyBlue };
    case 'disabledGrey':
      return { background: colorSystem.neutral.disabledGrey, cursor: 'not-allowed' };
    case 'alertRed':
      return { background: colorSystem.system.error.alertRed };
    default:
      return { background: colorSystem.brand.skyBlue };
  }
};

const getOutlineButtonStyle = (variant?: ButtonProps['$variant']) => {
  switch (variant) {
    case 'deepBlue':
      return { borderColor: colorSystem.brand.deepBlue, color: colorSystem.brand.deepBlue };
    case 'skyBlue':
      return { borderColor: colorSystem.brand.skyBlue, color: colorSystem.brand.skyBlue };
    case 'alertRed':
      return { borderColor: colorSystem.system.error.alertRed, color: colorSystem.system.error.alertRed };
    case 'disabledGrey':
      return { borderColor: colorSystem.neutral.disabledGrey, color: colorSystem.neutral.disabledGrey, cursor: 'not-allowed' };
    default:
      return { borderColor: colorSystem.neutral.borderGrey, color: colorSystem.neutral.black };
  }
};

const FilledButton = styled.button<ButtonProps>`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  /* Size & Position */
  ${props => getButtonSize(props.$size)}
  position: relative;

  /* Style */
  ${props => getButtonColor(props.$variant)}
  border: none;
  border-radius: 7px;
  cursor: pointer;

  /* Text Style */
  color: ${colorSystem.background.white};
  font-weight: 600;
  line-height: 1.2;

  /* Transition */
  transition: filter 0.2s ease;

  /* Hover Effect */
  &:hover {
    ${props => 
      props.$variant === 'disabledGrey' || props.$variant === 'gradientGrey' 
        ? '' 
        : `filter: brightness(0.9);`
    }
  }
`

const OutlineButton = styled.button<ButtonProps>`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;

  /* Size & Position */
  ${props => getButtonSize(props.$size)}
  position: relative;

  /* Style */
  background: ${colorSystem.background.white};
  border: 1px solid;
  border-radius: 7px;
  ${props => getOutlineButtonStyle(props.$variant)}
  cursor: ${props => props.$variant === 'disabledGrey' ? 'not-allowed' : 'pointer'};

  /* Text Style */
  font-weight: 500;
  line-height: 1.2;

  /* Transition */
  transition: all 0.2s ease;

  /* Hover Effect */
  &:hover {
    ${props => {
      if (props.$variant === 'disabledGrey') return '';
      if (props.$variant === undefined) {
        return `
          border-color: ${colorSystem.neutral.textGrey};
          color: ${colorSystem.neutral.textGrey};
        `;
      }
      return `
        filter: brightness(0.9);
      `;
    }}
  }
`

export default function ButtonsContent() {
  const sizes: ButtonProps['$size'][] = ['large', 'mid', 'small', 'xsmall', 'xxsmall'];
  const variants: NonNullable<ButtonProps['$variant']>[] = ['gradientBrand', 'gradientGrey', 'deepBlue', 'skyBlue', 'disabledGrey', 'alertRed'];
  const variantLabels: Record<NonNullable<ButtonProps['$variant']>, string> = {
    gradientBrand: 'special',
    gradientGrey: 'special_disabled',
    deepBlue: 'primary',
    skyBlue: 'subprimary',
    disabledGrey: 'disabled',
    alertRed: 'alert'
  };

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
            {variants.map(variant => (
              <ButtonRow key={variant}>
                <VariantLabel>{variantLabels[variant]}</VariantLabel>
                {sizes.map(size => (
                  <FilledButton 
                    key={`${variant}-${size}`}
                    $size={size}
                    $variant={variant}
                  >
                    확인
                  </FilledButton>
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
            <ButtonRow>
              <VariantLabel>default</VariantLabel>
              {sizes.map(size => (
                <OutlineButton 
                  key={size}
                  $size={size}
                >
                  확인
                </OutlineButton>
              ))}
            </ButtonRow>
            <ButtonRow>
              <VariantLabel>primary</VariantLabel>
              {sizes.map(size => (
                <OutlineButton 
                  key={size}
                  $size={size}
                  $variant="deepBlue"
                >
                  확인
                </OutlineButton>
              ))}
            </ButtonRow>
            <ButtonRow>
              <VariantLabel>subprimary</VariantLabel>
              {sizes.map(size => (
                <OutlineButton 
                  key={size}
                  $size={size}
                  $variant="skyBlue"
                >
                  확인
                </OutlineButton>
              ))}
            </ButtonRow>
            <ButtonRow>
              <VariantLabel>alert</VariantLabel>
              {sizes.map(size => (
                <OutlineButton 
                  key={size}
                  $size={size}
                  $variant="alertRed"
                >
                  확인
                </OutlineButton>
              ))}
            </ButtonRow>
            <ButtonRow>
              <VariantLabel>disabled</VariantLabel>
              {sizes.map(size => (
                <OutlineButton 
                  key={size}
                  $size={size}
                  $variant="disabledGrey"
                >
                  확인
                </OutlineButton>
              ))}
            </ButtonRow>
          </SectionContent>
        </SectionInner>
      </Section>
    </Container>
  )
} 