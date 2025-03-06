'use client'

import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/colors'

// Grid component
export interface GridProps {
  columns?: 1 | 2 | 3 | 4
  children: ReactNode
  className?: string
}

export const Grid = styled.div<{ columns?: 1 | 2 | 3 | 4 }>`
  display: grid;
  gap: 28px;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(${props => Math.min(2, props.columns || 1)}, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(${props => Math.min(3, props.columns || 1)}, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(${props => props.columns || 1}, 1fr);
  }
`

// Section components
export interface SectionProps {
  children: ReactNode
  $collapsible?: boolean
  $clickable?: boolean
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export const Section = styled.div<{ $collapsible?: boolean }>`
  width: 100%;
`

export interface SectionInnerProps {
  children: ReactNode
  $collapsible?: boolean
  $isOpen?: boolean
  $clickable?: boolean
  onClick?: () => void
  className?: string
}

export const SectionInner = styled.div<{ $collapsible?: boolean; $isOpen?: boolean; $clickable?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 29px 21px;
  gap: ${props => props.$collapsible ? (props.$isOpen ? '34px' : '0') : '34px'};
  background: ${colors.background.white};
  border: 1px solid ${colors.neutral.borderGrey};
  border-radius: 13px;
  cursor: ${props => (props.$collapsible || props.$clickable) ? 'pointer' : 'default'};
  transition: all 0.2s ease-in-out;

  ${props => props.$clickable && `
    &:hover {
      background: ${colors.background.grey};
    }
  `}
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const SectionTitle = styled.h6`
  color: ${colors.neutral.black};
`

export interface SectionContentProps {
  children: ReactNode
  $isOpen?: boolean
  className?: string
}

export const SectionContent = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: ${props => props.$isOpen === undefined ? 'auto' : props.$isOpen ? 'auto' : '0'};
  overflow: hidden;
  opacity: ${props => props.$isOpen === undefined ? '1' : props.$isOpen ? '1' : '0'};
  transition: ${props => props.$isOpen === undefined ? 'none' : 'all 0.3s ease-in-out'};
`

export interface ChevronIconProps {
  $isOpen?: boolean
  $direction?: 'down' | 'right'
  stroke?: string
  className?: string
}

export const ChevronIcon = styled.svg<{ $isOpen?: boolean; $direction?: 'down' | 'right' }>`
  width: 24px;
  height: 24px;
  transform: ${props => {
    if (props.$direction === 'right') return 'rotate(-90deg)';
    return props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  }};
  transition: transform 0.3s ease-in-out;
`

// CollapsibleSection component
export const CollapsibleSection = ({ children, className, style, onClick }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(true)

  // Separate children into title and content
  let titleElement: ReactNode = null
  let contentElement: ReactNode = null

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      if (child.type === SectionTitle) {
        titleElement = child
      } else if (child.type === SectionContent) {
        contentElement = child
      }
    }
  })

  const handleClick = () => {
    setIsOpen(!isOpen)
    if (onClick) onClick()
  }

  return (
    <Section $collapsible className={className} style={style}>
      <SectionInner $collapsible $isOpen={isOpen} onClick={handleClick}>
        <SectionHeader>
          {titleElement}
          <ChevronIcon 
            $isOpen={isOpen}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={colors.neutral.black}
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6"/>
          </ChevronIcon>
        </SectionHeader>
        {React.isValidElement(contentElement) ? 
          React.cloneElement(contentElement as React.ReactElement<SectionContentProps>, { $isOpen: isOpen }) : 
          contentElement
        }
      </SectionInner>
    </Section>
  )
}