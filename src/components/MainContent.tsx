'use client'

import styled from 'styled-components'

const MainContent = styled.main`
  margin-left: 250px;
  padding: 2rem;
  min-height: 100vh;
  background-color: #f5f5f5;
`

export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
  return <MainContent>{children}</MainContent>
} 