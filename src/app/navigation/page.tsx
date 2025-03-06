'use client'

import { useState } from 'react'
import styled from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'
import { 
  MdViewList, 
  MdAutoGraph, 
  MdWork, 
  MdDashboard, 
  MdStorage, 
  MdDescription,
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from 'react-icons/md'
import {
  HiUsers,
  HiCurrencyDollar,
  HiUserGroup,
  HiLightBulb
} from 'react-icons/hi'

const MenuBar = styled.nav`
  position: relative;
  width: 286px;
  padding-bottom: 50px;
  background: ${colorSystem.background.white};
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
`

const Logo = styled.div`
  position: relative;
  width: 136.59px;
  height: 30.13px;
  display: flex;
  align-items: center;
`

const Divider = styled.div`
  width: 248px;
  height: 1px;
  margin: 0 19px;
  background: ${colorSystem.neutral.borderGrey};
`

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 6px;
  width: 248px;
  margin: 20px 19px 0;
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

const MenuItem = styled.div<{ isActive?: boolean }>`
  position: relative;
  width: 100%;
  height: 44px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: ${props => props.isActive ? colorSystem.neutral.surfaceGrey1 : colorSystem.background.white};
  border-radius: 7px;
  cursor: pointer;
  color: ${props => props.isActive ? colorSystem.neutral.darkText : colorSystem.neutral.textGrey};

  &:hover {
    background: ${colorSystem.neutral.surfaceGrey1};
    color: ${colorSystem.neutral.darkText};

    ${MenuLabel}, ${MenuIcon}, ${ArrowIcon} {
      color: ${colorSystem.neutral.darkText};
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

const SubMenuWrapper = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: all 0.3s ease-in-out;
`

export default function NavigationPage() {
  const [openMenus, setOpenMenus] = useState<string[]>(['admin']); // 초기값으로 admin 메뉴 열기
  const [activeMenu, setActiveMenu] = useState<string>(''); // 선택된 메뉴 상태 추가
  const [activeParentMenu, setActiveParentMenu] = useState<string>(''); // 선택된 상위 메뉴 상태 추가

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

  return (
    <MenuBar>
      <MenuContainer>
        <Header>
          <Logo>
            {/* 로고 SVG 컴포넌트 추가 예정 */}
            내비게이션 헤더 자리
          </Logo>
        </Header>
        <Divider />
        <MainMenu>
          <MenuItem 
            onClick={() => {
              setActiveMenu('longlist');
              setActiveParentMenu('');
            }}
            isActive={activeMenu === 'longlist'}
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
            isActive={activeMenu === 'dealflow'}
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
            isActive={activeMenu === 'portfolio'}
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
            isActive={activeMenu === 'dashboard' || activeParentMenu === 'dashboard'}
          >
            <MenuIcon>
              <MdDashboard size={24} />
            </MenuIcon>
            <MenuLabel>대시보드</MenuLabel>
            <ArrowIcon>
              {isMenuOpen('dashboard') ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            </ArrowIcon>
          </MenuItem>
          <SubMenuWrapper isOpen={isMenuOpen('dashboard')}>
            <SubMenu>
              <SubMenuItem
                onClick={() => handleSubMenuClick('resource-dashboard', 'dashboard')}
                isActive={activeMenu === 'resource-dashboard'}
              >
                <MenuIcon>
                  <MdAutoGraph size={24} />
                </MenuIcon>
                <MenuLabel>재원 대시보드</MenuLabel>
              </SubMenuItem>
              <SubMenuItem
                onClick={() => handleSubMenuClick('performance-dashboard', 'dashboard')}
                isActive={activeMenu === 'performance-dashboard'}
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
            isActive={activeMenu === 'database'}
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
            isActive={activeMenu === 'report'}
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
            isActive={activeMenu === 'admin' || activeParentMenu === 'admin'}
          >
            <MenuIcon>
              <MdAdminPanelSettings size={24} />
            </MenuIcon>
            <MenuLabel>어드민</MenuLabel>
            <ArrowIcon>
              {isMenuOpen('admin') ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            </ArrowIcon>
          </MenuItem>
          <SubMenuWrapper isOpen={isMenuOpen('admin')}>
            <SubMenu>
              <SubMenuItem
                onClick={() => handleSubMenuClick('organization', 'admin')}
                isActive={activeMenu === 'organization'}
              >
                <MenuIcon>
                  <HiUsers size={24} />
                </MenuIcon>
                <MenuLabel>조직도</MenuLabel>
              </SubMenuItem>
              <SubMenuItem
                onClick={() => handleSubMenuClick('fund', 'admin')}
                isActive={activeMenu === 'fund'}
              >
                <MenuIcon>
                  <HiCurrencyDollar size={24} />
                </MenuIcon>
                <MenuLabel>펀드 관리</MenuLabel>
              </SubMenuItem>
              <SubMenuItem
                onClick={() => handleSubMenuClick('stakeholder', 'admin')}
                isActive={activeMenu === 'stakeholder'}
              >
                <MenuIcon>
                  <HiUserGroup size={24} />
                </MenuIcon>
                <MenuLabel>이해관계자 관리</MenuLabel>
              </SubMenuItem>
              <SubMenuItem
                onClick={() => handleSubMenuClick('channel', 'admin')}
                isActive={activeMenu === 'channel'}
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
    </MenuBar>
  );
} 