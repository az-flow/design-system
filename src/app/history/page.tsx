'use client'

import React from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/colors'
import { typography, fontWeightValues } from '@/styles/typography'
import { HistoryList } from '@/components/History/HistoryList'
import { Section, SectionInner, SectionTitle, Grid } from '@/components/ui/Section'
import { HistoryItemProps } from '@/components/History/HistoryItem'

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`

const Title = styled.h1`
  ${typography.h3};
  color: ${colors.neutral.darkText};
  margin-bottom: 40px;
`

// 고정된 프로필 이미지 URL
const PROFILE_IMAGES = {
  박투자: 'https://randomuser.me/api/portraits/women/65.jpg',
  홍길동: 'https://randomuser.me/api/portraits/men/32.jpg',
}

// 샘플 데이터
const historyItems: HistoryItemProps[] = [
  {
    profileImage: PROFILE_IMAGES.박투자,
    name: '박투자',
    role: 'ABC벤처스',
    date: '2024-04-12 16:45:00',
    content: 'ABC벤처스이(가) 정기 보고 확인이 완료됐습니다.',
  },
  {
    profileImage: PROFILE_IMAGES.홍길동,
    name: '홍길동',
    role: '힘찬자매들',
    date: '2024-04-11 16:45:00',
    content: '힘찬자매들이(가) 정기 보고를 제출하였습니다.',
  },
  {
    profileImage: PROFILE_IMAGES.박투자,
    name: '박투자',
    role: 'ABC벤처스',
    date: '2024-04-11 11:20:00',
    content: 'ABC벤처스이(가) 정기 보고를 보완요청했습니다.',
    comment: '등기부등본 파일이 3개월이 경과된 것으로 확인됩니다. 최근 3개월 이내 발급본으로 업데이트 부탁드립니다.',
  },
  {
    profileImage: PROFILE_IMAGES.홍길동,
    name: '홍길동',
    role: '힘찬자매들',
    date: '2024-03-25 14:30:00',
    content: '힘찬자매들이(가) 다음 내용을 문의했습니다.',
    comment: '사업자등록번호가 잘못 기재되어 내용을 작성할 수 없습니다. 확인 부탁드립니다.'
  },
  {
    profileImage: PROFILE_IMAGES.홍길동,
    name: '홍길동',
    role: '힘찬자매들',
    date: '2024-03-20 11:25:00',
    content: '힘찬자매들이(가) 정기 보고를 임시 저장하였습니다.'
  },
  {
    profileImage: PROFILE_IMAGES.박투자,
    name: '박투자',
    role: 'ABC벤처스',
    date: '2024-03-20 11:25:00',
    content: '2024년 1분기 정기 보고가 시작되었습니다.'
  },
]

export default function HistoryPage() {
  return (
    <Container>
      <Title>히스토리</Title>

      <Grid columns={1}>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">업데이트 (접을 수 있는 방식)</SectionTitle>
            </div>
            <HistoryList items={historyItems} collapsible={true} />
          </SectionInner>
        </Section>

        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">일반 히스토리</SectionTitle>
            </div>
            <HistoryList items={historyItems} />
          </SectionInner>
        </Section>
      </Grid>
    </Container>
  )
} 