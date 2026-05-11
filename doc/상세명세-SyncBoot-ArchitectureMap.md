# 상세 명세: SyncBoot Interactive Architecture Map

이 문서는 `src/pages/SyncBoot.jsx`의 "Interactive Architecture Map" 영역(Section 3) 구현을 위한 상세 가이드라인입니다.

## 1. 개요 (Overview)
*   **목적**: SyncBoot가 제공하는 MSA 핵심 컴포넌트(Gateway, Discovery, Service, Data) 간의 유기적 관계를 시각화하여 기술적 신뢰도 전달.
*   **핵심 가치**: "검증된 오픈소스로 구성된 무결점 아키텍처" 시각화.

## 2. 시각적 구조 (Visual Structure)
아키텍처는 위에서 아래로 흐르는 4개 주요 계층으로 구성됩니다.

### 계층 1: Access Layer (접속 계층)
*   **구성 요소**: User(Laptop), Mobile, External API 아이콘.
*   **시각 효과**: 외부에서 시스템으로 진입하는 화살표(흐르는 점선) 배치.

### 계층 2: Gateway Layer (진입 계층)
*   **핵심 노드**: **SyncGateway** (Spring Cloud Gateway).
*   **부가 노드**: OAuth2 / JWT (보안), Load Balancer.
*   **디자인**: 방패 모양 또는 게이트 모양의 견고한 아이콘 사용.

### 계층 3: Control & Service Layer (제어 및 서비스 계층)
*   **중앙 제어**: **Nacos** (Service Discovery & Config Center).
*   **서비스 노드**: 3~4개의 독립된 마이크로서비스 블록 (예: User Service, Order Service, Product Service).
*   **연결성**: Nacos에서 각 서비스 노드로 뻗어나가는 신경망 같은 라인.

### 계층 4: Persistence Layer (데이터 계층)
*   **구성 요소**: Redis (분산 캐시), MySQL/PostgreSQL (RDB), MongoDB (NoSQL).
*   **디자인**: 원통형 DB 아이콘 및 캐시를 상징하는 번개/번쩍임 효과.

---

## 3. 인터랙션 상세 (Interaction Details)

### A. 호버(Hover) 시나리오
특정 계층이나 노드에 마우스를 올렸을 때의 동작입니다.

1.  **Gateway 노드 Hover**:
    *   **애니메이션**: 게이트웨이 주변으로 '보호막' 느낌의 원형 파동(Ripple) 발생.
    *   **모션**: "Request -> Filter -> Route" 문구가 순차적으로 나타났다 사라짐.
    *   **툴팁**: `Gatekeeper: 인증/인가 및 통합 라우팅 처리`

2.  **Service 노드 Hover**:
    *   **애니메이션**: Nacos 노드와 해당 서비스 노드 사이에 빛의 입자(Particle)가 빠르게 왕복함.
    *   **모션**: 서비스 노드가 살짝 커지며 내부에서 '톱니바퀴'가 돌아가는 모션.
    *   **툴팁**: `Agile Service: 독립적으로 배포 및 확장 가능한 비즈니스 로직`

3.  **Data 노드 Hover**:
    *   **애니메이션**: Redis 노드에서 서비스 노드로 데이터가 전달되는 "Cache Hit" 모션(매우 빠름).
    *   **모션**: DB 노드 하단에 데이터가 쌓이는 듯한 바(Bar) 애니메이션.
    *   **툴팁**: `Hybrid Storage: 성능과 안정성을 모두 잡은 데이터 전략`

### B. 공통 인터랙션
*   **Dimming**: 한 노드를 선택/호버하면 관련 없는 다른 노드들은 투명도가 30%로 감소하여 주목도 향상.
*   **Active State**: 클릭 시 해당 영역에 대한 더 상세한 기술 스택(Spring Cloud, Netflix OSS 등)이 오버레이로 노출됨.

---

## 4. 기술 구현 사양 (Technical Specs)

*   **라이브러리**: `framer-motion` (필수), `lucide-react` (아이콘).
*   **포맷**: SVG (Scalable Vector Graphics) 기반으로 제작하여 고해상도 및 반응형 대응.
*   **색상 가이드**:
    *   Primary: `#00D1B2` (Empasy Mint)
    *   Background: `#0F172A` (Deep Navy / Slate 900)
    *   Lines: `#334155` (Slate 700) -> Hover 시 `#5EEAD4` (Teal 300)로 발광(Glow).

---

## 5. 다국어 텍스트 정의 (Multi-language)

| Key (Context) | 한국어 (KO) | English (EN) | 日本語 (JP) |
| :--- | :--- | :--- | :--- |
| Layer 1 Label | 사용자 및 외부 요청 | User & External Requests | ユーザーおよび外部リクエスト |
| Gateway Tooltip | 통합 인증 및 라우팅 | Auth & Unified Routing | 統合認証およびルーティング |
| Service Tooltip | 독립적 서비스 로직 | Independent Service Logic | 独立したサービスロジック |
| Discovery Tooltip | 실시간 서비스 탐색 | Real-time Service Discovery | リアルタイムサービス探索 |
| Data Tooltip | 고성능 데이터 분산 저장 | High-perf Data Storage | 高性能データ分散ストレージ |

---

## 6. 반응형 대응 (Responsive)
*   **Desktop**: 전체 4계층 가로/세로 레이아웃 노출.
*   **Mobile**: 
    *   복잡한 선은 생략하고 수직 스택 구조로 단순화.
    *   좌우 스와이프를 통한 계층별 상세 탐색 또는 탭 방식으로 전환 권장.
