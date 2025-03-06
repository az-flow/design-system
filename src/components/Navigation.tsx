'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = styled.nav`
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #e5e5e5;
  padding: 2rem 0;
  position: fixed;
  left: 0;
  top: 0;
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavItem = styled.li<{ isActive: boolean }>`
  padding: 0.75rem 1.5rem;
  margin: 0.25rem 0;
  background-color: ${props => props.isActive ? '#f0f0f0' : 'transparent'};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${props => props.isActive ? '#000000' : '#666666'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${props => props.isActive ? '600' : '400'};
  display: block;
`

const navItems = [
  { name: 'Typography', path: '/typography' },
  { name: 'Colors', path: '/colors' },
  { name: 'Buttons', path: '/buttons' },
  { name: 'Section & Cards', path: '/sections' },
  { name: 'Header & Navigation', path: '/navigation' },
  { name: 'Tables', path: '/tables' },
  { name: 'Fields & Items', path: '/fields' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <Nav>
      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.path} isActive={pathname === item.path}>
            <NavLink href={item.path} isActive={pathname === item.path}>
              {item.name}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  )
} 