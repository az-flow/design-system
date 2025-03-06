'use client'

import React from 'react'
import styled from 'styled-components'
import { MdHelpOutline } from 'react-icons/md'
import { colors } from '@/styles/colors'

export interface FormFieldProps {
  label: string
  value: React.ReactNode
  tooltip?: string
  orientation?: 'vertical' | 'horizontal'
}

// Shared styled components
const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const Label = styled.div.attrs({ className: 'body3' })`
  color: ${colors.neutral.textGrey};
`

const Value = styled.div.attrs({ className: 'body1' })`
  color: ${colors.neutral.darkText};
`

const TooltipContent = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  padding: 8px 12px;
  background: ${`${colors.brand.deepBlue}D9`};
  color: white;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${`${colors.brand.deepBlue}D9`};
  }
`

const TooltipContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &:hover ${TooltipContent} {
    opacity: 1;
    visibility: visible;
  }
`

const TooltipIcon = styled(MdHelpOutline)`
  width: 16px;
  height: 16px;
  color: ${colors.neutral.iconGrey};
  cursor: help;
`

// Vertical layout
const VerticalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

// Horizontal layout
const HorizontalField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  value, 
  tooltip, 
  orientation = 'vertical' 
}) => {
  const Container = orientation === 'vertical' ? VerticalField : HorizontalField

  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
        {tooltip && (
          <TooltipContainer>
            <TooltipIcon />
            <TooltipContent>{tooltip}</TooltipContent>
          </TooltipContainer>
        )}
      </LabelContainer>
      <Value>{value}</Value>
    </Container>
  )
}

export default FormField