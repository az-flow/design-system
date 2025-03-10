'use client'

import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/colors'
import { typography, fontWeightValues } from '@/styles/typography'
import { 
  MdViewList, 
  MdAutoGraph, 
  MdWork, 
  MdDashboard, 
  MdStorage, 
  MdDescription,
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdCheck,
  MdChevronLeft,
  MdWindow
} from 'react-icons/md'
import {
  HiUsers,
  HiCurrencyDollar,
  HiUserGroup,
  HiLightBulb,
  HiChevronRight
} from 'react-icons/hi'
import { Typography } from '@/components/ui/Typography'

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${colors.neutral.black};
`

const MenubarContainer = styled.div`
  position: relative;
  width: 286px;
  height: 100vh;
  padding-bottom: 50px;
  background: ${colors.background.white};
  border-right: 1px solid ${colors.neutral.borderGrey};
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  background: ${colors.background.grey};
`

const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90px;
  padding: 0 40px;
  background: ${colors.background.grey};
  border-bottom: 1px solid ${colors.neutral.borderGrey};
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: ${typography.body4.size};
  font-weight: ${fontWeightValues[typography.body4.weight]};
  line-height: ${typography.body4.lineHeight};
  color: ${colors.neutral.textGrey};
`

const BackIcon = styled(MdChevronLeft)`
  width: 20px;
  height: 20px;
  color: ${colors.neutral.textGrey};
`

const PageTitle = styled.div`
  font-size: ${typography.h4.size};
  font-weight: ${fontWeightValues[typography.h4.weight]};
  line-height: ${typography.h4.lineHeight};
  color: ${colors.neutral.darkText};
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const NotificationButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
`

const NotificationIcon = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 15.5 3 17.5 3 17.5H21C21 17.5 18 15.5 18 8.5Z" stroke={colors.neutral.iconGrey} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.73 21.5C13.5542 21.8031 13.3019 22.0547 12.9982 22.2295C12.6946 22.4044 12.3504 22.4965 12 22.4965C11.6496 22.4965 11.3054 22.4044 11.0018 22.2295C10.6982 22.0547 10.4458 21.8031 10.27 21.5" stroke={colors.neutral.iconGrey} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url('https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff');
  background-size: cover;
  background-position: center;
  cursor: pointer;
`

const MainContent = styled.main`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  background: ${colors.background.grey};
`

const MenuBar = styled.nav`
  position: relative;
  width: 286px;
  padding-bottom: 50px;
  background: ${colors.background.white};
`

const MenuContainer = styled.div`
  position: relative;
  width: 286px;
`

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NavHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 8px;
  width: 250px;
  height: 61px;
  cursor: pointer;
  position: relative;
`

const ProfileIcon = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  background-image: url('https://ui-avatars.com/api/?name=ABC&background=FF0000&color=fff');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  flex: none;
  order: 0;
  flex-grow: 0;
`

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 1px;
  width: 157px;
  height: 41px;
  flex: none;
  order: 1;
  flex-grow: 1;
`

const CompanyName = styled.div`
  width: auto;
  height: 20px;
  font-size: ${typography.subtitle2.size};
  font-weight: ${fontWeightValues[typography.subtitle2.weight]};
  line-height: ${typography.subtitle2.lineHeight};
  display: flex;
  align-items: center;
  color: ${colors.neutral.darkText};
  flex: none;
  order: 0;
  flex-grow: 0;
`

const SpaceType = styled.div`
  width: auto;
  height: 20px;
  font-size: ${typography.caption2.size};
  font-weight: ${fontWeightValues[typography.caption2.weight]};
  line-height: ${typography.caption2.lineHeight};
  display: flex;
  align-items: center;
  color: ${colors.neutral.textGrey};
  flex: none;
  order: 1;
  flex-grow: 0;
`

const ChevronIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  order: 2;
  flex-grow: 0;
`

const ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke={colors.neutral.darkText} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SpaceDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 280px;
  background: white;
  border: 1px solid ${colors.neutral.borderGrey};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  margin-top: 8px;
  overflow: visible;
  opacity: ${props => props.$isOpen ? 1 : 0};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: opacity 0.2s ease, transform 0.2s ease;
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
`

const SubSpaceDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 260px;
  width: 280px;
  background: white;
  border: 1px solid ${colors.neutral.borderGrey};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 101;
  margin-left: 8px;
  overflow: hidden;
  opacity: ${props => props.$isOpen ? 1 : 0};
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-10px)'};
  transition: opacity 0.2s ease, transform 0.2s ease;
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
`

const SpaceItemContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
`

const SpaceItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  background: ${props => props.$isActive ? colors.background.grey : colors.background.white};
  cursor: pointer;
  position: relative;

  &:hover {
    background: ${colors.background.grey};
  }
`

const SpaceIcon = styled.div<{ $image?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: ${props => props.$image ? `url(${props.$image})` : 'url("https://ui-avatars.com/api/?name=ABC&background=FF0000&color=fff")'};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`

const SpaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-grow: 1;
`

const SpaceName = styled.div`
  font-size: ${typography.subtitle2.size};
  font-weight: ${fontWeightValues[typography.subtitle2.weight]};
  line-height: ${typography.subtitle2.lineHeight};
  color: ${colors.neutral.darkText};
`

const SpaceDescription = styled.div`
  font-size: ${typography.caption2.size};
  font-weight: ${fontWeightValues[typography.caption2.weight]};
  line-height: ${typography.caption2.lineHeight};
  color: ${colors.neutral.textGrey};
`

const CheckIcon = styled(MdCheck)`
  width: 24px;
  height: 24px;
  color: ${colors.neutral.darkText};
`

const ChevronRightIcon = styled(HiChevronRight)`
  width: 24px;
  height: 24px;
  color: ${colors.neutral.iconGrey};
`

const Divider = styled.div`
  width: 248px;
  height: 1px;
  margin: 0 19px;
  background-color: ${colors.neutral.borderGrey};
`

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 6px;
  width: 248px;
  margin: 24px 19px;
`

const MenuIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`

const MenuLabel = styled.div.attrs({ className: 'subtitle1' })`
  color: inherit;
  font-weight: 500;
  letter-spacing: -0.02em;
`

const ArrowIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: inherit;
`

const MenuItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isactive'
})<{ isactive: string }>`
  position: relative;
  width: 100%;
  height: 44px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: ${props => props.isactive === 'true' ? colors.neutral.surfaceGrey1 : colors.background.white};
  border-radius: 7px;
  cursor: pointer;
  color: ${props => props.isactive === 'true' ? colors.neutral.darkText : colors.neutral.textGrey};

  &:hover {
    background: ${colors.neutral.surfaceGrey1};
    color: ${colors.neutral.darkText};

    ${MenuLabel}, ${MenuIcon}, ${ArrowIcon} {
      color: ${colors.neutral.darkText};
    }
  }
`

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 6px;
  width: 198px;
  margin: 6px 0 0 40px;
`

const SubMenuItem = styled(MenuItem)`
  padding: 12px 14px;
`

const SubMenuWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isopen'
})<{ isopen: boolean }>`
  overflow: hidden;
  max-height: ${props => props.isopen ? '500px' : '0'};
  opacity: ${props => props.isopen ? 1 : 0};
  transition: all 0.3s ease-in-out;
`

export default function NavigationPage() {
  const [mounted, setMounted] = useState(false)
  const [openMenus, setOpenMenus] = useState<string[]>(['admin'])
  const [activeMenu, setActiveMenu] = useState<string>('')
  const [activeParentMenu, setActiveParentMenu] = useState<string>('')
  const [isSpaceDropdownOpen, setIsSpaceDropdownOpen] = useState(false)
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    // 드롭다운 외부 클릭 시 닫기
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSpaceDropdownOpen(false)
        setSelectedSpace(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (!mounted) {
    return null
  }

  const toggleMenu = (menuId: string) => {
    setOpenMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const isMenuOpen = (menuId: string) => openMenus.includes(menuId);

  const handleSubMenuClick = (menuId: string, parentId: string) => {
    setActiveMenu(menuId);
    setActiveParentMenu(parentId);
  };

  const handleSpaceClick = (spaceName: string) => {
    setSelectedSpace(spaceName === selectedSpace ? null : spaceName)
  }

  return (
    <PageContainer>
      <MenubarContainer>
        <Header>
          <NavHeader onClick={() => setIsSpaceDropdownOpen(!isSpaceDropdownOpen)}>
            <ProfileIcon />
            <CompanyInfo>
              <CompanyName>ABC벤처스</CompanyName>
              <SpaceType>투자 스페이스</SpaceType>
            </CompanyInfo>
            <ChevronIcon>
              <ChevronDown />
            </ChevronIcon>
          </NavHeader>

          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <SpaceDropdown $isOpen={isSpaceDropdownOpen}>
              <SpaceItemContainer>
                <SpaceItem 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSpaceClick('ABC벤처스');
                  }}
                  $isActive={selectedSpace === 'ABC벤처스'}
                >
                  <SpaceIcon $image="https://ui-avatars.com/api/?name=ABC&background=FF0000&color=fff" />
                  <SpaceInfo>
                    <SpaceName>ABC벤처스</SpaceName>
                  </SpaceInfo>
                  <ChevronRightIcon />
                </SpaceItem>
                
                <SpaceItem>
                  <SpaceIcon $image="https://ui-avatars.com/api/?name=F&background=FFFFFF&color=000" />
                  <SpaceInfo>
                    <SpaceName>멋있는형제들</SpaceName>
                  </SpaceInfo>
                  <ChevronRightIcon />
                </SpaceItem>
                <SpaceItem>
                  <SpaceIcon $image="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" />
                  <SpaceInfo>
                    <SpaceName>홍길동</SpaceName>
                    <SpaceDescription>마이 스페이스</SpaceDescription>
                  </SpaceInfo>
                  <ChevronRightIcon />
                </SpaceItem>
              </SpaceItemContainer>
              
              {selectedSpace === 'ABC벤처스' && (
                <SubSpaceDropdown $isOpen={true} style={{ top: '0px' }}>
                  <SpaceItemContainer>
                    <SpaceItem $isActive={true}>
                      <SpaceIcon $image="https://ui-avatars.com/api/?name=ABC&background=FF0000&color=fff" />
                      <SpaceInfo>
                        <SpaceName>투자 스페이스</SpaceName>
                      </SpaceInfo>
                      <CheckIcon />
                    </SpaceItem>
                    <SpaceItem>
                      <SpaceIcon $image="https://ui-avatars.com/api/?name=ABC&background=FF0000&color=fff" />
                      <SpaceInfo>
                        <SpaceName>액셀러레이터 스페이스</SpaceName>
                      </SpaceInfo>
                      <ChevronRightIcon />
                    </SpaceItem>
                  </SpaceItemContainer>
                </SubSpaceDropdown>
              )}
            </SpaceDropdown>
          </div>
        </Header>
        <Divider />
        <MenuContainer>
          <MainMenu>
            <MenuItem 
              onClick={() => {
                setActiveMenu('longlist');
                setActiveParentMenu('');
              }}
              isactive={(activeMenu === 'longlist').toString()}
            >
              <MenuIcon>
                <MdViewList size={24} />
              </MenuIcon>
              <MenuLabel>롱리스트</MenuLabel>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setActiveMenu('dealflow');
                setActiveParentMenu('');
              }}
              isactive={(activeMenu === 'dealflow').toString()}
            >
              <MenuIcon>
                <MdAutoGraph size={24} />
              </MenuIcon>
              <MenuLabel>딜플로우</MenuLabel>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setActiveMenu('portfolio');
                setActiveParentMenu('');
              }}
              isactive={(activeMenu === 'portfolio').toString()}
            >
              <MenuIcon>
                <MdWork size={24} />
              </MenuIcon>
              <MenuLabel>포트폴리오</MenuLabel>
            </MenuItem>
            <MenuItem 
              onClick={() => {
                toggleMenu('dashboard');
                setActiveMenu('dashboard');
                setActiveParentMenu('');
              }}
              isactive={(activeMenu === 'dashboard' || activeParentMenu === 'dashboard').toString()}
            >
              <MenuIcon>
                <MdDashboard size={24} />
              </MenuIcon>
              <MenuLabel>대시보드</MenuLabel>
              <ArrowIcon>
                {isMenuOpen('dashboard') ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
              </ArrowIcon>
            </MenuItem>
            <SubMenuWrapper isopen={isMenuOpen('dashboard')}>
              <SubMenu>
                <SubMenuItem
                  onClick={() => handleSubMenuClick('resource-dashboard', 'dashboard')}
                  isactive={(activeMenu === 'resource-dashboard').toString()}
                >
                  <MenuIcon>
                    <MdAutoGraph size={24} />
                  </MenuIcon>
                  <MenuLabel>재원 대시보드</MenuLabel>
                </SubMenuItem>
                <SubMenuItem
                  onClick={() => handleSubMenuClick('performance-dashboard', 'dashboard')}
                  isactive={(activeMenu === 'performance-dashboard').toString()}
                >
                  <MenuIcon>
                    <MdAutoGraph size={24} />
                  </MenuIcon>
                  <MenuLabel>성과 대시보드</MenuLabel>
                </SubMenuItem>
              </SubMenu>
            </SubMenuWrapper>
            <MenuItem
              onClick={() => {
                setActiveMenu('database');
                setActiveParentMenu('');
              }}
              isactive={(activeMenu === 'database').toString()}
            >
              <MenuIcon>
                <MdStorage size={24} />
              </MenuIcon>
              <MenuLabel>데이터베이스</MenuLabel>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setActiveMenu('report');
                setActiveParentMenu('');
              }}
              isactive={(activeMenu === 'report').toString()}
            >
              <MenuIcon>
                <MdDescription size={24} />
              </MenuIcon>
              <MenuLabel>정기보고</MenuLabel>
            </MenuItem>
            <MenuItem 
              onClick={() => {
                toggleMenu('admin');
                setActiveMenu('admin');
                setActiveParentMenu('');
              }}
              isactive={(activeMenu === 'admin' || activeParentMenu === 'admin').toString()}
            >
              <MenuIcon>
                <MdAdminPanelSettings size={24} />
              </MenuIcon>
              <MenuLabel>어드민</MenuLabel>
              <ArrowIcon>
                {isMenuOpen('admin') ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
              </ArrowIcon>
            </MenuItem>
            <SubMenuWrapper isopen={isMenuOpen('admin')}>
              <SubMenu>
                <SubMenuItem
                  onClick={() => handleSubMenuClick('organization', 'admin')}
                  isactive={(activeMenu === 'organization').toString()}
                >
                  <MenuIcon>
                    <HiUsers size={24} />
                  </MenuIcon>
                  <MenuLabel>조직도</MenuLabel>
                </SubMenuItem>
                <SubMenuItem
                  onClick={() => handleSubMenuClick('fund', 'admin')}
                  isactive={(activeMenu === 'fund').toString()}
                >
                  <MenuIcon>
                    <HiCurrencyDollar size={24} />
                  </MenuIcon>
                  <MenuLabel>펀드 관리</MenuLabel>
                </SubMenuItem>
                <SubMenuItem
                  onClick={() => handleSubMenuClick('stakeholder', 'admin')}
                  isactive={(activeMenu === 'stakeholder').toString()}
                >
                  <MenuIcon>
                    <HiUserGroup size={24} />
                  </MenuIcon>
                  <MenuLabel>이해관계자 관리</MenuLabel>
                </SubMenuItem>
                <SubMenuItem
                  onClick={() => handleSubMenuClick('channel', 'admin')}
                  isactive={(activeMenu === 'channel').toString()}
                >
                  <MenuIcon>
                    <HiLightBulb size={24} />
                  </MenuIcon>
                  <MenuLabel>발굴 채널 관리</MenuLabel>
                </SubMenuItem>
              </SubMenu>
            </SubMenuWrapper>
          </MainMenu>
        </MenuContainer>
      </MenubarContainer>
      
      <MainContainer>
        <PageHeader>
          <HeaderContent>
            <TitleContainer>
              <BackButton>
                <BackIcon />
                Higher Menu
              </BackButton>
              <PageTitle>Menu Title</PageTitle>
            </TitleContainer>
            <HeaderRight>
              <NotificationButton>
                <NotificationIcon />
              </NotificationButton>
              <ProfileImage />
            </HeaderRight>
          </HeaderContent>
        </PageHeader>
        
        <MainContent>
          {/* Main content goes here */}
          <h2>메인 컨텐츠 영역</h2>
          <p>여기에 페이지 내용이 표시됩니다.</p>
        </MainContent>
      </MainContainer>
    </PageContainer>
  );
} 