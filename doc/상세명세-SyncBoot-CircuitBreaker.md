# 상세 명세: SyncBoot Circuit Breaker Dashboard Animation

MSA 환경에서 서비스 간 장애 전파를 차단하는 Circuit Breaker(서킷 브레이커)의 동작 원리를 직관적인 대시보드 애니메이션으로 시각화합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Shielding Your Services"**
*   **상징성**: 특정 서비스의 장애(에러율 급증) 발생 시, 시스템 전체로 퍼지지 않도록 즉각적으로 연결을 차단(Open)하고, 정상화 후 다시 연결(Close)하는 복구 과정을 시뮬레이션.
*   **사용처**: SyncBoot 관찰성(Observability) 섹션 - Circuit Breaker 탭.

## 2. 시각적 구성 (Visual Components)

### A. 서비스 노드 그리드 (Service Node Grid)
*   **디자인**: 3x3 또는 4x4 형태의 사각형 카드 그리드.
*   **노드 상태**:
    - **Normal**: 차분한 블루/그린 테두리, 내부에서 은은하게 박동하는 애니메이션.
    - **Warning**: 노란색으로 변하며 깜빡임 (에러 임계치 접근).
    - **Failed (Open)**: 강렬한 빨간색 테두리와 함께 'X' 아이콘 표시, 연결선 끊어짐.
    - **Recovering (Half-Open)**: 주황색 점선 테두리, 테스트 트래픽 유입 시각화.

### B. 트래픽 흐름 (Traffic Flow)
*   **디자인**: 노드 사이를 연결하는 동적인 선(Line) 위로 움직이는 입자(Particles).
*   **동작**:
    - 정상 시: 일정한 속도로 부드럽게 흐름.
    - 장애 시: 입자가 특정 노드 앞에서 튕겨져 나가거나 소멸됨.

## 3. 애니메이션 시나리오 (Animation Scenario)

1.  **Stage 1: Stable State**: 모든 노드가 초록색이며 트래픽이 원활하게 흐름.
2.  **Stage 2: Incident Occurrence**: 'Order Service' 노드의 에러율이 상승하며 노란색 -> 빨간색으로 변함.
3.  **Stage 3: Circuit Open**: 해당 노드로 향하는 트래픽 라인이 '툭' 끊어지며 'CIRCUIT OPENED' 메시지 팝업. 주변 서비스는 정상 작동 유지(Isolation).
4.  **Stage 4: Auto Recovery**: 일정 시간 후 노드가 주황색(Half-Open)으로 변하며 소량의 트래픽 시도. 성공 시 다시 초록색으로 복구.

---

## 4. 기술 구현 사양 (Technical Specs)

*   **권장 스택**: 
    - **Animation**: `Framer Motion` (상태 전환 및 레이아웃 애니메이션)
    - **Graphics**: `SVG` 또는 `Canvas API` (트래픽 라인 구현)
    - **State Management**: `React.useState`를 이용한 시뮬레이션 루프
*   **색상 가이드**:
    - **Success**: `#10B981` (Green 500)
    - **Danger**: `#EF4444` (Red 500)
    - **Warning**: `#F59E0B` (Amber 500)
    - **Neutral**: `#64748B` (Slate 500)

---

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 日本語 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Status | Closed | 정상 연결 | Connected | 正常接続 |
| Status | Open | 차단됨 (장애 격리) | Circuit Opened | 遮断済み |
| Status | Half-Open | 복구 시도 중 | Recovering | 복구 시도 중 |
| Alert | Error Alert | 에러 임계치 초과! | Error Threshold Exceeded! | エラー閾値超過！ |

---

## 6. 기대 효과
*   **기술 이해도**: 복잡한 MSA 장애 대응 메커니즘을 비전공자도 이해하기 쉽게 전달.
*   **신뢰성**: SyncBoot가 제공하는 인프라의 안정성과 자동 복구 능력을 강조.
