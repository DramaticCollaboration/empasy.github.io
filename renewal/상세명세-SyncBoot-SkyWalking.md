# 상세 명세: SyncBoot SkyWalking 3D Node Topology

분산 환경에서 요청의 흐름을 추적하는 분산 트레이싱(Distributed Tracing) 기능을 3D 노드 토폴로지 맵으로 시각화합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"X-Ray for Your MSA"**
*   **상징성**: 서비스 간의 복잡한 호출 관계(Dependency)를 입체적으로 조망하고, 특정 요청이 어떤 경로를 거쳐 처리되는지 데이터의 흐름을 투명하게 보여줌.
*   **사용처**: SyncBoot 관찰성(Observability) 섹션 - Distributed Tracing 탭.

## 2. 시각적 구성 (Visual Components)

### A. 3D 공간 노드 (3D Spherical Nodes)
*   **디자인**: 3차원 공간에 부유하는 구체(Sphere) 형태의 노드들.
*   **구분**: 
    - **Gateway**: 가장 앞단에 위치한 큰 노드.
    - **Microservice**: 중간 규모의 노드들.
    - **Database/Redis**: 육면체 또는 원통형으로 차별화된 형태.
*   **발광 효과**: 각 노드는 서비스의 처리량(Throughput)에 비례하여 밝기가 변함.

### B. 호출 링크 (Dependency Links)
*   **디자인**: 노드 사이를 잇는 곡선 또는 직선 파이프.
*   **동작**: 
    - 요청이 발생하면 빛의 입자(Trace Particle)가 소스 노드에서 타겟 노드로 빠르게 이동.
    - 지연 시간(Latency)이 긴 구간은 선의 색상이 붉은색으로 변하거나 굵기가 굵어짐.

## 3. 인터랙션 및 애니메이션 (Interaction)

### A. 카메라 오토-파일럿 (Auto-Orbit)
*   **상태**: 기본적으로 카메라가 노드 군집 주위를 천천히 회전하며 입체감을 부여.
*   **효과**: 3D 공간의 깊이감을 강조하여 시스템의 규모를 시각적으로 전달.

### B. 트레이스 포커싱 (Trace Focusing)
*   **동작**: 특정 'Request ID'를 추적하는 시나리오 재생.
*   **연출**: 
    1. 화면이 어두워지며 선택된 요청 경로와 관련된 노드/링크만 밝게 하이라이트.
    2. 입자가 이동함에 따라 각 노드 옆에 처리 시간(ms) 텍스트 노출.

---

## 4. 기술 구현 사양 (Technical Specs)

*   **권장 스택**: 
    - **Engine**: `Three.js` (WebGL)
    - **React Library**: `@react-three/fiber`, `@react-three/drei`
    - **Graph Logic**: `react-force-graph-3d` (노드 간의 물리적 거리 및 배치 최적화)
*   **색상 가이드**:
    - **Node**: `#60A5FA` (Blue 400)
    - **Trace Particle**: `#FDE047` (Yellow 300)
    - **Error Link**: `#EF4444` (Red 500)
    - **Grid/Floor**: `#1E293B` (Slate 800) 반투명 격자

---

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 日本語 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Metric | Latency | 응답 지연 | Latency | 応答遅延 |
| Metric | Throughput | 처리량 | Throughput | スループット |
| UI | Trace Path | 호출 경로 추적 | Trace Path Tracking | 呼び出しパス追跡 |
| Label | Database | 데이터베이스 | Database | データベース |

---

## 6. 기대 효과
*   **가독성**: 텍스트 형태의 로그만으로는 파악하기 힘든 복잡한 서비스 의존성을 한눈에 파악.
*   **미래지향적 UI**: SkyWalking의 강력한 기능을 3D로 재해석하여 현대적인 기술 스택임을 강조.
