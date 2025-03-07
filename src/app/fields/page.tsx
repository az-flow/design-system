'use client'

import styled from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'
import { Section, SectionInner, SectionTitle, Grid } from '@/components/ui/Section'
import { FormField } from '@/components/ui/FormField'
import { Callout } from '@/components/ui/Callout/Callout'

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

export default function FieldsPage() {
  return (
    <Container>
      <Title>필드</Title>
      <Callout variant="info">
        콜아웃 컴포넌트를 사용할 수 있습니다.
      </Callout>
      <Callout variant="success">
        성공적으로 저장되었습니다.
      </Callout>
      <Callout variant="error">
        오류가 발생했습니다. 다시 시도해주세요.
      </Callout>

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
              <SectionTitle className="h6">FormField Edit - P type</SectionTitle>
            </div>
            <FieldContainer>
              <Grid columns={4}>
                <FormField 
                  label="라벨" 
                  value=""
                  orientation="vertical"
                  type="edit"
                  placeholder="입력해주세요"
                  onChange={(value) => console.log('value changed:', value)}
                />
                <FormField 
                  label="텍스트" 
                  value="안녕하세요반가워요"
                  orientation="vertical"
                  type="edit"
                  onChange={(value) => console.log('value changed:', value)}
                />
                <FormField 
                  label="숫자" 
                  value="3,484,000"
                  orientation="vertical"
                  type="edit"
                  onChange={(value) => console.log('value changed:', value)}
                />
                <FormField 
                  label="날짜" 
                  value="2024.01.13"
                  orientation="vertical"
                  type="edit"
                  onChange={(value) => console.log('value changed:', value)}
                />
                <FormField 
                  label="툴팁" 
                  value=""
                  tooltip="입력해주세요"
                  orientation="vertical"
                  type="edit"
                  placeholder="입력해주세요"
                  onChange={(value) => console.log('value changed:', value)}
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

        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">FormField Edit - Span type</SectionTitle>
            </div>
            <SpanFieldContainer>
              <FormField 
                label="라벨" 
                value=""
                orientation="horizontal"
                type="edit"
                placeholder="입력해주세요"
                onChange={(value) => console.log('value changed:', value)}
              />
              <FormField 
                label="텍스트" 
                value="안녕하세요반가워요"
                orientation="horizontal"
                type="edit"
                onChange={(value) => console.log('value changed:', value)}
              />
              <FormField 
                label="숫자" 
                value="3,484,000"
                orientation="horizontal"
                type="edit"
                onChange={(value) => console.log('value changed:', value)}
              />
              <FormField 
                label="날짜" 
                value="2024.01.13"
                orientation="horizontal"
                type="edit"
                onChange={(value) => console.log('value changed:', value)}
              />
              <FormField 
                label="툴팁" 
                value=""
                tooltip="입력해주세요"
                orientation="horizontal"
                type="edit"
                placeholder="입력해주세요"
                onChange={(value) => console.log('value changed:', value)}
              />
            </SpanFieldContainer>
          </SectionInner>
        </Section>
      </Grid>
    </Container>
  )
} 