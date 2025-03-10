'use client'

import React from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/colors'
import { typography, fontWeightValues } from '@/styles/typography'

export interface HistoryItemProps {
  profileImage: string
  name: string
  role: string
  date: string
  content: string
  comment?: string
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  &:not(:last-child)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 19px;
    width: 2px;
    height: calc(100% + 24px);
    background-color: ${colors.neutral.borderGrey};
    z-index: 0;
  }
`

const ProfileImageContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-right: 16px;
  flex-shrink: 0;
`

const ProfileImage = styled.div<{ $image: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  border: 1px solid ${colors.neutral.borderGrey};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ContentContainer = styled.div`
  flex: 1;
  border: 1px solid ${colors.neutral.borderGrey};
  border-radius: 8px;
  background-color: ${colors.background.white};
  padding: 16px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const NameRow = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.div`
  font-size: ${typography.subtitle2.size};
  font-weight: ${fontWeightValues[typography.subtitle2.weight]};
  line-height: ${typography.subtitle2.lineHeight};
  color: ${colors.neutral.darkText};
  margin-right: 4px;
`

const Role = styled.div`
  font-size: ${typography.caption2.size};
  font-weight: ${fontWeightValues[typography.caption2.weight]};
  line-height: ${typography.caption2.lineHeight};
  color: ${colors.neutral.textGrey};
`

const DateText = styled.div`
  font-size: ${typography.caption2.size};
  font-weight: ${fontWeightValues[typography.caption2.weight]};
  line-height: ${typography.caption2.lineHeight};
  color: ${colors.neutral.textGrey};
  text-align: right;
`

const Content = styled.div`
  font-size: ${typography.body3.size};
  font-weight: ${fontWeightValues[typography.body3.weight]};
  line-height: ${typography.body3.lineHeight};
  color: ${colors.neutral.darkText};
  margin-bottom: 8px;
`

const Comment = styled.div`
  padding: 16px;
  background-color: ${colors.background.grey};
  border-radius: 8px;
  font-size: ${typography.body4.size};
  font-weight: ${fontWeightValues[typography.body4.weight]};
  line-height: ${typography.body4.lineHeight};
  color: ${colors.neutral.textGrey};
`

export const HistoryItem: React.FC<HistoryItemProps> = (props) => {
  const { profileImage, name, role, date, content, comment } = props;
  
  return (
    <Container>
      <ProfileImageContainer>
        <ProfileImage $image={profileImage} />
      </ProfileImageContainer>
      <ContentContainer>
        <Header>
          <UserInfo>
            <NameRow>
              <Name>{name}</Name>
              <Role>({role})</Role>
            </NameRow>
          </UserInfo>
          <DateText>{date}</DateText>
        </Header>
        <Content>{content}</Content>
        {comment && <Comment>{comment}</Comment>}
      </ContentContainer>
    </Container>
  );
}

export default HistoryItem 