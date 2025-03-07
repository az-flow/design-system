'use client'

import React from 'react'
import styled from 'styled-components'
import { MdHelpOutline } from 'react-icons/md'
import { colorSystem } from '@/components/GlobalStyle'

export interface FormFieldProps {
  label: string
  value: React.ReactNode
  tooltip?: string
  orientation?: 'vertical' | 'horizontal'
  type?: 'view' | 'edit'
  placeholder?: string
  onChange?: (value: string) => void
}

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const Label = styled.div<{ $type?: 'view' | 'edit' }>`
  font-size: ${props => props.$type === 'edit' ? '14px' : '14px'};
  font-weight: ${props => props.$type === 'edit' ? '500' : '400'};
  line-height: ${props => props.$type === 'edit' ? '20px' : '20px'};
  color: ${props => props.$type === 'edit' ? colorSystem.neutral.darkText : colorSystem.neutral.textGrey};
  flex-shrink: 0;
`

const Value = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colorSystem.neutral.darkText};
  flex: 1;
`

const EditInput = styled.input`
  position: relative;
  width: 100%;
  height: 43px;
  padding: 12px 16px;
  border: 1px solid ${colorSystem.neutral.borderGrey};
  border-radius: 7px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${colorSystem.neutral.textGrey};
  background: ${colorSystem.background.white};
  flex: 1;

  &::placeholder {
    color: ${colorSystem.neutral.textGrey};
  }

  &:focus {
    outline: none;
    border-color: ${colorSystem.brand.skyBlue};
  }
`

const TooltipContent = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  padding: 8px 12px;
  background: ${`${colorSystem.brand.deepBlue}D9`};
  color: white;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
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
    border-top-color: ${`${colorSystem.brand.deepBlue}D9`};
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
  color: ${colorSystem.neutral.iconGrey};
  cursor: help;
`

const VerticalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
`

const HorizontalField = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;
`

export const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  value, 
  tooltip, 
  orientation = 'vertical',
  type = 'view',
  placeholder = '자유롭게 입력해 주세요',
  onChange
}) => {
  const Container = orientation === 'vertical' ? VerticalField : HorizontalField;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <Container>
      <LabelContainer>
        <Label $type={type}>{label}</Label>
        {tooltip && (
          <TooltipContainer>
            <TooltipIcon />
            <TooltipContent>{tooltip}</TooltipContent>
          </TooltipContainer>
        )}
      </LabelContainer>
      {type === 'view' ? (
        <Value>{value}</Value>
      ) : (
        <EditInput
          type="text"
          placeholder={placeholder}
          defaultValue={value as string}
          onChange={handleChange}
        />
      )}
    </Container>
  );
};

export default FormField; 