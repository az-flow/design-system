'use client'

import styled from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'
import { Section, SectionInner, SectionTitle, Grid } from '@/components/ui/Section'
import { FormField } from '@/components/ui/Fields'
import { MdHelpOutline } from 'react-icons/md'

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const Title = styled.h2`
  margin-bottom: 48px;
`

const FieldContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(1, 1fr);

  > *:last-child:nth-child(4n - 3),
  > *:last-child:nth-child(4n - 2),
  > *:last-child:nth-child(4n - 1) {
    grid-column: 1 / -1;
  }

  @media (min-width: 890px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const SpanFieldContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface FieldProps {
  label: string;
  value: React.ReactNode;
  tooltip?: string;
}

// 세로형 필드
const VerticalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const Label = styled.div.attrs({ className: 'body3' })`
  color: ${colorSystem.neutral.textGrey};
`

const Value = styled.div.attrs({ className: 'body1' })`
  color: ${colorSystem.neutral.darkText};
`

const TooltipContent = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  padding: 8px 12px;
  background: ${`${colorSystem.brand.deepBlue}D9`};
  color: white;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${`${colorSystem.brand.deepBlue}D9`};
  }
`

const TooltipContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &:hover ${TooltipContent} {
    opacity: 1;
    visibility: visible;
  }
`

const TooltipIcon = styled(MdHelpOutline)`
  width: 16px;
  height: 16px;
  color: ${colorSystem.neutral.iconGrey};
  cursor: help;
`

// 가로형 필드
const HorizontalField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const VerticalFormField = ({ label, value, tooltip }: FieldProps) => (
  <VerticalField>
    <LabelContainer>
      <Label>{label}</Label>
      {tooltip && (
        <TooltipContainer>
          <TooltipIcon />
          <TooltipContent>{tooltip}</TooltipContent>
        </TooltipContainer>
      )}
    </LabelContainer>
    <Value>{value}</Value>
  </VerticalField>
)

const HorizontalFormField = ({ label, value, tooltip }: FieldProps) => (
  <HorizontalField>
    <LabelContainer>
      <Label>{label}</Label>
      {tooltip && (
        <TooltipContainer>
          <TooltipIcon />
          <TooltipContent>{tooltip}</TooltipContent>
        </TooltipContainer>
      )}
    </LabelContainer>
    <Value>{value}</Value>
  </HorizontalField>
)

export default function FieldsPage() {
  return (
    <Container>
      <Title>필드</Title>

      <Grid columns={2}>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">FormField View - P type</SectionTitle>
            </div>
            <FieldContainer>
              <Grid columns={4}>
                <FormField 
                  label="라벨" 
                  value="표시값"
                  orientation="vertical"
                />
                <FormField 
                  label="텍스트" 
                  value="안녕하세요반가워요"
                  orientation="vertical"
                />
                <FormField 
                  label="숫자" 
                  value="3,484,000"
                  orientation="vertical"
                />
                <FormField 
                  label="날짜" 
                  value="2024.01.13"
                  orientation="vertical"
                />
                <FormField 
                  label="툴팁" 
                  value="물음표에 hover하세요."
                  tooltip="물음표에 hover하면 툴팁이 표기됩니다."
                  orientation="vertical"
                />
                <FormField 
                  label="날짜" 
                  value="2024.01.13"
                  orientation="vertical"
                />
              </Grid>
            </FieldContainer>
          </SectionInner>
        </Section>

        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">FormField View - Span type</SectionTitle>
            </div>
            <SpanFieldContainer>
              <FormField 
                label="라벨" 
                value="표시값"
                orientation="horizontal"
              />
              <FormField 
                label="텍스트" 
                value="안녕하세요반가워요"
                orientation="horizontal"
              />
              <FormField 
                label="숫자" 
                value="3,484,000"
                orientation="horizontal"
              />
              <FormField 
                label="날짜" 
                value="2024.01.13"
                orientation="horizontal"
              />
              <FormField 
                label="툴팁" 
                value="물음표에 hover하세요."
                tooltip="물음표에 hover하면 툴팁이 표기됩니다."
                orientation="horizontal"
              />
            </SpanFieldContainer>
          </SectionInner>
        </Section>
      </Grid>
    </Container>
  )
} 