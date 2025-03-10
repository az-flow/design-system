'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { colors } from '@/styles/colors'
import { MdHome } from 'react-icons/md'
import { useState, useEffect } from 'react'

const Nav = styled.nav`
  width: 240px;
  height: 100vh;
  background: ${colors.background.white};
  border-right: 1px solid ${colors.neutral.borderGrey};
  padding: 2rem 0;
  position: fixed;
  left: 0;
  top: 0;
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 200px;
  margin: 20px 19px 0;
`

const StyledNavItem = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'isactive'
})<{ isactive: string }>`
  position: relative;
  width: 100%;
  height: 44px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: ${props => props.isactive === 'true' ? colors.neutral.surfaceGrey1 : colors.background.white};
  border-radius: 7px;
  cursor: pointer;
  color: ${props => props.isactive === 'true' ? colors.neutral.darkText : colors.neutral.textGrey};
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background: ${colors.neutral.surfaceGrey1};
    color: ${colors.neutral.darkText};
  }
`

const NavIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`

const NavLabel = styled.div.attrs({ className: 'subtitle1' })`
  color: inherit;
  font-weight: 500;
  letter-spacing: -0.02em;
`

const navItems = [
  { name: 'Home', path: '/', icon: MdHome },
  { name: 'Typography', path: '/typography' },
  { name: 'Colors', path: '/colors' },
  { name: 'Buttons', path: '/buttons' },
  { name: 'Section & Cards', path: '/sections' },
  { name: 'Header & Navigation', path: '/navigation' },
  { name: 'Tables & Lists', path: '/tables' },
  { name: 'Fields & Items', path: '/fields' },
  { name: 'Modals', path: '/modals' },
  { name: 'History', path: '/history' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Nav>
      <NavList>
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <StyledNavItem 
              key={item.path} 
              href={item.path}
              isactive={(pathname === item.path).toString()}
            >
              {Icon && (
                <NavIcon>
                  <Icon size={24} />
                </NavIcon>
              )}
              <NavLabel>{item.name}</NavLabel>
            </StyledNavItem>
          )
        })}
      </NavList>
    </Nav>
  )
} 