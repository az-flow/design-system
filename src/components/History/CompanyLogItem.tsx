'use client'

import React from 'react'
import styled from 'styled-components'
import Typography from '@/components/ui/Typography/Typography'
import { colors } from '@/styles/colors'
import { typography, fontWeightValues } from '@/styles/typography'
import { FiSend, FiDownload, FiChevronRight } from 'react-icons/fi'
import { MdRateReview, MdAssignmentAdd, MdInfo } from 'react-icons/md'

export interface CompanyLogItemProps {
  profileImage: string
  name: string
  role: 'task' | 'update' | 'review'
  date: string
  content: string
  comment?: string
  type?: 'send' | 'receive'
  onClick?: () => void
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  border-radius: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &:not(:last-child)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 15px;
    width: 2px;
    height: calc(100% + 24px);
    background-color: ${colors.neutral.borderGrey};
    z-index: 0;
  }
`

const TypeIconContainer = styled.div<{ $isSent: boolean }>`
  position: relative;
  z-index: 1;
  margin-right: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.$isSent ? colors.background.white : colors.brand.deepBlue};
  border: 1px solid ${props => props.$isSent ? colors.neutral.borderGrey : colors.brand.deepBlue};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ProfileImageContainer = styled.div`
  margin-right: 8px;
  flex-shrink: 0;
`

const ProfileImage = styled.div<{ $image: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  border: 1px solid ${colors.neutral.borderGrey};
`

const ContentContainer = styled.div<{ $clickable: boolean }>`
  flex: 1;
  border: 1px solid ${colors.neutral.borderGrey};
  border-radius: 8px;
  background-color: ${colors.background.white};
  padding: 16px;
  transition: all 0.2s ease;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  
  ${props => props.$clickable && `
    &:hover {
      background-color: ${colors.neutral.surfaceGrey1};
      border-color: ${colors.brand.deepBlue}40;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }
  `}
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const NameRow = styled.div`
  display: flex;
  align-items: center;
`

const NameWrapper = styled.div`
  margin-right: 8px;
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

const RoleTagWrapper = styled.div<{ $hasChevron?: boolean }>`
  display: flex;
  align-items: center;
  margin-right: ${props => props.$hasChevron ? '8px' : '0'};
`

const RoleTag = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.neutral.iconGrey};
  color: ${colors.background.white};
  padding: 0px 6px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 500;
`

const RoleTagIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
`

const RoleTagText = styled.span`
  white-space: nowrap;
`

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.neutral.textGrey};
  font-size: 11px;
  margin-left: 8px;
`

const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ChevronIcon = styled(FiChevronRight)`
  color: ${colors.neutral.textGrey};
  width: 16px;
  height: 16px;
`

const ContentWrapper = styled.div`
  margin-bottom: 8px;
  white-space: normal;
  word-break: break-word;
`

const StyledContentTypography = styled(Typography)`
  display: inline;
`

const StyledCommentTypography = styled(Typography)`
  display: inline;
`

const HighlightedTypography = styled(Typography)`
  color: ${colors.brand.deepBlue};
  display: inline;
`

const CommentWrapper = styled.div`
  padding: 16px;
  background-color: ${colors.background.grey};
  border-radius: 8px;
  color: ${colors.neutral.textGrey};
  white-space: normal;
  word-break: break-word;
`

const SendIcon = styled(FiSend)`
  color: ${colors.brand.deepBlue};
  width: 14px;
  height: 14px;
`

const ReceiveIcon = styled(FiDownload)`
  color: ${colors.background.white};
  width: 14px;
  height: 14px;
`

const TaskIcon = styled(MdAssignmentAdd)`
  color: ${colors.background.white};
  width: 12px;
  height: 12px;
`

const ReviewIcon = styled(MdRateReview)`
  color: ${colors.background.white};
  width: 12px;
  height: 12px;
`

const UpdateIcon = styled(MdInfo)`
  color: ${colors.background.white};
  width: 12px;
  height: 12px;
`

export const CompanyLogItem: React.FC<CompanyLogItemProps> = (props) => {
  const { profileImage, name, role, date, content, comment, type = 'receive', onClick } = props
  
  const isSent = type === 'send'
  
  const isClickable = role === 'task' || role === 'review' || role === 'update'
  
  const getTypeIcon = () => {
    return isSent ? <SendIcon /> : <ReceiveIcon />
  }
  
  const getRoleTag = () => {
    switch (role) {
      case 'task':
        return (
          <RoleTag>
            <RoleTagIcon>
              <TaskIcon />
            </RoleTagIcon>
            <RoleTagText>할 일</RoleTagText>
          </RoleTag>
        )
      case 'review':
        return (
          <RoleTag>
            <RoleTagIcon>
              <ReviewIcon />
            </RoleTagIcon>
            <RoleTagText>검토</RoleTagText>
          </RoleTag>
        )
      case 'update':
        return (
          <RoleTag>
            <RoleTagIcon>
              <UpdateIcon />
            </RoleTagIcon>
            <RoleTagText>업데이트</RoleTagText>
          </RoleTag>
        )
      default:
        return null
    }
  }
  
  const formatContent = (text: string) => {
    if (!text) return null
    
    // 이모지와 강조 표시를 모두 처리하기 위한 정규식
    const parts = text.split(/(\*\*.*?\*\*)/g)
    
    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const highlightText = part.slice(2, -2)
            return (
              <HighlightedTypography 
                key={index} 
                variant="body4"
              >
                {highlightText}
              </HighlightedTypography>
            )
          }
          return <span key={index} style={{ display: 'inline' }}>{part}</span>
        })}
      </>
    )
  }
  
  const formatComment = (text: string) => {
    if (!text) return null
    
    // 줄바꿈을 <br /> 태그로 변환
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {line}
      </React.Fragment>
    ))
  }
  
  const handleClick = () => {
    if (isClickable && onClick) {
      onClick()
    }
  }
  
  return (
    <Container>
      <TypeIconContainer $isSent={isSent}>
        {getTypeIcon()}
      </TypeIconContainer>
      <ContentContainer $clickable={isClickable} onClick={handleClick}>
        <Header>
          <UserInfo>
            <ProfileImageContainer>
              <ProfileImage $image={profileImage} />
            </ProfileImageContainer>
            <NameRow>
              <NameWrapper>
                <Typography variant="subtitle2">{name}</Typography>
              </NameWrapper>
              <DateWrapper>
                {date}
              </DateWrapper>
            </NameRow>
          </UserInfo>
          <RightSection>
            <RoleTagWrapper $hasChevron={isClickable}>
              {getRoleTag()}
            </RoleTagWrapper>
            {isClickable && (
              <ChevronWrapper>
                <ChevronIcon />
              </ChevronWrapper>
            )}
          </RightSection>
        </Header>
        <ContentWrapper>
          <StyledContentTypography variant="body3">
            {formatContent(content)}
          </StyledContentTypography>
        </ContentWrapper>
        {comment && comment.trim() !== '' && (
          <CommentWrapper>
            <StyledCommentTypography variant="body4">
              {formatComment(comment)}
            </StyledCommentTypography>
          </CommentWrapper>
        )}
      </ContentContainer>
    </Container>
  )
}

export default CompanyLogItem 