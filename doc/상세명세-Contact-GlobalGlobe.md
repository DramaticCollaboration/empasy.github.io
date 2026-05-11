# 상세 명세: Contact Us Interactive 3D Global Network Globe

엠파시의 글로벌 비즈니스 거점(서울, 캘리포니아, 도쿄)을 3D 지구본 위에 시각화하고, 각 거점의 상세 정보를 인터랙티브하게 제공합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Connecting to Your Success"**
*   **상징성**: 한국을 넘어 미국, 일본으로 뻗어나가는 엠파시의 글로벌 파트너십과 언제 어디서든 고객과 연결될 준비가 되어 있음을 강조.
*   **사용처**: Contact 페이지 'Global Network & Contact Info' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 3D 테크니컬 글로브 (3D Technical Globe)
*   **디자인**: 엠파시 브랜드 컬러인 틸(Teal)과 민트(Mint) 색상의 빛나는 선과 점들로 이루어진 3D 지구본.
*   **연출**: 일정한 속도로 회전하며, 배경에는 우주 공간을 상징하는 미세한 파티클들이 부유함.

### B. 글로벌 거점 노드 (Global Nodes)
*   **위치**: 'Seoul (KR)', 'California (US)', 'Tokyo (JP)'.
*   **디자인**: 거점 위치에서 수직으로 솟아오른 빛나는 핀(Pin) 또는 빔(Beam).
*   **연출**: 각 노드에서 원형의 파동(Ping)이 주기적으로 퍼져나감.

### C. 거점 상세 팝업 (Location Info Tooltip)
*   **디자인**: 노드 호버 시 나타나는 유리 질감(Glassmorphism)의 정보창.
*   **내용**: 오피스 명칭, 현지 시간, 주요 연락처 등.

## 3. 인터랙션 시나리오 (Interaction)

### A. 거점 탐색 및 줌 (Explore & Zoom)
1. 사용자가 특정 거점 이름(예: California)을 클릭하거나 호버함.
2. 지구본이 해당 거점을 정면으로 바라보도록 자동으로 회전하고 카메가가 줌인(Zoom-in)됨.
3. 해당 거점의 상세 정보 팝업이 나타나며, "Global Tech Advisor: Suho Ahn" 등의 정보 노출.

### B. 파동 동기화 (Ping Synchronization)
1. 세 거점의 파동(Ping) 애니메이션이 순차적으로 또는 동시에 발생하며 글로벌 네트워크가 살아있음을 시각화함.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **3D Engine**: `Three.js` + `React Three Fiber`
    - **Globe Texture**: `Custom Shader` (Glowing wireframe look)
    - **Animation**: `GSAP` (Smooth camera transitions and node auto-focus)
*   **색상 가이드**:
    - **Globe Core**: `#0F172A` (Slate 900)
    - **Nodes/Lines**: `#00D1B2` (Empasy Mint)
    - **Highlight State**: `#FFFFFF` (Solid White)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Node | Seoul | 서울 본사 | Seoul HQ | ソウル本社 |
| Node | California | 미국 지사 | US Office | アメリカ支社 |
| Node | Tokyo | 일본 지사 | Japan Office | 日本支社 |
| UI | Time | 현지 시간 | Local Time | 現地時間 |

## 6. 기대 효과
*   **글로벌 기업 신뢰도**: 국내 지사뿐만 아니라 해외 거점을 시각적으로 노출하여 글로벌 프로젝트 수행 능력을 어필.
*   **전문적인 첫인상**: 문의 페이지의 최상단에 고퀄리티 3D 인터랙션을 배치하여 기술 전문 기업으로서의 무게감 전달.
