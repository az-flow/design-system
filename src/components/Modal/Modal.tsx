'use client'

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/colors'
import { typography, fontWeightValues } from '@/styles/typography'
import { MdClose } from 'react-icons/md'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  width?: string
}

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`

const ModalContainer = styled.div<{ $width?: string }>`
  background-color: ${colors.background.white};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: ${props => props.$width || '500px'};
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  transform: translateY(0);
  transition: transform 0.3s ease;
  ${ModalOverlay}:not([data-open="true"]) & {
    transform: translateY(-20px);
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  // border-bottom: 1px solid ${colors.neutral.borderGrey};
`

const ModalTitle = styled.h6`
  ${typography.h6};
  color: ${colors.neutral.darkText};
  margin: 0;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.neutral.iconGrey};
  
  &:hover {
    color: ${colors.neutral.darkText};
  }
`

const ModalContent = styled.div`
  padding: 24px;
  overflow-y: auto;
`

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  width
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <ModalOverlay $isOpen={isOpen} data-open={isOpen}>
      <ModalContainer ref={modalRef} $width={width}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>
            <MdClose size={24} />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal 