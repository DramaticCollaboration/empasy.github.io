# 상세 명세: SyncBoot Hero Cube Animation

"비즈니스 민첩성을 위한 MSA 쾌속 개발 플랫폼, SyncBoot"의 핵심 가치를 시각적으로 전달하는 것을 목표로 합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Breaking the Wall, Building the Future"**
*   **상징성**: 무겁고 경직된 모놀리식(Monolithic) 시스템이 파괴되고, 유연하고 민첩한 마이크로서비스(MSA)들로 재구성되어 유기적으로 연결되는 과정을 시각화.
*   **사용처**: SyncBoot 메인 페이지 Hero Section.

## 2. 시각적 단계 (Visual Phases)

### Phase 1: The Monolith (Heavy & Solid)
*   **상태**: 화면 진입 시 중앙에 위치한 거대한 단일 3D 큐브.
*   **디자인**: 
    - 불투명한 회색 또는 짙은 네이비 톤의 금속 질감 (Brushed Metal).
    - 표면에 미세한 균열(Crack) 라인이 희미하게 빛남.
    - 큐브 각 면에 "LEGACY", "HEAVY", "MONOLITH" 텍스트 각인 또는 엠보싱 효과.
*   **모션**: 아주 느리고 묵직하게 회전하며 부유(Floating).

### Phase 2: The Shattering (Burst of Agility)
*   **트리거**: 페이지 로드 2초 후 또는 사용자의 첫 스크롤 발생 시.
*   **상태**: 단일 큐브가 수십 개의 작은 큐브(Microservice Units)로 폭발하듯 분해됨.
*   **디자인**: 
    - 분해되는 순간 큐브 내부에서 강렬한 민트색(#00D1B2) 광채(Glow) 발생.
    - 파편들은 입체적으로 사방으로 퍼져나감 (Radial Outward Motion).
*   **이펙트**: 파티클(Particle) 효과와 함께 화면 전체로 에너지가 전달되는 시각적 충격 연출.

### Phase 3: SyncVerse (Connected MSA)
*   **상태**: 분산된 소형 큐브들이 일정한 군집을 이루며 우주 공간처럼 떠 있음.
*   **디자인**: 
    - 각 소형 큐브는 반투명한 민트색 유리(Frosted Glass) 질감.
    - 큐브 사이를 연결하는 동적인 빛의 선(Dynamic Connecting Lines)들이 거미줄처럼 생성됨.
    - 주요 큐브 위에는 서비스 명칭 플로팅 텍스트 표시 (Auth, Order, Payment, Inventory, Log 등).
*   **모션**: 마우스 커서의 움직임에 따라 군집 전체가 부드럽게 기울어짐 (Parallax Tilt/Perspective effect).

---

## 3. 인터랙션 상세 (Interaction Details)

### A. 스크롤 반응형 (Scroll-Linked Animation)
*   **진행도**: 스크롤 깊이에 따라 `Shatter Progress` (0 to 1) 값 제어.
*   **효과**: 스크롤을 내릴수록 큐브 파편들 사이의 거리가 멀어지며, 네트워크 연결선들이 더욱 선명해지고 복잡해짐.
*   **역방향**: 스크롤을 다시 올리면 파편들이 다시 모여드는 듯한 가역적 애니메이션으로 모놀리식의 한계를 역설적으로 강조.

### B. 마우스 호버 (Node Insight)
*   특정 마이크로서비스 큐브에 마우스를 올리면:
    - 해당 큐브가 중앙으로 살짝 당겨지며 밝게 발광(Emissive Glow).
    - 연결된 주변 노드들로 데이터 입자(Data Particles)가 빠르게 흐르는 애니메이션 재생.
    - 큐브 상단에 해당 서비스의 상태값(Status: Healthy, Traffic: Normal 등) 툴팁 노출.

---

## 4. 기술 구현 사양 (Technical Specs)

*   **권장 스택**: 
    - **Engine**: `Three.js` (WebGL 기반)
    - **React Integration**: `@react-three/fiber` (R3F)
    - **Helper**: `@react-three/drei` (PerspectiveCamera, Float, MeshDistortMaterial 등 활용)
    - **Animation**: `framer-motion-3d` 또는 `GSAP`
*   **색상 가이드**:
    - **Monolith**: `#334155` (Slate 700)
    - **Microservice**: `#00D1B2` (Empasy Mint)
    - **Background**: `#0F172A` (Deep Navy / Hero Section 배경색과 통일)
    - **Line/Glow**: `#5EEAD4` (Teal 300)
*   **성능 최적화**: 
    - 수백 개의 큐브 렌더링 시 `InstancedMesh`를 사용하여 Draw Call 최소화.
    - 모바일 환경에서는 큐브 개수 및 파티클 밀도를 자동으로 줄이는 LOD(Level of Detail) 적용.

---

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key (Context) | 한국어 (KO) | English (EN) | 日本語 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Phase 1 | Monolith Text | 레거시 모놀리식 | Legacy Monolith | レガシーモノリス |
| Phase 2 | Transition Copy | 민첩성으로의 전환 | Shift to Agility | 俊敏性への転換 |
| Phase 3 | MSA Node 1 | 인증 서비스 | Auth Service | 認証サービス |
| Phase 3 | MSA Node 2 | 주문 관리 | Order Management | 注文管理 |
| Phase 3 | MSA Node 3 | 결제 모듈 | Payment Module | 決済モジュール |
| Phase 3 | MSA Node 4 | 재고 최적화 | Inventory Opt. | 在庫最適化 |
| Phase 3 | MSA Node 5 | 통합 로그 | Centralized Logs | 統合ログ |

---

## 6. 기대 효과
*   **브랜딩**: "SyncBoot = 빠른 비즈니스 변화를 가능케 하는 민첩한 플랫폼"이라는 이미지를 시각적으로 각인.
*   **전문성**: 단순한 정적 이미지가 아닌 고도화된 3D 인터랙션을 통해 엠파시의 기술적 우위성 입증.
*   **UX**: 사용자의 스크롤과 마우스 움직임에 반응하여 페이지 체류 시간 및 몰입도 증가.
