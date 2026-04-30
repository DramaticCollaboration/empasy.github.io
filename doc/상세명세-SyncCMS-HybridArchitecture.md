# 상세 명세: SyncCMS Hybrid Architecture Template Puzzle

페이지 조각(Fragment)과 데이터를 결합하여 완성된 페이지를 만드는 SyncCMS의 하이브리드 렌더링 아키텍처를 시각적으로 설명합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Modular Assembly"**
*   **상징성**: 복잡한 웹 페이지를 작은 조각들로 나누어 관리하면서도, 서버 사이드 렌더링(SSR)의 속도와 유연성을 동시에 확보하는 아키텍처의 강점 부각.
*   **사용처**: SyncCMS 페이지 'Hybrid Architecture' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 퍼즐 조각 (Puzzle Pieces)
*   **조각 1 (Blue)**: 'General Page Layout' (전체 레이아웃)
*   **조각 2 (Mint)**: 'Content Fragment' (페이지 조각/컴포넌트)
*   **조각 3 (Yellow)**: 'Dynamic Data' (Freemarker 바인딩 데이터)
*   **디자인**: 3D 입체감이 느껴지는 퍼즐 조각 형태. 각 조각 위에는 관련 코드 스니펫(예: `<#list>`, `<div>`)이 반투명하게 각인됨.

### B. 조립 가이드 (Assembly Guide)
*   **디자인**: 퍼즐들이 모여서 완성될 최종 결과물인 'Web Page'의 투명한 실루엣 프레임.

### C. 속도 게이지 (Speed Gauge)
*   **디자인**: 하단에 위치한 "Rendering Speed" 게이지 바.
*   **연출**: 조립이 완료될수록 빨간색에서 녹색으로 변하며 수치가 올라감.

## 3. 인터랙션 시나리오 (Interaction)

### A. 퍼즐 조립 모션 (Sequential Assembly)
1. 스크롤 진입 시, 화면 사방에서 'Layout', 'Fragment', 'Data' 퍼즐 조각들이 중앙으로 천천히 날아옴.
2. 각 조각이 중앙 실루엣에 '딸깍' 소리가 나는 듯한(Visual snap) 연출과 함께 결합됨.
3. 세 조각이 모두 합쳐지는 순간, 퍼즐 경계선이 사라지며 세련된 웹사이트 메인 화면으로 변신.
4. 동시에 배경에 Freemarker 템플릿 코드가 텍스트 스트리밍처럼 빠르게 위로 올라가며 '데이터 바인딩 완료'를 시각화.

### B. 하이라이트 효과 (Highlight)
1. 완성된 페이지 위에서 특정 영역(Fragment 부분)이 반짝이며, 해당 영역을 생성한 퍼즐 조각이 무엇인지 다시 한번 강조.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Animation**: `framer-motion` (Drag, Snap, Scale transitions)
    - **Effect**: `CSS Mix-blend-mode` (Code streaming background)
*   **색상 가이드**:
    - **Page Layout**: `#3B82F6` (Blue 500)
    - **Fragment**: `#00D1B2` (Empasy Mint)
    - **Data**: `#F59E0B` (Amber 500)
    - **Speed Gauge**: `#10B981` (Emerald 500)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Piece | Layout | 페이지 레이아웃 | Page Layout | ページレイアウト |
| Piece | Fragment | 페이지 조각 | Content Fragment | ページフラグメント |
| Piece | Data | 추천위 데이터 | Dynamic Data | ダイナミックデータ |
| Status | Speed | 렌더링 속도 단축 | Speed Boost | レンダリング速度短縮 |

## 6. 기대 효과
*   **기술 이해도 증진**: CMS의 내부 렌더링 원리를 비유를 통해 고객이 쉽게 이해하도록 도움.
*   **성능 우수성 부각**: 모듈화된 관리가 성능 저하가 아닌, 오히려 최적화의 비결임을 전달.
