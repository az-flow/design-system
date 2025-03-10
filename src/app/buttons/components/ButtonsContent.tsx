'use client'

import styled from 'styled-components'
import { colors } from '@/styles/colors'
import { Section, SectionInner, SectionTitle, SectionContent } from '@/components/ui/Section'
import { Button, ButtonSize, ButtonColor, ButtonType } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { Tag } from '@/components/ui/Tag'

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
            <SectionTitle className="h6">Tags</SectionTitle>
          </div>
          <SectionContent>
            <ButtonRow>
              <Tag deletable onDelete={() => console.log('delete')}>본계정공동</Tag>
              <Tag>일반태그</Tag>
              <Tag color="info" deletable onDelete={() => console.log('delete')}>정보태그</Tag>
              <Tag color="warning">경고태그</Tag>
              <Tag color="error" deletable onDelete={() => console.log('delete')}>에러태그</Tag>
            </ButtonRow>
            <ButtonRow>
              <Tag 
                type="file"
                fileName="file.jpg"
                fileSize="50mb"
                fileStatus="uploading"
                deletable
                onDelete={() => console.log('delete')}
              />
            </ButtonRow>
            <ButtonRow>
              <Tag 
                type="file"
                fileName="file.jpg"
                fileSize="50mb"
                fileStatus="failed"
                deletable
                onDelete={() => console.log('delete')}
                onRetry={() => console.log('retry upload')}
              />
            </ButtonRow>
            <ButtonRow>
              <Tag 
                type="file"
                fileName="file.jpg"
                fileSize="50mb"
                fileStatus="success"
                deletable
                onDelete={() => console.log('delete')}
              />
            </ButtonRow>
          </SectionContent>
        </SectionInner>
      </Section>
    </Container>
  )
} 