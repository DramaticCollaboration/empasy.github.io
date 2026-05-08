# 상세 명세: Use Cases Interactive 3D Globe with Client Logos

글로벌 혁신 기업들이 엠파시의 기술을 통해 연결되어 있음을 시각화하는 인터랙티브 3D 지구본을 구현합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Global Trust Network"**
*   **상징성**: 삼성전자, LG전자 등 국내외 유수 기업들이 선택한 엠파시의 압도적인 기술 신뢰도와 글로벌 서비스 역량을 상징.
*   **사용처**: UseCases 페이지 'Hero Section'.

## 2. 시각적 구성 (Visual Components)

### A. 3D 글로브 (3D WebGL Globe)
*   **디자인**: 어두운 배경에 은은한 엠파시 브랜드 컬러(Teal)로 빛나는 와이어프레임 지구본.
*   **연출**: 일정한 속도로 자전하며, 마우스 드래그로 회전 방향과 각도 조절 가능.

### B. 고객사 로고 노드 (Client Logo Nodes)
*   **디자인**: 지구본 표면의 주요 거점(서울, 뉴욕, 도쿄 등)에 위치한 고객사 로고 아이콘.
*   **구성**: LG, Samsung, Hyosung, Visang 등.
*   **연출**: 로고가 담긴 작은 원형 노드가 지구본 위에 떠 있으며, 부드럽게 고동침(Glow & Pulse).

### C. 연결 네트워크망 (Connection Network)
*   **디자인**: 노드와 노드 사이를 잇는 얇고 빛나는 데이터 라인들.
*   **연출**: 라인을 따라 데이터 입자들이 흐르며 기술의 공유와 연결을 표현.

## 3. 인터랙션 시나리오 (Interaction)

### A. 드래그 및 탐색 (Rotate & Explore)
1. 사용자가 마우스로 지구본을 드래그하여 특정 지역(예: 북미)으로 시점을 이동할 수 있음.
2. 마우스를 떼면 다시 원래의 자전 속도로 천천히 회전함.

### B. 로고 클릭 및 강조 (Click to Highlight)
1. 특정 고객사 로고 노드에 마우스를 올리면(Hover), 해당 로고가 확대되며 기업명과 도입 솔루션명이 툴팁으로 노출됨.
2. 클릭 시, 해당 고객사의 성공 사례 카드 영역으로 화면이 자동 스크롤(Smooth Scroll)됨.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **3D Engine**: `Three.js` 또는 `React Three Fiber`
    - **Globe Library**: `three-globe` (이미지/데이터 매핑 용이)
    - **Animation**: `GSAP` (Camera transition)
*   **색상 가이드**:
    - **Globe Base**: `#0F172A` (Dark Slate)
    - **Wireframe**: `#00D1B2` (Empasy Mint) with low opacity
    - **Node Glow**: `#FFFFFF` (White)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| UI | Trusted | 신뢰받는 파트너 | Trusted Partners | 信頼されるパートナー |
| Tooltip | Solution | 도입 솔루션 | Solution | 導入ソリューション |
| Action | Scroll | 클릭하여 사례 보기 | Click to View | クリックして詳細を見る |

## 6. 기대 효과
*   **압도적인 신뢰도 전달**: 대기업 로고들이 전 세계를 무대로 연결된 모습을 통해 고객에게 강력한 기술적 확신 제공.
*   **글로벌 스케일 강조**: 엠파시가 국내를 넘어 글로벌 시장을 타겟으로 하는 플랫폼임을 시각적으로 선언.
