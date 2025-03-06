'use client'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`

const Section = styled.section`
  margin-bottom: 3rem;
`

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #333;
  }
`

export default function Home() {
  return (
    <Container>
      <Title>디자인 시스템</Title>
      <Description>
        React와 styled-components를 기반으로 한 디자인 시스템 프로젝트입니다.
        일관된 디자인 언어를 제공하여 사용자 경험을 향상시키고 개발 효율성을 높입니다.
      </Description>

      <Section>
        <SectionTitle>컴포넌트</SectionTitle>
        <List>
          <ListItem>Typography - 타이포그래피 스타일 가이드</ListItem>
          <ListItem>Colors - 색상 시스템</ListItem>
          <ListItem>Buttons - 버튼 컴포넌트</ListItem>
          <ListItem>Section & Cards - 섹션과 카드 컴포넌트</ListItem>
          <ListItem>Header & Navigation - 헤더와 네비게이션</ListItem>
          <ListItem>Tables - 테이블 컴포넌트</ListItem>
          <ListItem>Fields & Items - 입력 필드와 아이템</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>시작하기</SectionTitle>
        <Description>
          왼쪽 네비게이션에서 원하는 컴포넌트를 선택하여 자세한 내용을 확인할 수 있습니다.
          각 컴포넌트는 사용 예시와 함께 제공됩니다.
        </Description>
      </Section>
    </Container>
  )
}
