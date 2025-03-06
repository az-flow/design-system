'use client'

import styled from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'
import { useState } from 'react'

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const Title = styled.h2`
  margin-bottom: 48px;
`

// 그리드 시스템
export const Grid = styled.div<{ columns?: 1 | 2 | 3 | 4 }>`
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(${props => props.columns || 1}, 1fr);
  width: 100%;
`

export const Section = styled.div<{ collapsible?: boolean }>`
  width: 100%;
`

export const SectionInner = styled.div<{ collapsible?: boolean; isOpen?: boolean; clickable?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 29px 21px;
  gap: ${props => props.collapsible ? (props.isOpen ? '34px' : '0') : '34px'};
  background: ${colorSystem.background.white};
  border: 1px solid ${colorSystem.neutral.borderGrey};
  border-radius: 13px;
  cursor: ${props => (props.collapsible || props.clickable) ? 'pointer' : 'default'};
  transition: background-color 0.2s ease-in-out;

  ${props => props.clickable && `
    &:hover {
      background: ${colorSystem.background.grey};
    }
  `}

  ${props => (props.collapsible || props.clickable) && `
    > div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  `}
`

export const SectionTitle = styled.h6`
  color: ${colorSystem.neutral.black};
`

const SectionContent = styled.div<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: ${props => props.isOpen === undefined ? 'auto' : props.isOpen ? 'auto' : '0'};
  overflow: hidden;
  opacity: ${props => props.isOpen === undefined ? '1' : props.isOpen ? '1' : '0'};
  transition: ${props => props.isOpen === undefined ? 'none' : 'all 0.3s ease-in-out'};
`

const ChevronIcon = styled.svg<{ isOpen?: boolean; direction?: 'down' | 'right' }>`
  width: 24px;
  height: 24px;
  transform: ${props => {
    if (props.direction === 'right') return 'rotate(-90deg)';
    return props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  }};
  transition: transform 0.3s ease-in-out;
`

const UserCard = styled.div<{ clickable?: boolean }>`
  position: relative;
  width: 100%;
  height: 85px;
  border: 1px solid ${colorSystem.neutral.borderGrey};
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 18px;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  transition: background-color 0.2s ease-in-out;

  ${props => props.clickable && `
    &:hover {
      background: ${colorSystem.background.grey};
    }
  `}
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
`

interface UserAvatarProps {
  imageUrl?: string;
  initial: string;
}

const UserAvatarWrapper = styled.div`
  width: 41px;
  height: 41px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const UserAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const UserAvatarInitial = styled.div`
  width: 100%;
  height: 100%;
  background: #E8F2FF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #358CFF;
`

const UserAvatar = ({ imageUrl, initial }: UserAvatarProps) => {
  return (
    <UserAvatarWrapper>
      {imageUrl ? (
        <UserAvatarImage 
          src={imageUrl} 
          alt="User avatar" 
          width={41} 
          height={41}
        />
      ) : (
        <UserAvatarInitial>{initial}</UserAvatarInitial>
      )}
    </UserAvatarWrapper>
  )
}

const UserTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const UserName = styled.div`
  color: ${colorSystem.neutral.black};
`

const UserRole = styled.div`
  color: ${colorSystem.neutral.textGrey};
`

export default function SectionsPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container>
      <Title>섹션 & 카드</Title>

      {/* 기본 섹션 타입 */}
      <Section>
        <SectionInner>
          <div>
            <SectionTitle className="h6">H6.기본섹션</SectionTitle>
          </div>
          <SectionContent>
            <p className="body1">기본 섹션 컴포넌트입니다.</p>
            <p className="body1">기본 간격은 34px 입니다.</p>
          </SectionContent>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner clickable onClick={() => console.log('clicked')}>
          <div>
            <SectionTitle className="h6">H6.클릭가능섹션</SectionTitle>
            <ChevronIcon 
              direction="right"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={colorSystem.neutral.black}
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6"/>
            </ChevronIcon>
          </div>
          <SectionContent>
            <p className="body1">클릭 가능한 섹션 컴포넌트입니다.</p>
            <p className="body1">hover 시 배경색이 변경됩니다.</p>
          </SectionContent>
        </SectionInner>
      </Section>

      <Section collapsible>
        <SectionInner collapsible isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div>
            <SectionTitle className="h6">H6.접히는섹션</SectionTitle>
            <ChevronIcon 
              isOpen={isOpen}
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={colorSystem.neutral.black}
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6"/>
            </ChevronIcon>
          </div>
          <SectionContent isOpen={isOpen}>
            <p className="body1">접히는 섹션 입니다.</p>
            <p className="body1">섹션 헤더를 클릭하면 접힙니다.</p>
          </SectionContent>
        </SectionInner>
      </Section>
      <div className="divider" style={{ margin: '34px 0' }}/>

      <h3>그리드 시스템</h3>
      <h5>섹션 그리드 예시</h5>
      
      {/* 2열 섹션 */}
      <p className="subtitle1">2열 섹션</p>
      <Grid columns={2}>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">2열 섹션 1</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">2열로 배치된 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">2열 섹션 2</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">2열로 배치된 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
      </Grid>

      {/* 3열 섹션 */}
      <p className="subtitle1" style={{ marginTop: '34px' }}>3열 섹션</p>
      <Grid columns={3}>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">3열 섹션 1</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">3열로 배치된 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">3열 섹션 2</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">3열로 배치된 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">3열 섹션 3</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">3열로 배치된 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
      </Grid>

      {/* 3열 섹션 - 2:1 비율 */}
      <p className="subtitle1" style={{ marginTop: '34px' }}>3열 섹션 (2:1 비율)</p>
      <Grid columns={3}>
        <Section style={{ gridColumn: 'span 2' }}>
          <SectionInner>
            <div>
              <SectionTitle className="h6">2칸을 차지하는 섹션</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">3열 그리드에서 2칸을 차지하는 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">1칸 섹션</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">1칸을 차지하는 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
      </Grid>

      {/* 4열 섹션 */}
      <p className="subtitle1" style={{ marginTop: '34px' }}>4열 섹션</p>
      <Grid columns={4}>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">4열 섹션 1</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">4열로 배치된 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">4열 섹션 2</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">4열로 배치된 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">4열 섹션 3</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">4열로 배치된 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">4열 섹션 4</SectionTitle>
            </div>
            <SectionContent>
              <p className="subtitle1">4열로 배치된 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
      </Grid>

      {/* 4열 섹션 - 2:1:1 비율 */}
      <p className="subtitle1" style={{ marginTop: '34px' }}>4열 섹션 (2:1:1 비율)</p>
      <Grid columns={4}>
        <Section style={{ gridColumn: 'span 2' }}>
          <SectionInner>
            <div>
              <SectionTitle className="h6">2칸을 차지하는 섹션</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">4열 그리드에서 2칸을 차지하는 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">1칸 섹션 1</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">1칸을 차지하는 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
        <Section>
          <SectionInner>
            <div>
              <SectionTitle className="h6">1칸 섹션 2</SectionTitle>
            </div>
            <SectionContent>
              <p className="body1">1칸을 차지하는 섹션입니다.</p>
            </SectionContent>
          </SectionInner>
        </Section>
      </Grid>
      <div className="divider" style={{ margin: '34px 0' }}/>

      {/* 카드 그리드 예시 */}
      <Section>
        <SectionInner>
          <div>
            <SectionTitle className="h6">H6.이너섹션 그리드</SectionTitle>
          </div>
          <SectionContent>
            <p className="subtitle1">이너섹션 그리드 예시</p>

            <p className="body1">1열 카드</p>
            <Grid>
              <UserCard clickable>
                <UserInfo>
                  <UserAvatar 
                    imageUrl="https://i.pravatar.cc/150?img=32"
                    initial="이"
                  />
                  <UserTextInfo>
                    <UserName className="subtitle1">이재혁</UserName>
                    <UserRole className="body1">대표 펀드 매니저</UserRole>
                  </UserTextInfo>
                </UserInfo>
                <ChevronIcon 
                  direction="right"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colorSystem.neutral.black}
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </ChevronIcon>
              </UserCard>
            </Grid>

            <p className="body1" style={{ marginTop: '34px' }}>2열 카드</p>
            <Grid columns={2}>
              <UserCard clickable>
                <UserInfo>
                  <UserAvatar 
                    imageUrl="https://i.pravatar.cc/150?img=32"
                    initial="이"
                  />
                  <UserTextInfo>
                    <UserName className="subtitle1">이재혁</UserName>
                    <UserRole className="body1">대표 펀드 매니저</UserRole>
                  </UserTextInfo>
                </UserInfo>
                <ChevronIcon 
                  direction="right"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colorSystem.neutral.black}
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </ChevronIcon>
              </UserCard>
              <UserCard clickable>
                <UserInfo>
                  <UserAvatar 
                    imageUrl="https://i.pravatar.cc/150?img=33"
                    initial="김"
                  />
                  <UserTextInfo>
                    <UserName className="subtitle1">김민수</UserName>
                    <UserRole className="body1">펀드 매니저</UserRole>
                  </UserTextInfo>
                </UserInfo>
                <ChevronIcon 
                  direction="right"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colorSystem.neutral.black}
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </ChevronIcon>
              </UserCard>
            </Grid>

            <p className="body1" style={{ marginTop: '34px' }}>3열 카드</p>
            <Grid columns={3}>
              <UserCard clickable>
                <UserInfo>
                  <UserAvatar 
                    imageUrl="https://i.pravatar.cc/150?img=32"
                    initial="이"
                  />
                  <UserTextInfo>
                    <UserName className="subtitle1">이재혁</UserName>
                    <UserRole className="body1">대표 펀드 매니저</UserRole>
                  </UserTextInfo>
                </UserInfo>
                <ChevronIcon 
                  direction="right"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colorSystem.neutral.black}
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </ChevronIcon>
              </UserCard>
              <UserCard clickable>
                <UserInfo>
                  <UserAvatar 
                    imageUrl="https://i.pravatar.cc/150?img=33"
                    initial="김"
                  />
                  <UserTextInfo>
                    <UserName className="subtitle1">김민수</UserName>
                    <UserRole className="body1">펀드 매니저</UserRole>
                  </UserTextInfo>
                </UserInfo>
                <ChevronIcon 
                  direction="right"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colorSystem.neutral.black}
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </ChevronIcon>
              </UserCard>
              <UserCard clickable>
                <UserInfo>
                  <UserAvatar 
                    imageUrl="https://i.pravatar.cc/150?img=34"
                    initial="박"
                  />
                  <UserTextInfo>
                    <UserName className="subtitle1">박지성</UserName>
                    <UserRole className="body1">펀드 매니저</UserRole>
                  </UserTextInfo>
                </UserInfo>
                <ChevronIcon 
                  direction="right"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colorSystem.neutral.black}
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </ChevronIcon>
              </UserCard>
            </Grid>

            <p className="body1" style={{ marginTop: '34px' }}>4열 카드</p>
            <Grid columns={4}>
              <UserCard clickable>
                <UserInfo>
                  <UserAvatar 
                    imageUrl="https://i.pravatar.cc/150?img=32"
                    initial="이"
                  />
                  <UserTextInfo>
                    <UserName className="subtitle1">이재혁</UserName>
                    <UserRole className="body1">대표 펀드 매니저</UserRole>
                  </UserTextInfo>
                </UserInfo>
                <ChevronIcon 
                  direction="right"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colorSystem.neutral.black}
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </ChevronIcon>
              </UserCard>
              <UserCard clickable>
                <UserInfo>
                  <UserAvatar 
                    imageUrl="https://i.pravatar.cc/150?img=33"
                    initial="김"
                  />
                  <UserTextInfo>
                    <UserName className="subtitle1">김민수</UserName>
                    <UserRole className="body1">펀드 매니저</UserRole>
                  </UserTextInfo>
                </UserInfo>
                <ChevronIcon 
                  direction="right"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colorSystem.neutral.black}
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </ChevronIcon>
              </UserCard>
              <UserCard clickable>
                <UserInfo>
                  <UserAvatar 
                    imageUrl="https://i.pravatar.cc/150?img=34"
                    initial="박"
                  />
                  <UserTextInfo>
                    <UserName className="subtitle1">박지성</UserName>
                    <UserRole className="body1">펀드 매니저</UserRole>
                  </UserTextInfo>
                </UserInfo>
                <ChevronIcon 
                  direction="right"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colorSystem.neutral.black}
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </ChevronIcon>
              </UserCard>
              <UserCard clickable>
                <UserInfo>
                  <UserAvatar 
                    imageUrl="https://i.pravatar.cc/150?img=35"
                    initial="최"
                  />
                  <UserTextInfo>
                    <UserName className="subtitle1">최영희</UserName>
                    <UserRole className="body1">펀드 매니저</UserRole>
                  </UserTextInfo>
                </UserInfo>
                <ChevronIcon 
                  direction="right"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={colorSystem.neutral.black}
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </ChevronIcon>
              </UserCard>
            </Grid>
          </SectionContent>
        </SectionInner>
      </Section>
    </Container>
  )
}