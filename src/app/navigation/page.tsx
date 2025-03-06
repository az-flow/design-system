'use client'

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '@/styles/colors'
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
  background: ${colors.neutral.borderGrey};
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

  useEffect(() => {
    setMounted(true)
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
    </MenuBar>
  );
} 