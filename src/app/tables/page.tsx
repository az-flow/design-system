'use client'

import styled from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'
import { Section, SectionInner, SectionTitle } from '@/app/sections/page'

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const Title = styled.h2`
  margin-bottom: 48px;
`

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const Table = styled.div`
  width: 100%;
  border: 1px solid ${colorSystem.neutral.borderGrey};
  border-radius: 7px;
`

interface ColumnConfig {
  title: string;
  isMin?: boolean;
  isLong?: boolean;
  type: 'text' | 'number' | 'date';
}

interface RowData {
  type: 'text' | 'number' | 'date';
  value: string;
}

const getGridTemplateColumns = (columns: ColumnConfig[]) => {
  return columns.map(col => {
    if (col.isMin) return '80px';
    if (col.isLong) return '1.5fr';
    return '1fr';
  }).join(' ');
};

const TableHeader = styled.div<{ $gridTemplate: string }>`
  display: grid;
  grid-template-columns: ${props => props.$gridTemplate};
  background: #E3E4E7;
  border-bottom: 1px solid ${colorSystem.neutral.borderGrey};

  > div {
    padding: 16px;
    font-weight: 500;
    font-size: 15px;
    border-right: 1px solid ${colorSystem.neutral.borderGrey};
    overflow-wrap: break-word;
    word-break: keep-all;
    white-space: pre-wrap;
    
    &:last-child {
      border-right: none;
    }
  }
`

const TableRow = styled.div<{ $gridTemplate: string }>`
  display: grid;
  grid-template-columns: ${props => props.$gridTemplate};
  border-bottom: 1px solid ${colorSystem.neutral.borderGrey};
  
  &:last-child {
    border-bottom: none;
  }
  
  > div {
    padding: 17px 15px;
    border-right: 1px solid ${colorSystem.neutral.borderGrey};
    display: flex;
    align-items: flex-start;
    
    &:last-child {
      border-right: none;
    }
  }
`

const TableCell = styled.div<{ type: 'text' | 'number' | 'date' }>`
  font-size: 16px;
  color: ${colorSystem.neutral.textGrey};
  width: 100%;
  justify-content: ${props => props.type === 'number' ? 'flex-end' : 'flex-start'};
  overflow-wrap: break-word;
  word-break: keep-all;
  white-space: pre-wrap;
`

const TableHeaderCell = styled.div`
  width: 100%;
`

export default function TablesPage() {
  const columns: ColumnConfig[] = [
    { title: 'isMin', type: 'number', isMin: true },
    { title: 'isLong', type: 'text', isLong: true },
    { title: '금액(숫자는 우측정렬)', type: 'number' },
    { title: '날짜', type: 'date' },
    { title: '설명1', type: 'text' },
    { title: '설명2', type: 'text' },
  ];

  const rowsData: RowData[][] = [
    [
      { type: 'number', value: '1' },
      { type: 'text', value: '일반 텍스트 (isLong: true인 경우 1.5배 너비로 지정)' },
      { type: 'number', value: '1,000,000,000' },
      { type: 'date', value: '2025-02-10' },
      { type: 'text', value: '일반 텍스트' },
      { type: 'text', value: '일반 텍스트' },
    ],
    [
      { type: 'number', value: 'isMin:' },
      { type: 'text', value: 'isMin: true인 경우 최소 폭으로 지정' },
      { type: 'number', value: '2,500,000,000' },
      { type: 'date', value: '2025-03-15' },
      { type: 'text', value: '설명 텍스트' },
      { type: 'text', value: '추가 설명' },
    ],
    [
      { type: 'number', value: 'true' },
      { type: 'text', value: '세 번째 항목' },
      { type: 'number', value: '500,000,000' },
      { type: 'date', value: '2025-04-20' },
      { type: 'text', value: '세 번째 설명' },
      { type: 'text', value: '마지막 설명' },
    ],
  ];

  const gridTemplate = getGridTemplateColumns(columns);

  return (
    <Container>
      <Title>테이블</Title>
      
      <Section>
        <SectionInner>
          <HeaderContainer>
            <SectionTitle className="h6">테이블 기본</SectionTitle>
          </HeaderContainer>

          <Table>
            <TableHeader $gridTemplate={gridTemplate}>
              {columns.map((column, index) => (
                <TableHeaderCell key={index}>
                  {column.title}
                </TableHeaderCell>
              ))}
            </TableHeader>
            
            {rowsData.map((rowData, rowIndex) => (
              <TableRow key={rowIndex} $gridTemplate={gridTemplate}>
                {rowData.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} type={cell.type}>
                    {cell.value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </Table>
        </SectionInner>
      </Section>
    </Container>
  )
} 