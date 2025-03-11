'use client'

import React from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/colors'
import { typography, fontWeightValues } from '@/styles/typography'
import { HistoryList } from '@/components/History/HistoryList'
import { CompanyLogList } from '@/components/History/CompanyLogList'
import { Section, SectionInner, SectionTitle, Grid } from '@/components/ui/Section'
import { HistoryItemProps } from '@/components/History/HistoryItem'
import { CompanyLogItemProps } from '@/components/History/CompanyLogItem'

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

// 히스토리 아이템 샘플 데이터
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

// 회사 로그 아이템 샘플 데이터
const companyLogItems: CompanyLogItemProps[] = [
  {
    profileImage: 'https://placehold.co/40x40/4F46E5/ffffff?text=ABC&font=roboto',
    name: 'ABC벤처스',
    role: 'task',
    date: '2025.04.15 10:00',
    content: '📩 **ABC벤처스**에서 투자 심사 정보 요청이 도착했습니다. 확인 후 제출해주세요.',
    comment: '안녕하세요, ABC벤처스 내부 프로세스에 따라 기업정보 및 서류를 요청드리오니 확인 부탁드립니다.',
    type: 'receive',
  },
  {
    profileImage: 'https://placehold.co/40x40/10B981/ffffff?text=XYZ&font=roboto',
    name: 'XYZ캐피탈',
    role: 'task',
    date: '2025.04.10 14:30',
    content: '📊 **XYZ캐피탈**에서 분기 보고 요청이 도착했습니다. 보고서를 제출해주세요.',
    comment: '',
    type: 'receive',
    onClick: () => console.log('XYZ캐피탈 review clicked')
  },
  {
    profileImage: 'https://placehold.co/40x40/F59E0B/ffffff?text=DEF&font=roboto',
    name: 'DEF인베스트먼트',
    role: 'update',
    date: '2025.04.05 09:20',
    content: '📨 **DEF인베스트먼트**에 동의권 요청을 하였습니다.',
    comment: '',
    type: 'send',
  },
  {
    profileImage: 'https://placehold.co/40x40/F59E0B/ffffff?text=DEF&font=roboto',
    name: 'DEF인베스트먼트',
    role: 'task',
    date: '2025.04.03 16:45',
    content: '✅ **DEF인베스트먼트**에서 동의권 요청에 대한 답변이 도착했습니다. 확인해주세요.',
    comment: '안녕하세요 대표님, 송부해주신 내용 중 주식수에 오류가 있는 것 같습니다. 확인 후 재송부 부탁드립니다.',
    type: 'receive',
  },
  {
    profileImage: 'https://placehold.co/40x40/6366F1/ffffff?text=SB&font=roboto',
    name: '스타트업 부스터',
    role: 'update',
    date: '2025.03.28 11:30',
    content: '🚀 **스타트업 부스터** 선발 프로그램에 지원하였습니다.',
    comment: '',
    type: 'send',
  },
  {
    profileImage: 'https://placehold.co/40x40/EC4899/ffffff?text=GHI&font=roboto',
    name: 'GHI파트너스',
    role: 'update',
    date: '2025.03.25 13:15',
    content: '💰 **GHI파트너스**에 투자 신청을 제출하였습니다.',
    comment: '',
    type: 'send',
  },
  {
    profileImage: 'https://placehold.co/40x40/8B5CF6/ffffff?text=TI&font=roboto',
    name: '테크 이노베이터',
    role: 'task',
    date: '2025.03.20 10:10',
    content: '📑 **테크 이노베이터**에서 정보 요청이 도착했습니다. 확인 후 제출해주세요.',
    comment: '안녕하세요, 테크 이노베이터 김삼순 심사역입니다. 내부 검토를 위해 기업정보 및 서류를 요청드리오니 내용 확인 부탁드립니다.',
    type: 'receive'
  },
  {
    profileImage: 'https://placehold.co/40x40/6366F1/ffffff?text=SB&font=roboto',
    name: '스타트업 부스터',
    role: 'update',
    date: '2025.03.15 14:25',
    content: '🎉 축하합니다! **스타트업 부스터** 선발 프로그램에서 **1차** 선발에 합격하셨습니다!',
    comment: '안녕하세요, 스타트업 부스터 운영팀입니다. 1차 선발에 합격하신 것을 진심으로 축하드립니다. 다음 단계 안내는 추후 이메일로 발송될 예정입니다.',
    type: 'receive'
  },
  {
    profileImage: 'https://placehold.co/40x40/8B5CF6/ffffff?text=TI&font=roboto',
    name: '테크 이노베이터',
    role: 'update',
    date: '2025.03.10 18:45',
    content: '🎊 축하합니다! **테크 이노베이터** 선발 프로그램에서 최종 합격하셨습니다!',
    comment: '안녕하세요, 테크 이노베이터 운영팀입니다. 최종 합격을 진심으로 축하드립니다! 오리엔테이션 일정 및 향후 프로그램 진행에 대한 안내를 메일로 발송해드렸으니 확인 부탁드립니다.',
    type: 'receive'
  },
  {
    profileImage: 'https://placehold.co/40x40/3B82F6/ffffff?text=ST&font=roboto',
    name: '힘찬남매들',
    role: 'update',
    date: '2025.03.05 11:45',
    content: '📄 주식 변동 이력이 업데이트되었습니다.',
    comment: '',
    type: 'send'
  }
]

export default function HistoryPage() {
  return (
    <Container>
      <Title>히스토리</Title>

      <Grid columns={1}>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">접을 수 있는 히스토리</SectionTitle>
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

        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">회사 로그</SectionTitle>
            </div>
            <CompanyLogList items={companyLogItems} collapsible={false} />
          </SectionInner>
        </Section>
      </Grid>
    </Container>
  )
} 