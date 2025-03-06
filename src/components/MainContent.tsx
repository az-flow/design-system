'use client'

import styled from 'styled-components'
import { useState, useEffect } from 'react'

const MainContent = styled.main`
  margin-left: 240px;
  padding: 2rem;
  min-height: 100vh;
  background-color: #f5f5f5;
`

export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <MainContent>{children}</MainContent>
} 