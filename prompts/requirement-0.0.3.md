# 주요 활동 카드 디자인 요구 사항

- AI는 {prompt}에 자연어로 작성하여라.

## 분위기 정의
첫 번째 이미지의 자연스럽고 따뜻한 감성과 두 번째 이미지의 현대적이고 세련된 미니멀리즘을 조화시킨 분위기를 연출한다. 활동적이면서도 차분하고, 친근하면서도 전문적인 느낌을 동시에 표현한다. 사용자가 편안함을 느끼면서도 동기부여를 받을 수 있는 균형잡힌 톤앤매너를 유지한다.

## 질감 정의
첫 번째 이미지의 자연스러운 그림자와 깊이감을 활용하되, 두 번째 이미지의 매끄럽고 깔끔한 표면 처리를 적용한다. 카드 표면은 부드러운 매트 텍스처로 처리하고, 미묘한 그라데이션과 소프트 섀도우를 통해 입체감을 표현한다. 호버 시에는 약간의 광택감이 나타나도록 하여 상호작용의 피드백을 제공한다.

## 타이포그래피 시스템 정의
**폰트 패밀리**: Inter, SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
**타입 스케일**:
- 헤딩 (H1): 24px/1.2 (데스크톱), 20px/1.25 (모바일)
- 서브헤딩 (H2): 18px/1.3 (데스크톱), 16px/1.35 (모바일)
- 본문 (Body): 14px/1.5 (데스크톱), 14px/1.6 (모바일)
- 캡션: 12px/1.4

**폰트 웨이트**:
- 제목: 600 (Semibold)
- 서브제목: 500 (Medium)
- 본문: 400 (Regular)
- 캡션: 400 (Regular)

**글자 간격 (Letter-spacing)**:
- 제목: -0.01em
- 서브제목: -0.005em
- 본문: 0em
- 캡션: 0.01em

## 정렬 정의
두 번째 이미지의 건축적 구조를 참고하여 명확한 그리드 시스템을 적용한다. 카드 내 요소들은 중앙 정렬을 기본으로 하되, 좌우 대칭의 균형감을 유지한다. 아이콘, 제목, 설명, 내용이 수직적으로 일정한 리듬감을 가지도록 정렬하고, 각 섹션 간의 시각적 구분이 명확하도록 배치한다. 전체적으로 질서정연하면서도 답답하지 않은 여백의 미학을 추구한다.

## 스페이싱 시스템 정의
**기본 단위**: 4px 기반 8px 그리드 시스템
**카드 내부 패딩**:
- 데스크톱: 32px (8 units)
- 태블릿: 24px (6 units)
- 모바일: 20px (5 units)

**요소 간 마진**:
- 아이콘 ↔ 제목: 16px (4 units)
- 제목 ↔ 설명: 8px (2 units)
- 설명 ↔ 본문: 12px (3 units)
- 카드 간 간격: 24px (6 units)

**아이콘 영역**:
- 아이콘 컨테이너: 64px × 64px
- 아이콘 크기: 32px × 32px
- 아이콘 패딩: 16px

## 형태 및 비율 정의
**카드 치수**:
- 데스크톱: 320px × 280px (비율 8:7)
- 태블릿: 280px × 245px
- 모바일: 100% width × auto height

**모서리 반경**:
- 카드: 16px (4 units)
- 아이콘 배경: 50% (완전한 원형)
- 버튼/인터랙티브 요소: 8px

**보더 및 구분선**:
- 카드 보더: 1px solid rgba(0,0,0,0.08)
- 호버 시 보더: 1px solid rgba(78,205,196,0.3)
- 구분선 (필요시): 1px solid rgba(0,0,0,0.06)

**그림자 시스템**:
- 기본: 0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)
- 호버: 0 8px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08)
- 포커스: 0 0 0 3px rgba(78,205,196,0.2)

## 레이어 정의
```
3층 헤더 층
2층 컨텐츠 층
1층 백그라운드 층
```
첫 번째 이미지의 자연스러운 깊이감을 현대적으로 재해석하여 레이어 구조를 설계한다. 백그라운드 층은 미묘한 그라데이션과 소프트 섀도우로 기본 깊이를 형성하고, 컨텐츠 층은 실제 정보가 담기는 주요 영역으로 명확한 가독성을 확보한다. 헤더 층은 아이콘과 제목이 위치하는 최상위 레이어로, 시각적 포커스를 집중시키는 역할을 한다. 각 레이어 간에는 미묘한 elevation 차이를 두어 자연스러운 입체감을 연출한다.

## 백그라운드 정의
두 번째 이미지의 핑크-터키석 색상 조합에서 영감을 받아 부드럽고 세련된 배경색을 적용한다. 기본 배경은 순수한 흰색이나 아주 연한 크림색을 사용하여 깔끔함을 유지하되, 호버 상태에서는 미묘한 핑크 또는 라벤더 톤의 그라데이션이 나타나도록 한다. 카드의 그림자는 첫 번째 이미지의 자연스러운 그림자를 참고하여 부드럽고 확산된 형태로 적용하며, 색상은 차가운 회색보다는 따뜻한 톤의 그림자를 사용한다. 전체적으로 밝고 경쾌한 느낌을 유지하면서도 고급스러운 질감을 표현한다.

## 색상 시스템 정의
**Primary Colors**:
- Pure White: #FFFFFF
- Off White: #FEFEFE
- Card Background: #FDFDFD

**Secondary Colors**:
- Soft Pink: #F8E8E8 (Background hover state)
- Light Lavender: #F0F0F8 (Alternative background)
- Warm Gray: #F8F9FA (Section dividers)

**Accent Colors**:
- Turquoise: #4ECDC4 (Primary accent, interactive elements)
- Coral Pink: #FF6B6B (Secondary accent, notifications)
- Success Green: #2ECC71 (Success states)
- Warning Orange: #F39C12 (Warning states)

**Text Colors**:
- Primary Text: #2C3E50 (제목, 중요 텍스트)
- Secondary Text: #7F8C8D (설명, 보조 텍스트)
- Muted Text: #BDC3C7 (캡션, 비활성 텍스트)
- Link Text: #4ECDC4 (링크, 인터랙티브 텍스트)

**Shadow & Border Colors**:
- Soft Shadow: rgba(44, 62, 80, 0.08)
- Medium Shadow: rgba(44, 62, 80, 0.12)
- Border Light: rgba(0, 0, 0, 0.06)
- Border Medium: rgba(0, 0, 0, 0.12)

**색상 대비비**: WCAG AA 기준 4.5:1 이상 준수

## 인터랙션 & 애니메이션 정의
**마이크로 인터랙션**:
- 호버: transform: translateY(-4px) + shadow elevation 증가
- 활성화: transform: scale(0.98) → scale(1.02) → scale(1)
- 포커스: 3px 두께의 turquoise 아웃라인 + 2px offset
- 로딩: 펄스 애니메이션 (opacity 0.6 ↔ 1.0, 1.5초 주기)

**트랜지션 타이밍**:
- 기본: 200ms cubic-bezier(0.4, 0, 0.2, 1)
- 호버: 150ms cubic-bezier(0.4, 0, 0.2, 1)
- 클릭: 100ms cubic-bezier(0.4, 0, 0.2, 1)
- 포커스: 200ms ease-out

**접근성 고려사항**:
- 키보드 네비게이션 지원 (Tab, Enter, Space)
- 스크린 리더 호환성 (ARIA labels, roles)
- 고대비 모드 지원
- 모션 감소 설정 존중 (prefers-reduced-motion)
- 최소 터치 영역: 44px × 44px (모바일)

## 반응형 디자인 가이드라인
**브레이크포인트**:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

**카드 레이아웃**:
- Mobile: 1열, full-width - 16px margin
- Tablet: 2열, 24px gap
- Desktop: 3-4열, 32px gap

**적응형 요소**:
- 아이콘 크기: Mobile 28px, Tablet/Desktop 32px
- 패딩: Mobile 20px, Tablet 24px, Desktop 32px
- 폰트 크기: 위의 타이포그래피 시스템 참조
- 터치 영역: Mobile에서 최소 44px 확보

## 브랜드 일관성 가이드라인
**톤앤매너**: 친근하면서도 전문적, 활동적이면서도 차분함
**시각적 언어**: 기하학적 정확성 + 유기적 부드러움
**컬러 사용 원칙**: 
- 주 색상은 절제적으로 사용
- 액센트 색상은 중요한 인터랙션에만 적용
- 그라데이션은 미묘하게, 과도한 사용 금지

## 품질 보증 & 테스트 가이드라인
**크로스 브라우저 지원**: Chrome, Firefox, Safari, Edge (최신 2버전)
**성능 목표**: 
- 첫 페인트: 1초 이내
- 인터랙션 응답: 100ms 이내
- 애니메이션: 60fps 유지

**사용성 테스트 체크리스트**:
- 카드 내용의 스캔 가능성 (F-pattern 읽기 고려)
- 인터랙션 피드백의 명확성
- 로딩 상태의 사용자 경험
- 오류 상태 처리 및 피드백
