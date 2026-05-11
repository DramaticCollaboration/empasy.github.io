# 상세 명세: Visual Validation Scanning Animation

LG전자 및 LG화학의 AI 기반 비주얼 테스팅 시스템을 상징하는 스캐닝 애니메이션을 구현합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Pixel-Perfect Verification"**
*   **상징성**: 사람의 눈으로 확인하기 어려운 미세한 UI 결함을 AI가 스캔하여 100% 무결성을 보장함을 시각화.
*   **사용처**: UseCases 페이지 - LG전자 & LG화학 카드 Hover Motion.

## 2. 시각적 구성 (Visual Components)

### A. UI 레이아웃 프레임 (UI Layout Frame)
*   **디자인**: 웹 또는 모바일 앱의 레이아웃을 추상화한 와이어프레임 형태.
*   **구성**: 헤더, 이미지 슬라이더, 버튼, 텍스트 블록 등이 단순한 사각형과 선으로 표현됨.

### B. 스캔 빔 (Scanning Beam)
*   **디자인**: 위에서 아래로(또는 좌에서 우로) 흐르는 수평의 빛나는 레이저 라인.
*   **연출**: 엠파시 민트 컬러(#00D1B2)의 네온 효과를 주어 첨단 기술의 이미지를 전달.

### C. 디텍션 마커 (Detection Markers)
*   **디자인**: 스캔 빔이 지나갈 때 UI 요소 위에 나타나는 사각형 바운딩 박스.
*   **연출**: "MATCH", "OK", "100%" 등의 텍스트가 마커 옆에 작게 노출되며 데이터가 검증되고 있음을 표현.

## 3. 애니메이션 시나리오 (Animation Scenario)

1.  **초기 상태**: 정적인 추상 UI 와이어프레임이 카드 배경에 배치됨.
2.  **호버 시 (Hover)**:
    *   상단에서 하단으로 레이저 스캔 빔이 천천히 이동.
    *   빔이 닿는 위치의 UI 요소들이 일시적으로 밝게 빛나며 활성화됨.
    *   각 요소 옆에 데이터 검증 수치(예: Matching 99.9%)가 빠르게 카운팅되며 나타남.
3.  **완료 연출**: 스캔이 끝난 후 중앙에 커다란 체크(Check) 아이콘과 함께 "Verified" 메시지가 페이드인.

## 4. 기술 구현 사양 (Technical Specs)

*   **권장 스택**:
    *   **Animation**: `Framer Motion` (Linear motion & staggered children)
    *   **SVG Masking**: 스캔 빔이 지나가는 영역만 색상이 변하게 하는 마스킹 기법 적용.
*   **색상 가이드**:
    *   **Scan Line**: `#00D1B2` (Empasy Mint) with outer glow
    *   **Wireframe**: `#475569` (Slate 500)
    *   **Highlight**: `#5EEAD4` (Teal 300)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Status | Scanning | 분석 중... | Scanning... | スキャン中... |
| Status | Match | 일치율 | Match Rate | 一致率 |
| Status | Verified | 검증 완료 | Verified | 検証完了 |

## 6. 기대 효과
*   **정밀함 강조**: 단순 수작업 테스트를 넘어선 AI의 정밀한 검증 능력을 직관적으로 전달.
*   **자동화 가치 전달**: 대규모 서비스(LG 가전/화학 등)의 복잡한 UI를 실시간으로 관리할 수 있다는 신뢰감 제공.
