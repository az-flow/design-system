'use client'

import styled from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'
import { Section, SectionInner, SectionTitle, Grid } from '@/components/ui/Section'
import { FormField } from '@/components/ui/FormField'
import { Callout } from '@/components/ui/Callout/Callout'
import { FileCard } from '@/components/ui/FileCard'

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

const FileCardContainer = styled.div`
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

      <h4> 콜아웃 </h4>
      <Callout variant="info">
        콜아웃 컴포넌트를 사용할 수 있습니다.
      </Callout>
      <Callout variant="success">
        성공적으로 저장되었습니다.
      </Callout>
      <Callout variant="error">
        오류가 발생했습니다. 다시 시도해주세요.
      </Callout>
      <div className="divider" style={{ margin: '34px 0' }}/>

      <h4> 폼 필드 </h4>
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

        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">FormField Dropdown</SectionTitle>
            </div>
            <SpanFieldContainer>
              <FormField 
                label="드롭다운" 
                value=""
                orientation="horizontal"
                type="dropdown"
                placeholder="선택해주세요"
                options={[
                  { label: '옵션 1', value: 'option1' },
                  { label: '옵션 2', value: 'option2' },
                  { label: '옵션 3', value: 'option3' },
                ]}
                onChange={(value) => console.log('selected value:', value)}
              />
              <FormField 
                label="드롭다운 + 툴팁" 
                value=""
                tooltip="드롭다운 메뉴에서 선택하세요"
                orientation="horizontal"
                type="dropdown"
                placeholder="선택해주세요"
                options={[
                  { label: '옵션 A', value: 'optionA' },
                  { label: '옵션 B', value: 'optionB' },
                  { label: '옵션 C', value: 'optionC' },
                ]}
                onChange={(value) => console.log('selected value:', value)}
              />
            </SpanFieldContainer>
          </SectionInner>
        </Section>
    </Grid>
    <div className="divider" style={{ margin: '34px 0' }}/>
    
    <h4> 파일 카드 </h4>
    <Grid columns={1}>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">File Card</SectionTitle>
            </div>
            <FileCardContainer>
              <FileCard 
                fileName="스타트업명_IRDeck_ver2.3.pdf"
                date="2025.01.29"
                size="3.27MB"
                onClick={() => console.log('파일 카드 클릭')}
              />
              <FileCard 
                fileName="회사소개서_2024.pdf"
                date="2024.02.15"
                size="2.8MB"
                onClick={() => console.log('파일 카드 클릭')}
              />
            </FileCardContainer>
          </SectionInner>
        </Section>
      </Grid>
    </Container>
  )
} 