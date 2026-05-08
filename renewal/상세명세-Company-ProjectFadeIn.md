# 상세 명세: Company History Project Image Fade-in

엠파시의 성장을 함께해온 주요 솔루션 및 프로젝트의 성과를 타임라인의 흐름에 맞춰 시각적으로 보여주는 패럴랙스 팝업 효과를 구현합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Visual Growth Milestone"**
*   **상징성**: 단순한 텍스트 연혁을 넘어, 실제 결과물(Screenshot, Architecture)을 동적으로 보여줌으로써 기업의 실행력과 축적된 기술적 자산을 증명.
*   **사용처**: Company 페이지 'History & Milestone' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 드로잉 타임라인 (Drawing Timeline - Left)
*   **디자인**: 수직으로 뻗은 가느다란 가이드라인.
*   **연출**: 스크롤 시 선이 위에서 아래로 그려짐. 주요 연도 노드(Node)에 도달하면 해당 점이 빛남.

### B. 연혁 텍스트 (History Text - Left)
*   **구성**: "2020. 10 SyncCMS 출시", "2025. 01 LG전자 프로젝트" 등.

### C. 이미지 팝업 카드 (Image Pop-up - Right)
*   **디자인**: 텍스트와 대응하는 이미지 카드 (SyncCMS UI 스크린샷, SyncBoot 아키텍처 맵 등).
*   **연출**: 텍스트 영역을 지날 때 우측 빈 공간에 부드러운 페이드인과 함께 아래에서 위로 살짝 떠오르는 모션.

## 3. 인터랙션 시나리오 (Interaction)

### A. 스크롤 동기화 (Scroll Sync)
1. 사용자가 타임라인을 따라 스크롤을 내림.
2. 특정 마일스톤(예: 2023. 01 SyncBoot 출시) 텍스트가 화면 중앙에 오면, 우측에 SyncBoot의 복잡한 MSA 구조도 이미지가 나타남.
3. 다음 마일스톤으로 넘어가면 이전 이미지는 사라지고 새로운 이미지(예: LG전자 대시보드)로 교체됨.

### B. 패럴랙스 효과 (Parallax Float)
1. 팝업된 이미지는 배경보다 약간 느린 속도로 스크롤되어, 입체적인 깊이감을 형성함.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Timeline Draw**: `framer-motion` (useScroll, useTransform for `pathLength`)
    - **Image Transition**: `framer-motion` (AnimatePresence for smooth swap)
*   **색상 가이드**:
    - **Timeline Path**: `#00D1B2` (Empasy Mint)
    - **Inactive Node**: `#334155` (Slate 700)
    - **Image Shadow**: `0 20px 25px -5px rgba(0, 0, 0, 0.2)`

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Milestones | 2020 | SyncCMS 솔루션 출시 | SyncCMS Launched | SyncCMSソリューション発売 |
| Milestones | 2023 | SyncBoot 플랫폼 출시 | SyncBoot Launched | SyncBootプラットフォーム発売 |
| Milestones | 2025 | LG전자 글로벌 포털 구축 | LG Global Portal | LG電子グローバルポータル構築 |

## 6. 기대 효과
*   **가독성 및 흥미 유발**: 텍스트 위주의 지루한 연혁 페이지를 잡지를 넘겨보는 듯한 감각적인 경험으로 전환.
*   **실체적 증거 제시**: 성과를 말로만 설명하지 않고 실제 UI와 구조도를 보여줌으로써 고객의 신뢰도 확보.
