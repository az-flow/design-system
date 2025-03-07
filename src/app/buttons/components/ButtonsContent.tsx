'use client'

import styled from 'styled-components'
import { colors } from '@/styles/colors'
import { Section, SectionInner, SectionTitle, SectionContent } from '@/components/ui/Section'
import { Button, ButtonSize, ButtonColor, ButtonType } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'

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
  color: ${colors.neutral.darkText};
  font-weight: 600;
`

const SizeLabel = styled.div`
  font-size: 12px;
  color: ${colors.neutral.darkText};
  text-align: center;
  width: 120px;
`

const SizeLabelRow = styled(ButtonRow)`
  margin-left: 120px;
  margin-bottom: 32px;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(5, 120px);
`

const ButtonsRow = styled(ButtonRow)`
  display: grid;
  grid-template-columns: 120px repeat(5, 120px);
  gap: 12px;
`

// Main Component
export default function ButtonsContent() {
  const sizes: ButtonSize[] = ['large', 'mid', 'small', 'xsmall', 'xxsmall']
  const filledColors: ButtonColor[] = ['special', 'special_disabled', 'primary', 'subprimary', 'disabled', 'alert']
  const outlineColors: ButtonColor[] = ['default', 'primary', 'subprimary', 'disabled', 'alert']

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
            {filledColors.map(color => (
              <ButtonsRow key={color}>
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
              </ButtonsRow>
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
            {outlineColors.map(color => (
              <ButtonsRow key={color}>
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
              </ButtonsRow>
            ))}
          </SectionContent>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <div>
            <SectionTitle className="h6">Typography 컴포넌트 사용 예시</SectionTitle>
          </div>
          <SectionContent>
            <Typography variant="h1">H1 제목</Typography>
            <Typography variant="h2">H2 제목</Typography>
            <Typography variant="body1">Body1 텍스트</Typography>
            <Typography variant="caption1">Caption1 텍스트</Typography>
            <Typography variant="button-medium">Button Medium 텍스트</Typography>
          </SectionContent>
        </SectionInner>
      </Section>
    </Container>
  )
} 