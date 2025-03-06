'use client'

import styled from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'
import { Section, SectionInner, SectionTitle, Grid } from '@/app/sections/page'

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const Title = styled.h2`
  margin-bottom: 48px;
`

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

      <Grid columns={2}>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">중립 컬러 (Neutral)</SectionTitle>
            </div>
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
          </SectionInner>
        </Section>

        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">브랜드 컬러 (Brand)</SectionTitle>
            </div>
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
          </SectionInner>
        </Section>

        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">시스템 컬러 (System)</SectionTitle>
            </div>
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
          </SectionInner>
        </Section>

        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">그라데이션 (Gradients)</SectionTitle>
            </div>
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
          </SectionInner>
        </Section>

        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">배경 컬러 (Background)</SectionTitle>
            </div>
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
          </SectionInner>
        </Section>
      </Grid>
    </Container>
  )
} 