'use client'

import React from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/colors'
import { AiFillFilePdf, AiFillFileImage, AiFillFileText, AiFillFile } from 'react-icons/ai'
import { Typography } from '@/components/ui/Typography'

interface FileCardProps {
  fileName: string
  date: string
  size: string
  imageUrl?: string
  onClick?: () => void
}

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  width: 100%;
  max-width: 377.5px;
  height: 70px;
  background: ${colors.neutral.surfaceGrey1};
  border: 1px solid ${colors.neutral.borderGrey};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.background.grey};
  }
`

const FileIconWrapper = styled.div`
  width: 38px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.neutral.textGrey};
  flex-shrink: 0;
`

const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  gap: 5px;
  flex: 1;
  min-width: 0;
  height: 36px;
`

const FileName = styled.div`
  width: 100%;
  height: 19px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.neutral.black};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const FileDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 5px;
  height: 14px;
  color: ${colors.neutral.textGrey};
`

const Dot = styled.div`
  width: 3px;
  height: 3px;
  background: currentColor;
  border-radius: 50%;
`

const ChevronIcon = styled.svg`
  width: 24px;
  height: 24px;
  transform: rotate(-90deg);
  margin-left: auto;
  flex-shrink: 0;
`

const getFileIcon = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase()
  
  switch (extension) {
    case 'pdf':
      return <AiFillFilePdf size={32} />
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
      return <AiFillFileImage size={32} />
    case 'doc':
    case 'docx':
    case 'txt':
    case 'xlsx':
    case 'xls':
      return <AiFillFileText size={32} />
    default:
      return <AiFillFile size={32} />
  }
}

export const FileCard: React.FC<FileCardProps> = ({
  fileName,
  date,
  size,
  onClick
}) => {
  return (
    <Container onClick={onClick}>
      <FileIconWrapper>
        {getFileIcon(fileName)}
      </FileIconWrapper>
      <FileInfo>
        <FileName>{fileName}</FileName>
        <FileDetails>
          <Typography variant="caption3">{date}</Typography>
          <Dot />
          <Typography variant="caption3">{size}</Typography>
        </FileDetails>
      </FileInfo>
      <ChevronIcon 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={colors.neutral.black}
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6"/>
      </ChevronIcon>
    </Container>
  )
}

export default FileCard 