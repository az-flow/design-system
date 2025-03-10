'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/colors'
import { typography, fontWeightValues } from '@/styles/typography'
import { Modal, SideModal } from '@/components/Modal'
import { Section, SectionInner, SectionTitle, Grid } from '@/components/ui/Section'

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const Title = styled.h2`
  margin-bottom: 48px;
  ${typography.h4};
  color: ${colors.neutral.darkText};
`

const Button = styled.button`
  padding: 12px 24px;
  background-color: ${colors.brand.deepBlue};
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: ${typography.body2.size};
  font-weight: ${fontWeightValues[typography.body2.weight]};
  line-height: ${typography.body2.lineHeight};
  margin-right: 16px;
  
  &:hover {
    background-color: ${colors.brand.skyBlue};
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`

export default function ModalsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSideModalOpen, setIsSideModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  
  const openSideModal = () => setIsSideModalOpen(true)
  const closeSideModal = () => setIsSideModalOpen(false)

  return (
    <Container>
      <Title>모달</Title>

      <Grid columns={1}>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">모달 유형</SectionTitle>
            </div>
            <ButtonContainer>
              <Button onClick={openModal}>일반 모달 보기</Button>
              <Button onClick={openSideModal}>사이드 모달 보기</Button>
            </ButtonContainer>
          </SectionInner>
        </Section>
      </Grid>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="H6.기본 모달 타이틀"
      >
        <p>이것은 기본 모달입니다.</p>
        <p>모달 내용은 여기에 표시됩니다.</p>
      </Modal>

      <SideModal
        isOpen={isSideModalOpen}
        onClose={closeSideModal}
        title="H6.사이드 모달 타이틀"
      >
        <p>이것은 사이드 모달입니다.</p>
        <p>오른쪽에서 슬라이드되어 나타납니다.</p>
        <p>모달 내용은 여기에 표시됩니다.</p>
      </SideModal>
    </Container>
  )
} 