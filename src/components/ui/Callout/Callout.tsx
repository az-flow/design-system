'use client'

import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { colors } from '@/styles/colors'
import { MdInfo, MdCheckCircle, MdError } from 'react-icons/md'

type CalloutVariant = 'info' | 'success' | 'error'

const getVariantIcon = (variant: CalloutVariant) => {
  switch (variant) {
    case 'info':
      return <MdInfo />
    case 'success':
      return <MdCheckCircle />
    case 'error':
      return <MdError />
    default:
      return <MdInfo />
  }
}

const getVariantStyles = (variant: CalloutVariant) => {
  switch (variant) {
    case 'info':
      return css`
        background-color: ${colors.system.info.infoBg};
        border: 1px solid ${colors.system.info.infoMint};
        ${IconWrapper}, ${CalloutText} {
          color: ${colors.brand.deepBlue};
        }
      `
    case 'success':
      return css`
        background-color: ${colors.system.success.successBg};
        border: 1px solid ${colors.system.success.successGreen};
        ${IconWrapper}, ${CalloutText} {
          color: ${colors.neutral.darkText};
        }
      `
    case 'error':
      return css`
        background-color: ${colors.system.error.errorBg};
        border: 1px solid ${colors.system.error.alertRed};
        ${IconWrapper}, ${CalloutText} {
          color: ${colors.system.error.alertRed};
        }
      `
    default:
      return css`
        background-color: ${colors.system.info.infoBg};
        border: 1px solid ${colors.system.info.infoMint};
        ${IconWrapper}, ${CalloutText} {
          color: ${colors.brand.deepBlue};
        }
      `
  }
}

const CalloutContainer = styled.div<{ $variant: CalloutVariant }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 7px;
  width: 100%;
  ${props => getVariantStyles(props.$variant)}
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }
`

const CalloutText = styled.div.attrs({ className: 'body1' })``

interface CalloutProps {
  children: ReactNode
  className?: string
  variant?: CalloutVariant
}

export const Callout = ({ 
  children, 
  className,
  variant = 'info' 
}: CalloutProps) => {
  return (
    <CalloutContainer className={className} $variant={variant}>
      <IconWrapper>{getVariantIcon(variant)}</IconWrapper>
      <CalloutText>{children}</CalloutText>
    </CalloutContainer>
  )
}

export default Callout 