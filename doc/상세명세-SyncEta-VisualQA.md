# 상세 명세: SyncEta Visual Regression Magnifier Effect

육안으로 식별하기 어려운 미세한 UI 레이아웃 깨짐을 픽셀 단위로 정밀하게 잡아내는 SyncEta의 시각 검증(Visual QA) 기능을 시뮬레이션합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Pixel-Perfect Precision"**
*   **상징성**: 사람이 놓치기 쉬운 1px의 디자인 오차나 기기별 렌더링 차이를 AI가 완벽하게 검출하여 품질 완결성을 높이는 기술력 강조.
*   **사용처**: SyncEta 페이지 'Self-Healing & Visual QA' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 비교 베이스 이미지 (Base Images)
*   **디자인**: 나란히 배치된 두 개의 모바일 웹 화면 (원본 디자인 vs 현재 테스트 화면).
*   **연출**: 겉보기에는 완벽하게 동일해 보이지만, 특정 영역(예: 버튼의 여백, 텍스트 정렬)에 1px의 미세한 오차가 존재함.

### B. 인터랙티브 돋보기 (Hover Magnifier)
*   **디자인**: 마우스 커서를 따라다니는 원형의 확대경(Lens).
*   **연출**: 돋보기 내부는 원본 이미지보다 4배 이상 확대되어 픽셀 격자(Grid)가 보임.

### C. 버그 하이라이트 (Bug Highlight)
*   **디자인**: 레이아웃 깨짐이 발견된 위치에 나타나는 붉은색 점멸 테두리 또는 "Visual Bug" 라벨.

## 3. 인터랙션 시나리오 (Interaction)

### A. 돋보기 탐색 (Exploring with Lens)
1. 사용자가 이미지 위로 마우스를 가져가면 돋보기 UI가 활성화됨.
2. 마우스를 이리저리 움직이며 이미지의 구석구석을 확대해서 관찰할 수 있음.

### B. 결함 발견 및 표시 (Bug Detection)
1. 돋보기가 1px 오차가 있는 특정 영역 위로 올라가는 순간, 돋보기 안에서 해당 오차가 붉은색으로 강조(Overlay)됨.
2. 동시에 "1px Offset Detected!"라는 시스템 알림이 돋보기 옆에 팝업됨.
3. 돋보기를 떼도 해당 위치에는 작게 붉은색 마커가 남아 결함 위치임을 표시함.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Magnifier**: `CSS mask-image` 또는 `Canvas API` (Background image offset calculation)
    - **Hover Effect**: `framer-motion` (Smooth follower motion)
*   **색상 가이드**:
    - **Lens Border**: `#00D1B2` (Empasy Mint)
    - **Bug Highlight**: `#EF4444` (Red 500)
    - **Grid Line**: `rgba(255, 255, 255, 0.1)`

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| UI | Label | 시각 결함 검출 | Visual Bug Found | 視覚バグを検出 |
| Msg | Offset | 1px 레이아웃 오차 | 1px Offset Detected | 1pxのレイアウト誤差 |
| Action | Hint | 마우스를 올려보세요 | Hover to Zoom | マウスを合わせてください |

## 6. 기대 효과
*   **디테일의 신뢰성**: 단순한 자동 실행을 넘어 '눈에 보이는 품질'까지 책임진다는 꼼꼼한 브랜드 이미지 구축.
*   **기능적 임팩트**: "1px까지 잡아낸다"는 메시지를 직접 눈으로 확인하게 함으로써 솔루션의 성능에 대한 강력한 증거 제시.
