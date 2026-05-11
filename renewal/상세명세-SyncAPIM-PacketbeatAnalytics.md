# 상세 명세: SyncAPIM Packetbeat Data Streaming & Real-time Analytics

네트워크 패킷 기반의 정밀한 데이터 수집과 이를 실시간으로 시각화하는 SyncAPIM의 심층 분석 기능을 구현합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Deep Insight Streaming"**
*   **상징성**: 보이지 않는 네트워크 하부의 데이터까지 Packetbeat으로 샅샅이 찾아내어, 비즈니스 인사이트로 전환하는 플랫폼의 정교함을 시각화.
*   **사용처**: SyncAPIM 페이지 'Observability & Packetbeat Analytics' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 데이터 소스 서버 (Source Server)
*   **디자인**: 화면 좌측에 위치한 여러 대의 서버 랙(Rack) 아이콘.
*   **연출**: 각 서버 주변에 Packetbeat 에이전트 아이콘이 부착되어 반짝임.

### B. 광섬유 데이터 라인 (Fiber-optic Lines)
*   **디자인**: 서버에서 우측 대시보드로 이어지는 수많은 곡선 라인들.
*   **연출**: 빛 줄기(Light Streaks)가 라인을 따라 빠른 속도로 흐르며 데이터 전송을 표현.

### C. 실시간 분석 대시보드 (Analytics Dashboard)
*   **디자인**: 화면 우측에 위치한 미래지향적 분석 UI 프레임.
*   **구성**: 'Latency Tracker', 'Method Distribution (Pie)', 'Throughput (Bar)'.

## 3. 인터랙션 시나리오 (Interaction)

### A. 실시간 데이터 스트리밍 (Data Flow)
1. 스크롤 진입 시, 좌측 서버들로부터 빛의 입자들이 뿜어져 나옴.
2. 입자들이 광섬유 라인을 타고 중앙을 가로질러 대시보드 위젯으로 쏟아져 들어감.

### B. 즉각적인 차트 렌더링 (Live Rendering)
1. 입자가 대시보드에 닿는 순간, 파이 차트의 영역이 조금씩 커지거나 줄어들며 실시간 변화를 시뮬레이션함.
2. Latency 추적 그래프의 선이 우측으로 계속 이동하며 새로운 데이터를 그림.
3. 숫자들이 0ms에서 수십 ms 단위로 계속 변화하며 생동감 부여.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **SVG Animation**: `stroke-dashoffset` (광섬유 라인 빛 효과)
    - **Chart Library**: `Recharts` (Responsive & Animated)
    - **Numbers**: `react-countup` (실시간 수치 변화)
*   **색상 가이드**:
    - **Data Line**: `rgba(255, 255, 255, 0.1)`
    - **Light Streak**: `#00D1B2` (Mint) to `#3B82F6` (Blue) Gradient
    - **Dashboard BG**: `#0F172A` (Dark Navy)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| UI | Agent | Packetbeat 에이전트 | Packetbeat Agent | Packetbeatエージェント |
| UI | Latency | 지연 시간 | Latency | レイテンシ |
| UI | Throughput | 처리량 | Throughput | ス루풋 |
| Msg | Insight | 실시간 인사이트 제공 | Real-time Insights | リアルタイムインサイト |

## 6. 기대 효과
*   **분석의 정밀성 강조**: 일반적인 로그 수집을 넘어 패킷 단위의 심층 분석이 가능함을 시각적으로 어필.
*   **시각적 만족도**: 화려한 빛의 흐름과 실시간으로 변화하는 차트를 통해 사용자에게 "데이터가 살아있다"는 느낌을 전달.
