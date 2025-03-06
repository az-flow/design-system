# Design System

디자인 시스템 컴포넌트 라이브러리 프로젝트입니다. Next.js 기반으로 구현되었으며, Styled Components를 활용한 컴포넌트를 제공합니다.

## 시작하기

개발 서버를 실행합니다:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)로 접속하여 결과를 확인할 수 있습니다.

## 디자인 시스템 구조

### 토큰 시스템

디자인 토큰들은 `src/styles` 디렉토리에 정의되어 있습니다:

- `colors.ts`: 색상 시스템 정의
- `typography.ts`: 타이포그래피 시스템 정의

### 컴포넌트 라이브러리

재사용 가능한 UI 컴포넌트는 `src/components/ui` 디렉토리에 정의되어 있습니다:

- `Button`: 버튼 컴포넌트
  - 다양한 타입, 크기, 색상을 지원합니다.
- `Fields`: 양식 필드 컴포넌트
  - 세로 및 가로 배치를 지원합니다.
- `Typography`: 타이포그래피 컴포넌트
  - h1-h6, body, caption 등 다양한 텍스트 스타일을 지원합니다.
- `Section`: 섹션/카드 컴포넌트
  - 기본 섹션, 접히는 섹션, 클릭 가능한 섹션 등을 제공합니다.
  - 그리드 레이아웃 지원

### 글로벌 스타일

글로벌 스타일은 `src/components/GlobalStyle.tsx`에 정의되어 있으며, 디자인 토큰을 CSS 변수로 변환하여 전체 앱에서 사용할 수 있게 합니다.

## 사용 방법

### 버튼 사용 예

```tsx
import { Button } from '@/components/ui';

// 기본 버튼
<Button>기본 버튼</Button>

// 색상, 타입, 크기 지정
<Button $color="primary" $type="filled" $size="large">큰 버튼</Button>
<Button $color="alert" $type="outline" $size="small">작은 경고 버튼</Button>
```

### 타이포그래피 사용 예

```tsx
import { Typography } from '@/components/ui';

<Typography variant="h1">제목</Typography>
<Typography variant="body1">본문 텍스트입니다.</Typography>
<Typography variant="caption1">캡션 텍스트입니다.</Typography>
```

### 폼 필드 사용 예

```tsx
import { FormField } from '@/components/ui';

<FormField 
  label="이름" 
  value="홍길동" 
  orientation="vertical"
/>

<FormField 
  label="이메일" 
  value="example@email.com" 
  orientation="horizontal"
  tooltip="이메일 주소를 입력하세요"
/>
```

### 섹션 사용 예

```tsx
import { Section, SectionInner, SectionTitle, SectionContent, CollapsibleSection } from '@/components/ui';

// 기본 섹션
<Section>
  <SectionInner>
    <SectionTitle>섹션 제목</SectionTitle>
    <SectionContent>
      섹션 내용입니다.
    </SectionContent>
  </SectionInner>
</Section>

// 접히는 섹션
<CollapsibleSection>
  <SectionTitle>접히는 섹션</SectionTitle>
  <SectionContent>
    접을 수 있는 내용입니다.
  </SectionContent>
</CollapsibleSection>
```

## 컴포넌트 확장

새로운 UI 컴포넌트를 추가하려면 `src/components/ui` 디렉토리에 새 폴더를 생성하고 컴포넌트 파일 및 index.ts를 추가합니다.

예시:
```
src/components/ui/NewComponent/
  ├── NewComponent.tsx
  └── index.ts
```

그 후 `src/components/ui/index.ts`에 새 컴포넌트를 추가하여 내보냅니다.