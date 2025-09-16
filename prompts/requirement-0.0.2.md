# Tailwind CSS 공식 사이트 스타일 디자인 요구사항

## 메인 페이지
- apps/web/app/page.tsx

## 참고 사이트
- https://tailwindcss.com

## 디자인 시스템

### 색상 팔레트
- Primary: slate-900, slate-800, slate-700 (다크 그레이 톤)
- Secondary: white, gray-50, gray-100
- Accent: blue-600, blue-500 (CTA 버튼용)
- Text: gray-900, gray-800, gray-600
- Background: white, gray-50

### 타이포그래피
- Hero 제목: text-4xl, text-5xl, text-6xl (font-bold, tracking-tight)
- 섹션 제목: text-3xl, text-4xl (font-bold, tracking-tight)
- 본문: text-base, text-lg (text-gray-600)
- 작은 텍스트: text-sm (text-gray-500)

### 레이아웃
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Section 간격: py-16, py-20, py-24
- Grid 시스템: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Flexbox: flex flex-col items-center justify-center

## 특별한 디자인 요소
- 그라데이션 배경: bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
- 블러 효과: backdrop-blur-sm bg-white/95
- 카드 디자인: bg-white rounded-2xl shadow-xl p-8
- 호버 효과: hover:shadow-xl hover:-translate-y-1 transition-all duration-300
- 둥근 모서리: rounded-xl, rounded-2xl

## 섹션별 시각적 요소 (Tailwind CSS 공식 사이트 스타일)

### 섹션 헤더 디자인
- 각 섹션 제목 위에 수평선 (border-top)
- 왼쪽 상단에 해당 섹션의 대표 클래스명 표시
- 클래스명은 작은 폰트로 회색 텍스트로 표시
- 예: "주요 활동" 섹션 → "grid gap-8 md:grid-cols-3" 표시

### 시각적 코드 블록
- 각 기능 설명 옆에 실제 사용되는 클래스명을 박스로 표시
- 박스는 회색 배경에 둥근 모서리
- 클래스명은 monospace 폰트 사용
- 호버 시 배경색 변경 효과

### 인터랙티브 요소
- 클래스명을 클릭하면 해당 스타일이 적용되는 시연
- 실시간으로 스타일 변경을 보여주는 토글 기능
- 각 브레이크포인트별로 다른 레이아웃 시연

## 섹션별 클래스명 표시 예시

### Hero Section
- 클래스명: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
- 표시 위치: 섹션 제목 왼쪽 상단

### News Section
- 클래스명: "grid gap-8 md:grid-cols-2 lg:grid-cols-3"
- 표시 위치: "새소식" 제목 왼쪽 상단

### Activities Section
- 클래스명: "grid gap-8 md:grid-cols-3"
- 표시 위치: "주요 활동" 제목 왼쪽 상단
- 각 카드별 클래스명:
  - 보행권 확보: "hover:shadow-xl hover:-translate-y-1"
  - 마을만들기: "bg-white rounded-2xl shadow-lg"
  - 생활문화: "transition-all duration-300"

### Support Section
- 클래스명: "bg-gray-50 py-20"
- 표시 위치: "도시연대와 함께하세요" 제목 왼쪽 상단

## 시각적 구현 가이드

### 섹션 헤더 구조
```jsx
<div className="relative">
  <div className="absolute top-0 left-0 text-xs text-gray-500 font-mono">
    {sectionClassName}
  </div>
  <div className="border-t border-gray-200 pt-8 mt-4">
    <h2 className="text-3xl font-bold">{sectionTitle}</h2>
  </div>
</div>
```

### 클래스명 표시 박스
```jsx
<div className="inline-block bg-gray-100 rounded px-2 py-1 text-xs font-mono text-gray-700">
  {className}
</div>
```

### 인터랙티브 시연 영역
```jsx
<div className="bg-gray-50 rounded-lg p-4 border">
  <div className="text-sm text-gray-600 mb-2">클래스명: {className}</div>
  <div className={`${className}`}>
    {/* 시연 콘텐츠 */}
  </div>
</div>
```