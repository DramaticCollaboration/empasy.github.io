# 상세 명세: SyncCMS Real-time Analytics Chart Drawing

SyncCMS의 내장된 트래픽 분석 기능과 마케팅 성과 대시보드를 역동적인 차트 애니메이션으로 시각화합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Insightful Data"**
*   **상징성**: 콘텐츠 운영의 결과(PV, 유입 등)를 실시간으로 파악하여 마케팅 전략에 즉각 반영할 수 있는 데이터 기반 CMS의 강점 부각.
*   **사용처**: SyncCMS 페이지 'SEO & Analytics' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 대시보드 프레임 (Dashboard Frame)
*   **디자인**: 깔끔한 화이트 배경의 위젯 카드 레이아웃.
*   **구성**: '방문자 수(PV)', '유입 경로(Referer)', '기기별 접속 비중'.

### B. 라인 차트 (Line Chart - PV Trend)
*   **디자인**: X축(시간), Y축(방문자 수)으로 구성된 꺾은선 그래프.
*   **연출**: 스크롤 진입 시 왼쪽에서 오른쪽으로 선이 부드럽게 그려짐(Stroke dash array animation).

### C. 파이 차트 (Pie Chart - Channel Distribution)
*   **디자인**: 도넛 형태의 파이 차트. 'Google', 'Naver', 'Direct' 영역으로 구분.
*   **연출**: 0도에서 360도까지 영역이 차오르는 애니메이션.

### D. 데이터 레이더 (SEO Radar)
*   **디자인**: 거미줄 모양의 레이더망.
*   **연출**: 중앙에서 밖으로 파동이 퍼져나가는 효과. 주변에 'Google Bot', 'Naver Bot' 아이콘이 핑퐁 하듯 데이터를 가져가는 모션.

## 3. 인터랙션 시나리오 (Interaction)

### A. 스크롤 트리거 애니메이션 (Scroll-triggered Draw)
1. 사용자가 페이지를 내리다가 차트 영역에 도달하면 애니메이션 시작.
2. PV 라인 차트가 물 흐르듯 그려지며, 특정 고점(Peak) 위치에서 풍선 툴팁("Traffic Peak!") 노출.
3. 파이 차트의 각 조각이 순차적으로 나타나며 마케팅 유입 경로 분석 결과를 보여줌.

### B. 숫자 카운팅 (Number Ticker)
1. 차트 상단의 주요 지표 수치(예: 8,500 PV)가 0부터 목표치까지 빠르게 올라가는 카운팅 효과 적용.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Chart Library**: `Recharts` 또는 `Chart.js` (React wrapper)
    - **Animation**: `framer-motion` (Layout transition) + `react-countup` (Numbers)
    - **SVG Path**: `stroke-dashoffset` (Line drawing effect)
*   **색상 가이드**:
    - **PV Line**: `#00D1B2` (Empasy Mint)
    - **Referer Colors**: `#3B82F6` (Blue), `#F59E0B` (Amber), `#10B981` (Emerald)
    - **Background**: `#F8FAFC` (Slate 50)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Chart | Visitors | 방문자 수 | Visitors | 訪問者数 |
| Chart | Sources | 유입 경로 | Traffic Sources | 流入経路 |
| Status | Peak | 트래픽 급증! | Traffic Peak! | アクセス急増！ |
| Status | SEO | 검색 엔진 최적화 | SEO Optimized | SEO最適化 |

## 6. 기대 효과
*   **비즈니스 가치 전달**: 단순한 관리 도구를 넘어 마케팅 성과를 추적하고 개선할 수 있는 플랫폼임을 인식시킴.
*   **시각적 역동성**: 정적인 데이터 수치를 생동감 넘치는 애니메이션으로 표현하여 사이트 전체의 세련미 향상.
