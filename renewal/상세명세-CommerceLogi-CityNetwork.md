# 상세 명세: CommerceLogi 3D City Network Parallax

주문 발생부터 배송 완료까지의 전 과정을 3D 도시 맵과 데이터 흐름 애니메이션으로 시각화하여 엠파시의 통합 물류 생태계를 보여줍니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Seamless Commerce-Logistics Flow"**
*   **상징성**: 디지털 주문(Commerce)이 물리적 배송(Logistics)으로 이어지는 끊김 없는 연결성과 AI 기반의 지능적 관제 능력을 강조.
*   **사용처**: CommerceLogi 페이지 'Hero Section'.

## 2. 시각적 구성 (Visual Components)

### A. 3D 도시 맵 (3D City Map)
*   **디자인**: 아이소메트릭(Isometric) 뷰의 미래형 도시 모델링. 빌딩, 도로, 물류 센터(Hub)가 포함됨.
*   **연출**: 마우스 스크롤에 따라 카메라 각도와 위치가 부드럽게 변하는 패럴랙스(Parallax) 효과.

### B. 주문 노드 (Order Node - Phone)
*   **디자인**: 도시 한구석에 떠 있는 거대한 스마트폰 아이콘.
*   **연출**: 스마트폰 화면에서 빛의 파동이 뿜어져 나오며 '주문 발생'을 알림.

### C. 데이터 라인 & 트럭 (Data Lines & Trucks)
*   **디자인**: 스마트폰 -> 물류 센터 -> 각 가정으로 이어지는 빛의 경로 선.
*   **연출**: 선을 따라 데이터 입자들이 흐르고, 그 경로 위를 미니 배송 트럭 아이콘이 질주함.

## 3. 인터랙션 시나리오 (Interaction)

### A. 엔드 투 엔드 플로우 (End-to-End Flow)
1. **시작:** 사용자가 스크롤을 시작하면 스마트폰에서 민트색 빛의 입자가 뿜어져 나와 도로를 따라 흐름.
2. **허브 통과:** 입자가 물류 센터(Hub)에 도달하면 센터 전체가 밝게 빛나며 '분류 및 최적화 중'을 시각화함.
3. **완료:** 최적화된 입자들이 여러 대의 트럭에 나누어 실려 도시 곳곳의 건물들로 퍼져나가며 도착지에서 "Delivery Complete" 툴팁 노출.

### B. 마우스 호버 (Building Hover)
1. 도시 내 물류 센터 건물에 마우스를 올리면 "Inventory: Optimized", "Pending Orders: 1,240" 등의 실시간 데이터 팝업 노출.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **3D Engine**: `Three.js` + `React Three Fiber`
    - **Model**: `GLTF` 형식의 저폴리곤(Low-poly) 도시 모델
    - **Animation**: `GSAP` (Camera path scrolling)
*   **색상 가이드**:
    - **City Base**: `#1E293B` (Slate 800)
    - **Data/Truck Line**: `#00D1B2` (Empasy Mint)
    - **Highlight Hub**: `#007F7A` (Empasy Teal)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Status | Order | 주문 발생 | Order Placed | 注文発生 |
| Status | Sorting | 지능형 분류 | AI Sorting | 知能型仕分け |
| Status | Complete | 배송 완료 | Delivered | 配送完了 |

## 6. 기대 효과
*   **비전의 시각화**: 커머스와 물류가 하나로 통합된 복잡한 비즈니스 프로세스를 직관적인 3D 애니메이션으로 쉽게 이해시킴.
*   **브랜드 프리미엄**: 세련된 3D 비주얼을 통해 '스마트 물류'를 선도하는 기업 이미지를 구축.
