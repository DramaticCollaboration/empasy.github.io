# 상세 명세: SyncCMS 3D Global Network Parallax

단일 SyncCMS 코어에서 전 세계로 뻗어나가는 멀티 사이트 및 다국어 관리의 확장성을 시각화합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Global Scalability"**
*   **상징성**: 지리적 경계를 넘어 수천 개의 사이트를 통합 통제하는 엔터프라이즈급 CMS의 파워를 상징.
*   **사용처**: SyncCMS 페이지 'Multi-site & Multi-language' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 3D 지구본 (3D Rotating Globe)
*   **디자인**: 어두운 네이비 배경에 와이어프레임 또는 점묘화(Point Cloud) 스타일로 구성된 3D 지구본.
*   **연출**: 일정한 속도로 자전하며, 마우스 스크롤이나 드래그에 따라 미세하게 회전각이 변함(Parallax).

### B. SyncCMS 코어 노드 (Core Node)
*   **디자인**: 지구본 중심부 또는 특정 위치(한국 등)에서 밝게 빛나는 마이크로칩/서버 아이콘.
*   **연출**: 심장 박동처럼 은은하게 빛이 번짐(Glow Effect).

### C. 국가별 사이트 노드 및 연결선 (Global Sites & Data Lines)
*   **디자인**: 미국(US), 영국(UK), 일본(JP), 베트남(VN) 등 주요 거점에 위치한 미니 웹사이트 아이콘.
*   **연출**: 코어 노드에서 각 거점으로 빠른 속도의 빛 입자(Data Particles)가 선을 따라 흘러감.

## 3. 인터랙션 시나리오 (Interaction)

### A. 언어 전환 자동 데모 (Auto Language Flip)
1. 우측 상단에 언어 선택 UI(KO/EN/JP)가 나타나고 주기적으로 자동 토글됨.
2. 'EN'이 선택되면 지구본 위의 미국 노드가 강조되며, 연결된 미니 사이트 팝업창의 텍스트가 영어로 바뀜.
3. 'JP'로 전환되면 일본 노드로 시선이 이동(Camera Transition)하며 텍스트가 일본어로 즉시 변경됨.

### B. 호버 인터랙션 (Node Hover)
1. 사용자가 지구본 위의 특정 국가 노드에 마우스를 올리면 해당 국가의 '사이트 활성 상태'와 '트래픽 데이터'가 담긴 미니 대시보드가 팝업됨.
2. "Connection: Stable", "Latency: 12ms" 등의 텍스트 노출.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **3D Engine**: `Three.js` 또는 `React Three Fiber` (Globe & Particles)
    - **Geometry**: `SphereGeometry` + `PointsMaterial` (Point cloud globe)
    - **Animation**: `GSAP` (Camera movement & node transitions)
*   **색상 가이드**:
    - **Globe Wireframe**: `#1E293B` (Slate 800)
    - **Core Node**: `#00D1B2` (Empasy Mint)
    - **Data Line**: `rgba(0, 209, 178, 0.4)`
    - **Data Particles**: `#FFFFFF` (White)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Status | Core | 통합 관리 코어 | Integrated Core | 統合管理コア |
| Status | Connection | 연결 상태: 정상 | Status: Stable | 接続状態：正常 |
| Node | Site | 글로벌 사이트 | Global Site | グローバルサイト |

## 6. 기대 효과
*   **기술적 압도감**: 3D 비주얼을 통해 대규모 인프라를 관리할 수 있는 기술적 역량을 직관적으로 전달.
*   **글로벌 브랜드 이미지**: 해외 진출 및 다국어 서비스가 필수인 기업 고객에게 신뢰감 부여.
