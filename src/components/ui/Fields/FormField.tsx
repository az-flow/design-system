'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { MdHelpOutline, MdKeyboardArrowDown } from 'react-icons/md'
import { colors } from '@/styles/colors'

// 공통 속성
interface BaseFieldProps {
  label: string
  tooltip?: string
  orientation?: 'vertical' | 'horizontal'
}

// 보기 모드 속성
interface ViewFieldProps extends BaseFieldProps {
  type: 'view'
  value: string
}

// 수정 모드 속성
interface EditFieldProps extends BaseFieldProps {
  type: 'edit'
  value: string
  placeholder?: string
  onChange?: (value: string) => void
}

// 드롭다운 모드 속성
interface DropdownFieldProps extends BaseFieldProps {
  type: 'dropdown'
  value: string
  placeholder?: string
  onChange?: (value: string) => void
  options: Array<{ label: string; value: string }>
}

// Union 타입으로 FormFieldProps 정의
export type FormFieldProps = ViewFieldProps | EditFieldProps | DropdownFieldProps

// 타입 가드 함수들
const isViewField = (props: FormFieldProps): props is ViewFieldProps => props.type === 'view';
const isEditField = (props: FormFieldProps): props is EditFieldProps => props.type === 'edit';
const isDropdownField = (props: FormFieldProps): props is DropdownFieldProps => props.type === 'dropdown';

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

const EditInput = styled.input`
  width: 100%;
  height: 43px;
  padding: 12px;
  border: 1px solid ${colors.neutral.borderGrey};
  border-radius: 7px;
  font-family: 'Pretendard';
  font-size: 16px;
  color: ${colors.neutral.darkText};

  &::placeholder {
    color: ${colors.neutral.textGrey};
  }

  &:focus {
    outline: none;
    border-color: ${colors.brand.deepBlue};
  }
`

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`

const DropdownButton = styled.button<{ $value?: string }>`
  width: 100%;
  height: 43px;
  padding: 12px;
  border: 1px solid ${colors.neutral.borderGrey};
  border-radius: 7px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-family: 'Pretendard';
  font-size: 16px;
  color: ${props => props.$value ? colors.neutral.darkText : colors.neutral.textGrey};

  &:focus {
    outline: none;
    border-color: ${colors.brand.deepBlue};
  }
`

const DropdownIcon = styled(MdKeyboardArrowDown)<{ $isOpen: boolean }>`
  width: 20px;
  height: 20px;
  color: ${colors.neutral.iconGrey};
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
  border: 1px solid ${colors.neutral.borderGrey};
  border-radius: 7px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`

const DropdownItem = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  font-family: 'Pretendard';
  font-size: 16px;
  color: ${colors.neutral.darkText};

  &:hover {
    background: ${colors.background.grey};
  }
`

export const FormField: React.FC<FormFieldProps> = (props) => {
  const { label, tooltip, orientation = 'vertical' } = props;
  const [isOpen, setIsOpen] = useState(false);
  const Container = orientation === 'vertical' ? VerticalField : HorizontalField;

  // 드롭다운 선택 핸들러
  const handleDropdownSelect = (selectedValue: string) => {
    if (isDropdownField(props) && props.onChange) {
      props.onChange(selectedValue);
      setIsOpen(false);
    }
  };

  // 선택된 드롭다운 옵션의 라벨 가져오기
  const getSelectedOptionLabel = () => {
    if (isDropdownField(props)) {
      if (!props.value) return props.placeholder;
      const selectedOption = props.options.find(option => option.value === props.value);
      return selectedOption ? selectedOption.label : props.value;
    }
    return '';
  };

  // 필드 렌더링 함수
  const renderField = () => {
    if (isEditField(props)) {
      return (
        <EditInput
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange?.(e.target.value)}
        />
      );
    }
    
    if (isDropdownField(props)) {
      return (
        <DropdownContainer>
          <DropdownButton onClick={() => setIsOpen(!isOpen)} $value={props.value}>
            <span>{getSelectedOptionLabel()}</span>
            <DropdownIcon $isOpen={isOpen} />
          </DropdownButton>
          {isOpen && (
            <DropdownMenu>
              {props.options.map((option) => (
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
    }
    
    // 기본적으로 view 모드를 렌더링
    return <Value>{props.value}</Value>;
  };

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
      {renderField()}
    </Container>
  );
};

export default FormField;