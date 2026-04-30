# 상세 명세: SyncBoot Log Streaming & Grafana Chart

실시간 시스템 로그 스트리밍과 주요 지표를 시각화하는 Grafana 스타일의 차트를 통해 통합 모니터링 환경을 시뮬레이션합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Pulse of the System"**
*   **상징성**: 시스템이 살아 움직이는 증거(로그)를 끊임없이 보여주고, 이를 수치화된 그래프로 변환하여 시스템의 건강 상태를 직관적으로 파악함.
*   **사용처**: SyncBoot 관찰성(Observability) 섹션 - Logs & Metrics 탭.

## 2. 시각적 구성 (Visual Components)

### A. 터미널 로그 스트리밍 (Terminal Log Stream)
*   **디자인**: 다크 모드 기반의 고정폭 폰트 터미널 윈도우.
*   **동작**: 
    - 실제 애플리케이션의 `Standard Out` 로그가 아래에서 위로 빠르게 스크롤됨.
    - `INFO`, `WARN`, `ERROR` 등 로그 레벨에 따른 텍스트 하이라이트 (INFO: White, WARN: Yellow, ERROR: Red).
    - 타임스탬프와 서비스 명칭이 접두어로 붙음.

### B. 실시간 매트릭 차트 (Real-time Metric Charts)
*   **디자인**: Grafana 스타일의 미니멀한 라인 차트 2~3개.
*   **지표**: 
    - **CPU/Memory Usage**: 출렁이는 곡선 그래프.
    - **Request per Second (RPS)**: 막대 그래프 또는 Area 차트.
*   **동작**: 로그 스트리밍 속도와 동기화되어 우측에서 좌측으로 데이터 포인트가 실시간 이동.

## 3. 인터랙션 및 애니메이션 (Interaction)

### A. 데이터 동기화 (Visual Sync)
*   **연출**: 터미널에 `ERROR` 로그가 찍히는 순간, Grafana 차트의 특정 지점이 붉은색 점으로 표시되거나 스파이크(Spike) 발생.
*   **효과**: 로그와 매트릭의 상관관계를 시각적으로 증명.

### B. 마우스 호버 (Data Tooltip)
*   **동작**: 차트의 특정 지점에 마우스를 올리면 당시의 정확한 수치와 발생 시간을 툴팁으로 표시.

---

## 4. 기술 구현 사양 (Technical Specs)

*   **권장 스택**: 
    - **Log Stream**: `React` (List rendering with auto-scroll logic)
    - **Chart**: `Recharts` 또는 `Chart.js` (Streaming plugin 활용)
    - **Styling**: `Tailwind CSS` (Glassmorphism 효과 적용)
*   **색상 가이드**:
    - **Terminal BG**: `#0F172A` (Deep Navy)
    - **Chart Line**: `#38BDF8` (Sky Blue)
    - **Error Highlight**: `#F43F5E` (Rose 500)
    - **Text**: `#E2E8F0` (Slate 200)

---

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Chart Title | System Health | 시스템 상태 | System Health | システムの状態 |
| Chart Title | Traffic | 트래픽 추이 | Traffic Trend | トラフィック推移 |
| UI | Raw Logs | 실시간 원천 로그 | Real-time Raw Logs | リアルタイム生ログ |
| Status | Monitoring | 모니터링 활성화 | Monitoring Active | モニタリング有効 |

---

## 6. 기대 효과
*   **현장감**: 실제로 시스템이 작동하고 있다는 느낌을 강하게 전달하여 플랫폼의 실효성 강조.
*   **분석 역량**: 단순 나열이 아닌 데이터 시각화를 통해 운영 효율성을 간접 체험하게 함.
