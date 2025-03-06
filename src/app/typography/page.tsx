'use client'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Title = styled.h1`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 3rem;
`

const Section = styled.section`
  margin-bottom: 4rem;
`

const SectionTitle = styled.h2`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  margin-bottom: 2rem;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`

const Th = styled.th`
  text-align: left;
  padding: 1rem 0;
  border-bottom: 1px solid #D1DAE3;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 14px;
  color: #67727A;
`

const Td = styled.td`
  padding: 1.5rem 0;
  border-bottom: 1px solid #F2F3F6;
  font-family: 'Pretendard';
  font-size: 14px;
  color: #1F1F1F;
`

const TypefaceExample = styled.div<{
  size: string;
  weight: string;
  lineheight: string;
}>`
  font-family: 'Pretendard';
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight === 'Semi Bold' ? '600' : props.weight === 'Medium' ? '500' : '400'};
  line-height: ${props => props.lineheight}px;
  margin-bottom: 0.5rem;
`

export default function TypographyPage() {
  const textFonts = [
    { name: 'H1. Headline', weight: 'Semi Bold', size: '48', line: '58', spacing: '0' },
    { name: 'H2. Headline', weight: 'Semi Bold', size: '40', line: '48', spacing: '0' },
    { name: 'H3. Headline', weight: 'Semi Bold', size: '32', line: '38', spacing: '0' },
    { name: 'H4. Headline', weight: 'Semi Bold', size: '28', line: '34', spacing: '0' },
    { name: 'H5. Headline', weight: 'Semi Bold', size: '24', line: '28', spacing: '0' },
    { name: 'H6. Headline', weight: 'Semi Bold', size: '20', line: '24', spacing: '0' },
    { name: 'S1. Subtitle', weight: 'Semi Bold', size: '18', line: '28', spacing: '0' },
    { name: 'S2. Subtitle', weight: 'Semi Bold', size: '16', line: '24', spacing: '0' },
    { name: 'B1. Body', weight: 'Regular', size: '16', line: '24', spacing: '0' },
    { name: 'B2. Body', weight: 'Medium', size: '16', line: '24', spacing: '0' },
    { name: 'B3. Body', weight: 'Regular', size: '14', line: '20', spacing: '0' },
    { name: 'B4. Body', weight: 'Medium', size: '14', line: '20', spacing: '0' },
    { name: 'C1. Caption', weight: 'Regular', size: '12', line: '16', spacing: '0' },
    { name: 'C2. Caption', weight: 'Medium', size: '12', line: '16', spacing: '0' },
    { name: 'C3. Caption', weight: 'Medium', size: '10', line: '14', spacing: '0' },
    { name: 'LABEL', weight: 'Medium', size: '12', line: '16', spacing: '0' },
  ]

  const buttonFonts = [
    { name: 'Giant', weight: 'Semi Bold', size: '18', line: '24', spacing: '0' },
    { name: 'Large', weight: 'Semi Bold', size: '16', line: '20', spacing: '0' },
    { name: 'Medium', weight: 'Semi Bold', size: '14', line: '16', spacing: '0' },
    { name: 'Small', weight: 'Semi Bold', size: '12', line: '16', spacing: '0' },
    { name: 'Tiny', weight: 'Semi Bold', size: '10', line: '12', spacing: '0' },
  ]

  return (
    <Container>
      <Title>Typography</Title>
      
      <Section>
        <SectionTitle>Text Font</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Typeface</Th>
              <Th>Weight</Th>
              <Th>Size</Th>
              <Th>Line</Th>
              <Th>Spacing</Th>
            </tr>
          </thead>
          <tbody>
            {textFonts.map((font, index) => (
              <tr key={index}>
                <Td>
                  <TypefaceExample
                    size={font.size}
                    weight={font.weight}
                    lineheight={font.line}
                  >
                    {font.name}
                  </TypefaceExample>
                </Td>
                <Td>{font.weight}</Td>
                <Td>{font.size}</Td>
                <Td>{font.line}</Td>
                <Td>{font.spacing}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      <Section>
        <SectionTitle>Button Font</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Typeface</Th>
              <Th>Weight</Th>
              <Th>Size</Th>
              <Th>Line</Th>
              <Th>Spacing</Th>
            </tr>
          </thead>
          <tbody>
            {buttonFonts.map((font, index) => (
              <tr key={index}>
                <Td>
                  <TypefaceExample
                    size={font.size}
                    weight={font.weight}
                    lineheight={font.line}
                  >
                    {font.name}
                  </TypefaceExample>
                </Td>
                <Td>{font.weight}</Td>
                <Td>{font.size}</Td>
                <Td>{font.line}</Td>
                <Td>{font.spacing}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>
    </Container>
  )
} 