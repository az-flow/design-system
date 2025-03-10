'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/colors'
import { HistoryItem, HistoryItemProps } from './HistoryItem'
import { Button } from '@/components/ui/Button/Button'

interface HistoryListProps {
  items: HistoryItemProps[]
  collapsible?: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  position: relative;
`

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
`

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const ChevronIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`

export const HistoryList: React.FC<HistoryListProps> = ({ items, collapsible = false }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // 표시할 아이템 결정
  const displayItems = collapsible && !expanded ? items.slice(0, 1) : items;

  return (
    <Container>
      {displayItems.map((item, index) => (
        <HistoryItem
          key={index}
          profileImage={item.profileImage}
          name={item.name}
          role={item.role}
          date={item.date}
          content={item.content}
          comment={item.comment}
        />
      ))}
      
      {collapsible && items.length > 1 && (
        <ButtonContainer>
          <Button 
            $type="outline" 
            $color="default" 
            $size="xxsmall" 
            onClick={toggleExpand}
            style={{ zIndex: 1 }}
          >
            <ButtonContent>
              {expanded ? (
                <>
                  최근 업데이트만 보기
                  <ChevronIcon viewBox="0 0 24 24">
                    <polyline points="18 15 12 9 6 15" />
                  </ChevronIcon>
                </>
              ) : (
                <>
                  전체 히스토리 보기
                  <ChevronIcon viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" />
                  </ChevronIcon>
                </>
              )}
            </ButtonContent>
          </Button>
        </ButtonContainer>
      )}
    </Container>
  )
}

export default HistoryList 