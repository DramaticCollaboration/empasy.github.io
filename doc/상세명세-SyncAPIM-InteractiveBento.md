# 상세 명세: SyncAPIM Core Features Interactive Bento-box

SyncAPIM의 5대 핵심 기능을 사용자가 직접 탐색하고 동작 원리를 시뮬레이션할 수 있는 인터랙티브 카드 레이아웃을 구현합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Feature Discovery"**
*   **상징성**: 복잡한 플랫폼 기능을 친숙한 UI 구성 요소 내에서 시각적으로 풀어내어 사용자 참여도와 이해도를 동시에 확보.
*   **사용처**: SyncAPIM 페이지 'Core Features' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 벤토 박스 레이아웃 (Bento-box Layout)
*   **디자인**: 다양한 크기의 5개 카드 UI가 유기적으로 배치된 그리드 시스템.
*   **연출**: 각 카드에 마우스 호버 시 배경색이 변하거나 내부 애니메이션이 활성화됨.

## 3. 인터랙션 시나리오 (Interaction by Card)

### ① 정책 관리 (Rate Limiting)
*   **동작**: 마우스 호버 시 원형 게이지가 0%에서 100%까지 빠르게 차오름.
*   **연출**: 100%에 도달하는 순간 게이지가 빨간색으로 변하며 "429 Too Many Requests" 경고와 함께 접근 차단(Blocking) 모션 발생.

### ② API 관리 (Management)
*   **동작**: 무질서하게 흩어져 있던 API 엔드포인트 박스들이 자동으로 움직여 특정 폴더 안으로 정렬됨.
*   **연출**: 드래그 앤 드롭 느낌의 부드러운 위치 이동(Layout transition).

### ③ API 테스트 (Testing)
*   **동작**: 가상의 브라우저 창에서 'SEND' 버튼이 클릭됨.
*   **연출**: 하단 응답 영역에 "Status: 200 OK" 문구가 타이핑되듯 나타나고 JSON 데이터가 줄지어 출력됨.

### ④ 모니터링 (Monitoring)
*   **동작**: 펄스(Pulse) 느낌의 실시간 라인 차트가 왼쪽에서 오른쪽으로 계속 그려짐.
*   **연출**: 특정 구간에서 'Latency Spike'가 발생했다가 다시 안정되는 역동적인 변화.

### ⑤ 시스템 알림 (Alert)
*   **동작**: 카드 테두리가 붉은색으로 점멸하며 중앙의 사이렌 아이콘이 회전함.
*   **연출**: 스마트폰 아이콘 위로 "Critical Error" 푸시 알림 창이 팝업됨.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Animation**: `framer-motion` (Hover states, Layout animations, Keyframes)
    - **Charts**: `SVG path` 애니메이션 (Monitoring)
*   **색상 가이드**:
    - **Card Default**: `#FFFFFF`
    - **Success**: `#00D1B2` (Mint)
    - **Alert/Warning**: `#EF4444` (Red)
    - **Selection**: `#3B82F6` (Blue)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Title | Policy | 정책 관리 | Policy Mgmt | ポリシー管理 |
| Title | Test | API 테스트 | API Testing | APIテスト |
| Title | Alert | 실시간 알림 | Real-time Alert | リアルタイム通知 |
| Msg | RateLimit | 호출 제한 발생 | Rate Limited | 呼び出し 제한 |

## 6. 기대 효과
*   **체험형 정보 소비**: 텍스트를 읽는 대신 시뮬레이션을 통해 기능을 학습하게 하여 체류 시간 증대.
*   **강력한 기능 각인**: 각 기능의 고유한 특성(보안, 편리성, 모니터링 등)을 명확한 시각 언어로 전달.
