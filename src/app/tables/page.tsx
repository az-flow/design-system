'use client'

import styled from 'styled-components'
import { colorSystem } from '@/components/GlobalStyle'
import { Section, SectionInner, SectionTitle } from '@/app/sections/page'
import { useState, useCallback } from 'react'
import { MdEditSquare } from 'react-icons/md'

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
  overflow: hidden;
`

const List = styled.div`
  width: 100%;
`

const ListHeader = styled.div<{ $gridTemplate: string }>`
  display: grid;
  grid-template-columns: ${props => props.$gridTemplate};
  background: #E3E4E7;
  border-radius: 7px;

  > div {
    padding: 12px 16px;
    font-weight: 500;
    font-size: 15px;
  }
`

const ListRow = styled.div<{ $gridTemplate: string; $checked?: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.$gridTemplate};
  border-bottom: 1px solid ${colorSystem.neutral.borderGrey};
  background: ${props => props.$checked ? colorSystem.background.grey : 'transparent'};
  transition: background-color 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  > div {
    padding: 15px 15px;
    display: flex;
    align-items: flex-start;
  }
`

const ListCell = styled.div<{ type: 'text' | 'number' | 'date' }>`
  font-size: 16px;
  color: ${colorSystem.neutral.textGrey};
  width: 100%;
  justify-content: ${props => props.type === 'number' ? 'flex-end' : 'flex-start'};
  overflow-wrap: break-word;
  word-break: keep-all;
  white-space: pre-wrap;
`

interface ColumnConfig {
  title: string;
  isMin?: boolean;
  isLong?: boolean;
  type: 'text' | 'number' | 'date';
  editable?: boolean;
  onEdit?: () => void;
}

interface RowData {
  type: 'text' | 'number' | 'date';
  value: string;
  editable?: boolean;
  onEdit?: () => void;
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
    padding: 12px 16px;
    font-weight: 500;
    font-size: 15px;
    position: relative;
    border-right: 1px solid ${colorSystem.neutral.borderGrey};
    
    &:last-child {
      border-right: none;
    }
  }
`

const TableRow = styled.div<{ $gridTemplate: string; $hovered?: boolean; $clickable?: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.$gridTemplate};
  border-bottom: 1px solid ${colorSystem.neutral.borderGrey};
  background: ${props => props.$hovered ? colorSystem.background.grey : 'transparent'};
  transition: background-color 0.2s ease;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  
  &:last-child {
    border-bottom: none;
  }
  
  > div {
    padding: 15px 15px;
    border-right: 1px solid ${colorSystem.neutral.borderGrey};
    display: flex;
    align-items: flex-start;
    
    &:last-child {
      border-right: none;
    }
  }
`

const TableCell = styled.div<{ type: 'text' | 'number' | 'date'; $hovered?: boolean; $clickable?: boolean }>`
  font-size: 16px;
  color: ${colorSystem.neutral.textGrey};
  width: 100%;
  justify-content: ${props => props.type === 'number' ? 'flex-end' : 'flex-start'};
  overflow-wrap: break-word;
  word-break: keep-all;
  white-space: pre-wrap;
  background: ${props => props.$hovered ? colorSystem.background.grey : 'transparent'};
  transition: background-color 0.2s ease;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
`

const TableHeaderCell = styled.div<{ $hovered?: boolean; $clickable?: boolean }>`
  position: relative;
  background: ${props => props.$hovered ? colorSystem.background.grey : '#E3E4E7'};
  transition: background-color 0.2s ease;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
`

const Checkbox = styled.div<{ $checked?: boolean; $indeterminate?: boolean }>`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 0px;
  top: 0px;

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border: 1px solid ${colorSystem.neutral.borderGrey};
    border-radius: 3px;
  }

  ${props => props.$checked && `
    &:after {
      content: '';
      position: absolute;
      left: 30%;
      right: 20%;
      top: 40%;
      bottom: 35%;
      border: 1.5px solid #FFFFFF;
      transform: rotate(-45deg);
      background: ${colorSystem.brand.activeBlue};
      border-top: 0;
      border-right: 0;
    }

    &:before {
      background: ${colorSystem.brand.activeBlue};
    }
  `}

  ${props => props.$indeterminate && `
    &:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 1.5px;
      background: white;
      top: 8px;
      left: 5px;
    }

    &:before {
      background: ${colorSystem.brand.activeBlue};
    }
  `}
`

const CheckboxWrapper = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;
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

const ClickableListRow = styled(ListRow)`
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${colorSystem.background.grey};
  }
`

const EditIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${colorSystem.neutral.textGrey};
  border-radius: 4px;
  margin-left: 8px;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`

const CellContent = styled.div<{ type: 'text' | 'number' | 'date' }>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${props => props.type === 'number' ? 'flex-end' : 'flex-start'};

  ${EditIcon} {
    margin-left: ${props => props.type === 'number' ? '0' : '8px'};
    margin-right: ${props => props.type === 'number' ? '8px' : '0'};
  }
`

export default function TablesPage() {
  const [checkedRows, setCheckedRows] = useState<boolean[]>([]);
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  
  const baseColumns: ColumnConfig[] = [
    { title: 'isMin', type: 'number', isMin: true },
    { title: 'isLong', type: 'text', isLong: true },
    { title: '금액(숫자는 우측정렬)', type: 'number' },
    { title: '날짜', type: 'date' },
    { title: '설명1', type: 'text' },
  ];

  const editableColumns: ColumnConfig[] = [
    { title: 'isMin', type: 'number', isMin: true, editable: true, onEdit: () => console.log('Edit isMin') },
    { title: 'isLong', type: 'text', isLong: true, editable: true, onEdit: () => console.log('Edit isLong') },
    { title: '금액(숫자는 우측정렬)', type: 'number', editable: true, onEdit: () => console.log('Edit 금액') },
    { title: '날짜', type: 'date', editable: true, onEdit: () => console.log('Edit 날짜') },
    { title: '설명1', type: 'text', editable: true, onEdit: () => console.log('Edit 설명') },
  ];

  const rowEditableColumns: ColumnConfig[] = [
    { title: 'isMin', type: 'number', isMin: true },
    { title: 'isLong', type: 'text', isLong: true },
    { title: '금액(숫자는 우측정렬)', type: 'number' },
    { title: '날짜', type: 'date' },
    { title: '설명1', type: 'text' },
  ];

  const rowEditableData: RowData[][] = [
    [
      { type: 'number', value: '1', editable: true, onEdit: () => console.log('Edit row 1') },
      { type: 'text', value: '리스트의 isLong 컬럼 (1.5배 너비)' },
      { type: 'number', value: '1,000,000,000' },
      { type: 'date', value: '2025-02-10' },
      { type: 'text', value: '설명' },
    ],
    [
      { type: 'number', value: '2', editable: true, onEdit: () => console.log('Edit row 2') },
      { type: 'text', value: '두 번째 항목' },
      { type: 'number', value: '2,500,000,000' },
      { type: 'date', value: '2025-03-15' },
      { type: 'text', value: '설명' },
    ],
    [
      { type: 'number', value: '3', editable: true, onEdit: () => console.log('Edit row 3') },
      { type: 'text', value: '세 번째 항목' },
      { type: 'number', value: '500,000,000' },
      { type: 'date', value: '2025-04-20' },
      { type: 'text', value: '설명이 길어지면 줄이 바뀌면서 height가 증가하고 위쪽 정렬로 배치' },
    ],
  ];

  const checkboxColumns: ColumnConfig[] = [
    { title: '', type: 'text', isMin: true },
    ...baseColumns.slice(1),
  ];

  const listData: RowData[][] = [
    [
      { type: 'number', value: '1' },
      { type: 'text', value: '리스트의 isLong 컬럼 (1.5배 너비)' },
      { type: 'number', value: '1,000,000,000' },
      { type: 'date', value: '2025-02-10' },
      { type: 'text', value: '설명' },
    ],
    [
      { type: 'number', value: '2' },
      { type: 'text', value: '두 번째 항목' },
      { type: 'number', value: '2,500,000,000' },
      { type: 'date', value: '2025-03-15' },
      { type: 'text', value: '설명' },
    ],
    [
      { type: 'number', value: '3' },
      { type: 'text', value: '세 번째 항목' },
      { type: 'number', value: '500,000,000' },
      { type: 'date', value: '2025-04-20' },
      { type: 'text', value: '설명이 길어지면 줄이 바뀌면서 height가 증가하고 위쪽 정렬로 배치' },
    ],
  ];

  const baseGridTemplate = getGridTemplateColumns(baseColumns);
  const editableGridTemplate = getGridTemplateColumns(editableColumns);
  const checkboxGridTemplate = getGridTemplateColumns(checkboxColumns);
  const rowEditableGridTemplate = getGridTemplateColumns(rowEditableColumns);

  const handleHeaderCheckboxClick = useCallback(() => {
    const allChecked = checkedRows.length === listData.length && checkedRows.every(Boolean);
    setCheckedRows(new Array(listData.length).fill(!allChecked));
  }, [checkedRows, listData.length]);

  const handleRowCheckboxClick = useCallback((index: number) => {
    setCheckedRows(prev => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  }, []);

  const isAllChecked = checkedRows.length === listData.length && checkedRows.every(Boolean);
  const isIndeterminate = checkedRows.some(Boolean) && !isAllChecked;

  const clickableColumns: ColumnConfig[] = [
    ...baseColumns.slice(0, -1),
    { title: '', type: 'text', isMin: true },
  ];

  const clickableGridTemplate = getGridTemplateColumns(clickableColumns);

  const handleRowClick = useCallback((index: number) => {
    console.log(`Clicked row ${index}`);
  }, []);

  return (
    <Container>
      <Title>테이블과 리스트</Title>
      
      <Section>
        <SectionInner>
          <HeaderContainer>
            <SectionTitle className="h6">테이블 기본</SectionTitle>
          </HeaderContainer>

          <Table>
            <TableHeader $gridTemplate={baseGridTemplate}>
              {baseColumns.map((column, index) => (
                <TableHeaderCell key={index}>
                  {column.title}
                </TableHeaderCell>
              ))}
            </TableHeader>
            
            {listData.map((rowData, rowIndex) => (
              <TableRow key={rowIndex} $gridTemplate={baseGridTemplate}>
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

      <Section>
        <SectionInner>
          <HeaderContainer>
            <SectionTitle className="h6">테이블 수정가능 (컬럼)</SectionTitle>
          </HeaderContainer>

          <Table>
            <TableHeader $gridTemplate={editableGridTemplate}>
              {editableColumns.map((column, index) => (
                <TableHeaderCell 
                  key={index} 
                  $hovered={hoveredColumn === index}
                  $clickable={column.editable}
                  onMouseEnter={() => setHoveredColumn(index)}
                  onMouseLeave={() => setHoveredColumn(null)}
                  onClick={column.editable ? column.onEdit : undefined}
                >
                  <HeaderContent>
                    {column.title}
                    {column.editable && (
                      <EditIcon onClick={(e) => {
                        e.stopPropagation();
                        column.onEdit?.();
                      }}>
                        <MdEditSquare size={16} />
                      </EditIcon>
                    )}
                  </HeaderContent>
                </TableHeaderCell>
              ))}
            </TableHeader>
            
            {listData.map((rowData, rowIndex) => (
              <TableRow 
                key={rowIndex} 
                $gridTemplate={editableGridTemplate}
                $hovered={false}
              >
                {rowData.map((cell, cellIndex) => (
                  <TableCell 
                    key={cellIndex} 
                    type={cell.type}
                    $hovered={hoveredColumn === cellIndex}
                    $clickable={editableColumns[cellIndex].editable}
                    onMouseEnter={() => setHoveredColumn(cellIndex)}
                    onMouseLeave={() => setHoveredColumn(null)}
                    onClick={editableColumns[cellIndex].editable ? editableColumns[cellIndex].onEdit : undefined}
                  >
                    <CellContent type={cell.type}>
                      {cell.value}
                    </CellContent>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </Table>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <HeaderContainer>
            <SectionTitle className="h6">테이블 수정가능 (행)</SectionTitle>
          </HeaderContainer>

          <Table>
            <TableHeader $gridTemplate={rowEditableGridTemplate}>
              {rowEditableColumns.map((column, index) => (
                <TableHeaderCell key={index}>
                  {column.title}
                </TableHeaderCell>
              ))}
            </TableHeader>
            
            {rowEditableData.map((rowData, rowIndex) => (
              <TableRow 
                key={rowIndex} 
                $gridTemplate={rowEditableGridTemplate}
                $hovered={hoveredRow === rowIndex}
                $clickable={rowData.some(cell => cell.editable)}
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => {
                  const editableCell = rowData.find(cell => cell.editable);
                  editableCell?.onEdit?.();
                }}
              >
                {rowData.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} type={cell.type}>
                    <CellContent type={cell.type}>
                      {cell.editable && cell.type === 'number' && (
                        <EditIcon onClick={(e) => {
                          e.stopPropagation();
                          cell.onEdit?.();
                        }}>
                          <MdEditSquare size={16} />
                        </EditIcon>
                      )}
                      {cell.value}
                      {cell.editable && cell.type !== 'number' && (
                        <EditIcon onClick={(e) => {
                          e.stopPropagation();
                          cell.onEdit?.();
                        }}>
                          <MdEditSquare size={16} />
                        </EditIcon>
                      )}
                    </CellContent>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </Table>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <HeaderContainer>
            <SectionTitle className="h6">리스트 기본</SectionTitle>
          </HeaderContainer>

          <List>
            <ListHeader $gridTemplate={baseGridTemplate}>
              {baseColumns.map((column: ColumnConfig, index: number) => (
                <div key={index}>{column.title}</div>
              ))}
            </ListHeader>
            
            {listData.map((rowData, rowIndex) => (
              <ListRow key={rowIndex} $gridTemplate={baseGridTemplate}>
                {rowData.map((cell, cellIndex) => (
                  <ListCell key={cellIndex} type={cell.type}>
                    {cell.value}
                  </ListCell>
                ))}
              </ListRow>
            ))}
          </List>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <HeaderContainer>
            <SectionTitle className="h6">리스트 체크박스</SectionTitle>
          </HeaderContainer>

          <List>
            <ListHeader $gridTemplate={checkboxGridTemplate}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CheckboxWrapper onClick={handleHeaderCheckboxClick}>
                  <Checkbox
                    $checked={isAllChecked}
                    $indeterminate={isIndeterminate}
                  />
                </CheckboxWrapper>
              </div>
              {checkboxColumns.slice(1).map((column, index) => (
                <div key={index}>{column.title}</div>
              ))}
            </ListHeader>
            
            {listData.map((rowData, rowIndex) => (
              <ListRow 
                key={rowIndex} 
                $gridTemplate={checkboxGridTemplate}
                $checked={checkedRows[rowIndex]}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <CheckboxWrapper onClick={() => handleRowCheckboxClick(rowIndex)}>
                    <Checkbox
                      $checked={checkedRows[rowIndex]}
                    />
                  </CheckboxWrapper>
                </div>
                {rowData.slice(1).map((cell, cellIndex) => (
                  <ListCell key={cellIndex} type={cell.type}>
                    {cell.value}
                  </ListCell>
                ))}
              </ListRow>
            ))}
          </List>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <HeaderContainer>
            <SectionTitle className="h6">리스트 Clickable</SectionTitle>
          </HeaderContainer>

          <List>
            <ListHeader $gridTemplate={clickableGridTemplate}>
              {clickableColumns.map((column, index) => (
                <div key={index}>{column.title}</div>
              ))}
            </ListHeader>
            
            {listData.map((rowData, rowIndex) => (
              <ClickableListRow 
                key={rowIndex} 
                $gridTemplate={clickableGridTemplate}
                onClick={() => handleRowClick(rowIndex)}
              >
                {rowData.slice(0, -1).map((cell, cellIndex) => (
                  <ListCell key={cellIndex} type={cell.type}>
                    {cell.value}
                  </ListCell>
                ))}
                <ListCell type="text" style={{ justifyContent: 'center' }}>
                  <ChevronIcon 
                    direction="right"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke={colorSystem.neutral.textGrey}
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </ChevronIcon>
                </ListCell>
              </ClickableListRow>
            ))}
          </List>
        </SectionInner>
      </Section>
    </Container>
  )
} 