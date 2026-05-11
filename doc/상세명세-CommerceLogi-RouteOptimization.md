# 상세 명세: AI Logistics Hub Route Optimization Toggle

복잡하게 얽힌 배송 경로를 AI 알고리즘을 통해 최적의 최단 거리로 재구성하는 과정을 시각적으로 극명하게 대비시켜 보여줍니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Chaos to Order"**
*   **상징성**: 비효율적인 기존 물류 동선을 AI가 어떻게 지능적으로 분석하고 최적화하여 비용과 시간을 절감하는지 직관적으로 증명.
*   **사용처**: CommerceLogi 페이지 'AI Logistics Hub' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 배송 맵 (Delivery Map)
*   **디자인**: 다크 모드 기반의 도시 도로망 맵. 여러 개의 '배송지(Node)'와 '물류 센터(Hub)'가 점으로 표시됨.

### B. AS-IS 경로 (Tangled Lines)
*   **디자인**: 여러 대의 트럭이 서로 겹치고 멀리 돌아가는 복잡하고 어지러운 붉은색 실선들.
*   **연출**: 선들이 서로 엉켜있어 한눈에 봐도 비효율적임을 시각화.

### C. TO-BE 경로 (Optimized Lines)
*   **디자인**: 겹침 없이 각 거점을 최단 거리로 잇는 깔끔한 민트색 직선/곡선들.
*   **연출**: AI 최적화 실행 시 나타나는 결과물.

### D. 최적화 토글 버튼 (Optimization Toggle)
*   **디자인**: 화면 중앙 하단에 위치한 "AI OPTIMIZE" 스위치 버튼.

## 3. 인터랙션 시나리오 (Interaction)

### A. AI 최적화 실행 (The Transformation)
1. 초기 상태에서는 붉고 복잡하게 꼬인 AS-IS 경로가 보임.
2. 사용자가 [AI OPTIMIZE] 버튼을 클릭함.
3. 화면 전체를 가로지르는 수평 스캔 레이저(Scanning Laser)가 위에서 아래로 빠르게 지나감.
4. 레이저가 지나간 자리에 붉은 선들이 사라지고, 민트색의 깔끔한 TO-BE 경로가 마법처럼 나타남.
5. 트럭 아이콘들이 이제 최적화된 경로를 따라 막힘없이 빠르게 이동하기 시작함.

### B. 수치 팝업 (Result Stats)
1. 최적화 완료 즉시 우측 상단에 "Delivery Time: -22min", "Distance: -18%" 알림창이 나타나며 성과를 수치로 확인시켜줌.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Map Rendering**: `SVG` 또는 `Canvas API` (Line drawing)
    - **Animation**: `framer-motion` (Path morphing or Clip-path transition)
    - **Effect**: `CSS Linear-gradient` (Scanner effect)
*   **색상 가이드**:
    - **Map Base**: `#0F172A` (Slate 900)
    - **AS-IS Line**: `#EF4444` (Red 500)
    - **TO-BE Line**: `#00D1B2` (Empasy Mint)
    - **Scanner**: `rgba(0, 209, 178, 0.5)`

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Action | Optimize | AI 최적화 실행 | AI Optimize | AI最適化実行 |
| Result | Time | 배송 시간 단축 | Time Saved | 配送時間短축 |
| Result | Distance | 이동 거리 감소 | Distance Reduced | 移動距離減少 |
| Status | Analyzing | 경로 분석 중... | Analyzing... | 経路分析中... |

## 6. 기대 효과
*   **강렬한 대비 효과**: '꼬인 선'과 '펴진 선'의 시각적 대비를 통해 AI 도입의 필요성을 뇌리에 강력하게 각인.
*   **신뢰도 기반의 수치 제시**: 애니메이션 직후 구체적인 절감 수치를 노출하여 기술적 신뢰도 확보.
