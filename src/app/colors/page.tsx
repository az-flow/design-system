'use client'

import styled from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'

const Container = styled.div`
  padding: 40px;
`

const Title = styled.h2`
  margin-bottom: 48px;
`

const Section = styled.section`
  margin-bottom: 48px;
`

const SectionTitle = styled.h4`
  margin-bottom: 24px;
`

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
`

const ColorBox = styled.div<{ color: string }>`
  width: 59px;
  height: 59px;
  background: ${props => props.color};
  border-radius: 4px;
  margin-bottom: 8px;
`

const ColorNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const ColorName = styled.div.attrs({ className: 'body2' })`
`

const ColorHex = styled.div.attrs({ className: 'body1' })`
`

const ColorItem = styled.div`
  display: flex;
  flex-direction: column;
`

const GradientBox = styled.div<{ gradient: string }>`
  width: 59px;
  height: 59px;
  background: ${props => props.gradient};
  border-radius: 4px;
  margin-bottom: 8px;
`

export default function ColorsPage() {
  return (
    <Container>
      <Title>컬러 시스템</Title>

      <Section>
        <SectionTitle>중립 컬러 (Neutral)</SectionTitle>
        <ColorGrid>
          {Object.entries(colorSystem.neutral).map(([key, value]) => (
            <ColorItem key={key}>
              <ColorBox color={value} />
              <ColorNameWrapper>
                <ColorName>{key}</ColorName>
                <ColorHex>{value}</ColorHex>
              </ColorNameWrapper>
            </ColorItem>
          ))}
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>브랜드 컬러 (Brand)</SectionTitle>
        <ColorGrid>
          {Object.entries(colorSystem.brand).map(([key, value]) => (
            <ColorItem key={key}>
              <ColorBox color={value} />
              <ColorNameWrapper>
                <ColorName>{key}</ColorName>
                <ColorHex>{value}</ColorHex>
              </ColorNameWrapper>
            </ColorItem>
          ))}
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>시스템 컬러 (System)</SectionTitle>
        <ColorGrid>
          {Object.entries(colorSystem.system).map(([category, colorSet]) => 
            Object.entries(colorSet).map(([key, value]) => (
              <ColorItem key={`${category}-${key}`}>
                <ColorBox color={value} />
                <ColorNameWrapper>
                  <ColorName>{key}</ColorName>
                  <ColorHex>{value}</ColorHex>
                </ColorNameWrapper>
              </ColorItem>
            ))
          )}
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>그라데이션 (Gradients)</SectionTitle>
        <ColorGrid>
          {Object.entries(colorSystem.gradients).map(([key, value]) => (
            <ColorItem key={key}>
              <GradientBox gradient={value} />
              <ColorNameWrapper>
                <ColorName>{key}</ColorName>
                <ColorHex>{value}</ColorHex>
              </ColorNameWrapper>
            </ColorItem>
          ))}
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>배경 컬러 (Background)</SectionTitle>
        <ColorGrid>
          {Object.entries(colorSystem.background).map(([key, value]) => (
            <ColorItem key={key}>
              <ColorBox color={value} />
              <ColorNameWrapper>
                <ColorName>{key}</ColorName>
                <ColorHex>{value}</ColorHex>
              </ColorNameWrapper>
            </ColorItem>
          ))}
        </ColorGrid>
      </Section>
    </Container>
  )
} 