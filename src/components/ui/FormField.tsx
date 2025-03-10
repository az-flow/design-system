'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { MdHelpOutline, MdKeyboardArrowDown } from 'react-icons/md'
import { colorSystem } from '@/components/GlobalStyle'

export interface FormFieldProps {
  label: string
  value: React.ReactNode
  tooltip?: string
  orientation?: 'vertical' | 'horizontal'
  type?: 'view' | 'edit' | 'dropdown'
  placeholder?: string
  onChange?: (value: string) => void
  options?: Array<{ label: string; value: string }>
}

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const Label = styled.div<{ $type?: 'view' | 'edit' | 'dropdown' }>`
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

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
`

const DropdownButton = styled.button<{ $value?: string | null }>`
  width: 100%;
  height: 43px;
  padding: 12px 16px;
  border: 1px solid ${colorSystem.neutral.borderGrey};
  border-radius: 7px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.$value ? colorSystem.neutral.darkText : colorSystem.neutral.textGrey};
  text-align: left;

  &:focus {
    outline: none;
    border-color: ${colorSystem.brand.skyBlue};
  }
`

const DropdownIcon = styled(MdKeyboardArrowDown)<{ $isOpen: boolean }>`
  width: 20px;
  height: 20px;
  color: ${colorSystem.neutral.iconGrey};
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s ease;
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: white;
  border: 1px solid ${colorSystem.neutral.borderGrey};
  border-radius: 7px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`

const DropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${colorSystem.neutral.darkText};

  &:hover {
    background: ${colorSystem.background.grey};
  }
`

export const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  value, 
  tooltip, 
  orientation = 'vertical',
  type = 'view',
  placeholder = '자유롭게 입력해 주세요',
  onChange,
  options = []
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const Container = orientation === 'vertical' ? VerticalField : HorizontalField;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleDropdownSelect = (selectedValue: string) => {
    onChange?.(selectedValue);
    setIsOpen(false);
  };

  const getSelectedOptionLabel = () => {
    if (!value) return placeholder;
    const selectedOption = options.find(option => option.value === value);
    return selectedOption ? selectedOption.label : value;
  };

  const renderField = () => {
    switch (type) {
      case 'edit':
        return (
          <EditInput
            type="text"
            placeholder={placeholder}
            defaultValue={value as string}
            onChange={handleChange}
          />
        );
      case 'dropdown':
        return (
          <DropdownContainer>
            <DropdownButton onClick={() => setIsOpen(!isOpen)} $value={value as string | null}>
              <span>{getSelectedOptionLabel()}</span>
              <DropdownIcon $isOpen={isOpen} />
            </DropdownButton>
            {isOpen && (
              <DropdownMenu>
                {options.map((option) => (
                  <DropdownItem
                    key={option.value}
                    onClick={() => handleDropdownSelect(option.value)}
                  >
                    {option.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </DropdownContainer>
        );
      default:
        return <Value>{value}</Value>;
    }
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
      {renderField()}
    </Container>
  );
};

export default FormField; 