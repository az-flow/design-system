'use client'

import styled, { css } from 'styled-components'

interface StyledProps {
  type: 'P' | 'M' | 'S'
}

const FormFieldView = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  ${(props: StyledProps) => props.type === 'P' && css`
    @media (min-width: 890px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}

  ${(props: StyledProps) => props.type === 'M' && css`
    @media (min-width: 890px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 32px;
    }
  `}

  ${(props: StyledProps) => props.type === 'S' && css`
    @media (min-width: 890px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 32px;
    }
  `}
`

const FormFieldItem = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  ${(props: StyledProps) => props.type === 'M' && css`
    @media (min-width: 890px) {
      flex: 1 1 calc(50% - 16px);
      min-width: 0;
    }
  `}

  ${(props: StyledProps) => props.type === 'S' && css`
    @media (min-width: 890px) {
      flex: 1 1 calc(33.333% - 22px);
      min-width: 0;
    }
  `}
`

export { FormFieldView, FormFieldItem } 