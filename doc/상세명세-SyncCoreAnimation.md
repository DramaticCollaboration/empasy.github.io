# 상세 명세: Sync Series Hero Core Animation

"변화에 최적화된 살아있는 소프트웨어"라는 엠파시 Sync Series의 핵심 철학을 시각적으로 선언하고, "Boon to business by agility(비즈니스 민첩성을 위한 혜택)" 컨셉을 고품질 3D 모션으로 구현하는 최상단 Hero 영역에 대한 상세 명세입니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Empathic Synergy (공감 시너지)"**
*   **상징성**: 단절된 IT 인프라를 하나로 연결하고 생명력을 불어넣는 중앙 집중형 지능형 코어(Core)와 그 주위를 유기적으로 공전하는 5대 핵심 솔루션의 조화.
*   **사용처**: SyncSeries 통합 소개 페이지 최상단 Hero Section 중앙.

## 2. 시각적 구성 요소 (Visual Components)

### A. 중앙 싱크 코어 (The Central Glow Core)
*   **형태**: 화면 중앙에서 스스로 빛을 내는 에너지원(Core).
*   **디자인**: 
    - 반투명한 결정체 또는 고밀도 파티클이 집약된 구체 형태.
    - 엠파시 메인 브랜드 컬러(#00D1B2)를 기반으로 부드러운 발광(Glow/Bloom) 효과 적용.
*   **애니메이션**: 부드럽게 숨을 쉬듯 맥동(Pulsing)하며 주변으로 미세한 에너지 파동을 주기적으로 방출.

### B. 5대 솔루션 공전 구체 (5 Solution Spheres)
*   **구성**: 코어를 중심으로 서로 다른 궤도와 속도를 가진 5개의 다채로운 3D 구체(Sphere).
*   **상징 솔루션**:
    1.  **SyncBoot**: MSA 플랫폼 (민트색 #00D1B2)
    2.  **SyncEta**: AI 품질 검증 (핑크/오렌지)
    3.  **SyncCMS**: 엔터프라이즈 콘텐츠 관리 (블루)
    4.  **SyncAPIM**: 지능형 API 게이트웨이 (그린)
    5.  **SyncInsight**: AI 지식 창출 (퍼플)
*   **디자인**: 각 구체는 고유의 빛을 내며, 이동 경로에 부드러운 잔상(Trail)을 남겨 역동적인 흐름 연출.

## 3. 인터랙션 상세 (Interaction Details)

### A. 동적 궤도 반응 (Dynamic Orbit Response)
*   **마우스 인터랙션**: 사용자의 마우스 커서 움직임에 따라 5개 구체의 공전 궤도가 유기적으로 뒤틀리거나 반응함.
*   **시각 효과**: 커서가 이동하는 방향으로 전체 궤도가 미세하게 기울어지는 Parallax Tilt 효과 적용.

### B. 마그네틱 어트랙션 (Magnetic Attraction)
*   **효과**: 마우스 커서가 특정 구체 근처에 도달하면, 해당 구체가 커서 방향으로 미세하게 끌려오거나 공전 속도가 변화하며 상호작용함.
*   **의미**: 사용자의 개입에 유연하게 반응하는 '살아있는 소프트웨어'의 가치 전달.

## 4. 기술 구현 사양 (Technical Specs)
*   **엔진**: `Three.js` + `@react-three/fiber` (R3F)
*   **컴포넌트**: `@react-three/drei` (Float, MeshDistortMaterial, Bloom 등 활용)
*   **애니메이션**: `GSAP`을 활용한 정교한 궤도 및 인터랙션 제어.
*   **최적화**: 
    - 포스트 프로세싱(Bloom)의 강도를 기기 사양에 따라 동적으로 조절.
    - 모바일 환경에서는 파티클 밀도와 쉐이더 복잡도를 낮추어 60fps 유지.

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 日本語 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| **메인 카피** | Hero Title | Boon to business by agility, 비즈니스 민첩성을 위한 완벽한 도구 | Boon to business by agility, The Perfect Tool for Business Agility | Boon to business by agility, ビジネスの俊敏性のための完璧なツール |
| **서브 카피** | Hero Desc | 개발부터 운영, 검증, 콘텐츠 관리까지. 단절된 IT 인프라를 연결하여 가장 유연하고 강력한 디지털 혁신 생태계를 완성합니다. | From development to operation, validation, and content management. Connecting disconnected IT infrastructure to complete the most flexible and powerful digital innovation ecosystem. | 開発から運用、検証、コンテンツ管理まで。断絶されたITインフラを接続し、最も柔軟で強力なデジタルイノベーションエコシステムを完成させます。 |

## 6. 기대 효과
*   **브랜드 아이덴티티 시각화**: 엠파시의 '연결'과 '시너지' 가치를 직관적인 3D 모션으로 전달.
*   **사용자 몰입도 향상**: 인터랙티브한 첫인상을 통해 방문자에게 기술적 신뢰도와 강력한 임팩트 제공.
*   **혁신 이미지 구축**: 최신 웹 그래픽 기술을 활용하여 디지털 전환(DX) 리딩 기업으로서의 위상 강조.
