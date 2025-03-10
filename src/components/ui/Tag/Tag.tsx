'use client'

import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors } from '@/styles/colors'
import { typography, fontWeightValues } from '@/styles/typography'

export type TagType = 'normal' | 'file'
export type TagColor = 'success' | 'info' | 'warning' | 'error'
export type FileStatus = 'uploading' | 'failed' | 'success'

interface TagProps {
  type?: TagType
  color?: TagColor
  deletable?: boolean
  onDelete?: () => void
  onRetry?: () => void
  children?: React.ReactNode
  fileName?: string
  fileSize?: string
  fileStatus?: FileStatus
}

const Container = styled.div<{ $color: TagColor; $type: TagType; $fileStatus?: FileStatus }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  height: 30px;
  width: ${props => props.$type === 'file' ? '285px' : 'auto'};
  gap: ${props => props.$type === 'file' ? '25px' : '19px'};
  justify-content: ${props => props.$type === 'file' ? 'space-between' : 'flex-start'};
  
  background: ${props => {
    if (props.$type === 'file') {
      switch (props.$fileStatus) {
        case 'uploading':
          return colors.background.grey
        case 'failed':
          return colors.system.error.errorBg
        case 'success':
          return colors.brand.hoverBlue
        default:
          return colors.background.grey
      }
    }
    switch (props.$color) {
      case 'success':
        return colors.system.success.successBg
      case 'info':
        return colors.system.info.infoBg
      case 'warning':
        return colors.system.warning.warningBg
      case 'error':
        return colors.system.error.errorBg
      default:
        return colors.system.success.successBg
    }
  }};
  border: ${props => props.$type === 'file' ? 'none' : `1px solid ${
    props.$color === 'success' ? colors.system.success.successGreen :
    props.$color === 'info' ? colors.system.info.infoMint :
    props.$color === 'warning' ? colors.system.warning.warningYellow :
    props.$color === 'error' ? colors.system.error.alertRed :
    colors.system.success.successGreen
  }`};
  border-radius: ${props => props.$type === 'file' ? '6px' : '7px'};
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const UploadingIcon = styled.svg`
  animation: ${rotate} 1s linear infinite;
`

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`

const FileInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
  min-width: 0;
`

const FileName = styled.span`
  font-size: ${typography.body4.size};
  font-weight: ${fontWeightValues[typography.body4.weight]};
  line-height: ${typography.body4.lineHeight};
  color: ${colors.neutral.darkText};
`

const FileSize = styled.span`
  font-size: ${typography.body4.size};
  font-weight: ${fontWeightValues[typography.body4.weight]};
  line-height: ${typography.body4.lineHeight};
  color: ${colors.neutral.textGrey};
`

const FileStatus = styled.span<{ $status: FileStatus }>`
  font-size: ${typography.body4.size};
  font-weight: ${fontWeightValues[typography.body4.weight]};
  line-height: ${typography.body4.lineHeight};
  color: ${props => props.$status === 'failed' ? colors.system.error.alertRed : colors.neutral.textGrey};
  margin-left: 10px;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`

const Text = styled.span`
  font-size: ${typography.body4.size};
  font-weight: ${fontWeightValues[typography.body4.weight]};
  line-height: ${typography.body4.lineHeight};
  color: ${colors.neutral.darkText};
`

const DeleteButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7.5px;
    height: 0;
    border-top: 2px solid ${colors.neutral.textGrey};
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`

export const Tag: React.FC<TagProps> = ({
  type = 'normal',
  color = 'success',
  deletable = false,
  onDelete,
  onRetry,
  children,
  fileName,
  fileSize,
  fileStatus
}) => {
  const UploadingIconComponent = () => (
    <UploadingIcon width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="11.5" r="9" stroke={colors.neutral.borderGrey} strokeWidth="5"/>
      <path d="M21 11.5C21 16.4706 16.9706 20.5 12 20.5C7.02944 20.5 3 16.4706 3 11.5C3 6.52944 7.02944 2.5 12 2.5C14.1976 2.5 16.2113 3.28768 17.7741 4.59611" 
        stroke={colors.brand.skyBlue} strokeWidth="5"/>
    </UploadingIcon>
  )

  const FailedIconComponent = () => (
    <IconButton onClick={onRetry}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill={colors.system.error.alertRed}/>
        <path fillRule="evenodd" clipRule="evenodd" 
          d="M14.2453 5.83771L12.8323 2.69152L11.464 3.30605L12.0042 4.50903C11.2852 4.20987 10.4963 4.04458 9.66928 4.04458C6.30954 4.04458 3.58594 6.76818 3.58594 10.1279C3.58594 13.4876 6.30954 16.2113 9.66928 16.2113C13.029 16.2113 15.7526 13.4876 15.7526 10.1279H14.2526C14.2526 12.6592 12.2006 14.7113 9.66928 14.7113C7.13797 14.7113 5.08594 12.6592 5.08594 10.1279C5.08594 7.59661 7.13797 5.54458 9.66928 5.54458C10.4573 5.54458 11.1984 5.74305 11.8458 6.09316L10.1077 6.87378L10.7222 8.24212L13.8684 6.82915L14.5526 6.52188L14.2453 5.83771Z" 
          fill={colors.background.white}/>
      </svg>
    </IconButton>
  )

  return (
    <Container $color={color} $type={type} $fileStatus={fileStatus}>
      {type === 'file' ? (
        <>
          <FileInfo>
            <FileName>{fileName}</FileName>
            <FileSize>{fileSize}</FileSize>
            {fileStatus === 'failed' && <FileStatus $status="failed">failed</FileStatus>}
          </FileInfo>
          <IconsContainer>
            {fileStatus !== 'success' && (
              fileStatus === 'uploading' ? <UploadingIconComponent /> : <FailedIconComponent />
            )}
            {deletable && <DeleteButton onClick={onDelete} />}
          </IconsContainer>
        </>
      ) : (
        <>
          <Text>{children}</Text>
          {deletable && <DeleteButton onClick={onDelete} />}
        </>
      )}
    </Container>
  )
}

export default Tag 