# 상세 명세: Company 3D Particle Logo Synergy

무작위로 흩어져 있던 빛의 입자들이 하나로 모여 "EMPASY" 로고를 형성하는 시네마틱 오프닝을 통해 기업의 비전과 협업의 가치를 시각화합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Empathic Synergy"**
*   **상징성**: 개별적인 데이터와 사람(Particles)이 공감과 기술을 통해 결합(Synergy)하여 비즈니스의 민첩성(Agility)을 만드는 과정을 상징.
*   **사용처**: Company 페이지 'Hero Section'.

## 2. 시각적 구성 (Visual Components)

### A. 무작위 파티클 (Random Particles)
*   **디자인**: 화면 전체에 부유하는 수천 개의 미세한 빛의 점들.
*   **색상**: 엠파시 브랜드 컬러인 틸(Teal)과 민트(Mint) 계열.
*   **연출**: 중력이 없는 공간에서 천천히 유영하는 듯한 움직임(Ambient motion).

### B. 3D EMPASY 로고 (3D Typography)
*   **디자인**: 'EMPASY' 텍스트의 3D 모델링 형태. 초기에는 보이지 않는 투명한 상태.

### C. 결합 가이드 (Assembly Guide)
*   **디자인**: 로고가 형성될 위치를 중심으로 은은하게 퍼져나가는 구형(Sphere) 필드.

## 3. 인터랙션 시나리오 (Interaction)

### A. 시네마틱 결합 (The Synergy Moment)
1. 페이지 로드 시, 흩어진 파티클들이 서서히 움직임.
2. 사용자가 스크롤을 시작하거나 특정 지점에 도달하면, 모든 파티클들이 강한 인력에 이끌리듯 중앙의 'EMPASY' 로고 실루엣으로 빠르게 빨려 들어감.
3. 파티클들이 글자의 각 단면에 달라붙으며 강렬한 빛(Flash)을 발산하고, 최종적으로 견고한 3D 텍스트 로고가 완성됨.
4. 로고 완성 직후 주변으로 잔여 입자들이 파동(Wave)처럼 퍼져나가며 안정화됨.

### B. 마우스 반응 (Magnetic Hover)
1. 로고 완성 후 마우스를 움직이면, 로고 주변의 파티클들이 마우스 커서를 따라 미세하게 움직이거나 흩어짐.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **3D Engine**: `Three.js` + `React Three Fiber`
    - **Particle System**: `THREE.BufferGeometry` (High performance for thousands of dots)
    - **Animation**: `GSAP` (Particle position tweening to target coordinates)
*   **색상 가이드**:
    - **Background**: `#0F172A` (Slate 900)
    - **Particles**: `#00D1B2` (Mint) and `#007F7A` (Teal)
    - **Final Logo**: `#FFFFFF` (Solid White) with Metallic Finish

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| UI | Synergy | 기술의 시너지 | Tech Synergy | 技術のシナジー |
| UI | Vision | 살아있는 소프트웨어 | Living Software | 生きたソフトウェア |
| Action | Scroll | 스크롤하여 확인 | Scroll to Discover | スクロールで確認 |

## 6. 기대 효과
*   **감각적 브랜드 각인**: 사명의 의미를 추상적인 단어가 아닌 역동적인 비주얼로 표현하여 브랜드 인지도 극대화.
*   **기술력 과시**: WebGL 기반의 고난도 파티클 애니메이션을 통해 '기술 선도 기업'으로서의 이미지를 첫 화면에서 증명.
