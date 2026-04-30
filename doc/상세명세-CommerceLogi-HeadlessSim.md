# 상세 명세: SyncShop Interactive Headless Assembly Simulator

백엔드(API)와 프론트엔드가 분리되어 다양한 판매 채널에 즉각 대응할 수 있는 SyncShop의 헤드리스 커머스 아키텍처를 시뮬레이션합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Decoupled Agility"**
*   **상징성**: 하나의 강력한 커머스 코어(Core API)에 웹, 앱, 키오스크 등 어떤 인터페이스든 자유롭게 붙여 비즈니스를 확장할 수 있는 유연성 강조.
*   **사용처**: CommerceLogi 페이지 'SyncShop: Headless eCommerce' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. SyncShop Core API (Backend Cube)
*   **디자인**: 화면 중앙에 위치한 거대하고 빛나는 3D 큐브. 큐브 표면에는 API 엔드포인트 코드가 홀로그램처럼 흐름.
*   **연출**: 주기적으로 맥동(Pulse)하며 에너지를 발산함.

### B. 채널 아이콘 (Channel Icons - Left)
*   **디자인**: 'PC Web', 'Mobile App', 'Kiosk', 'Social' 아이콘이 담긴 둥근 카드들.
*   **연출**: 드래그가 가능하다는 것을 알리기 위해 가볍게 떠 있는(Floating) 모션 적용.

### C. 프리뷰 UI (Preview UI - Right)
*   **디자인**: 각 채널 아이콘이 코어에 연결될 때 나타나는 해당 기기 형태의 레이아웃 프레임.

## 3. 인터랙션 시나리오 (Interaction)

### A. 드래그 앤 연결 (Drag & Connect)
1. 사용자가 좌측의 'Kiosk' 아이콘을 클릭하여 중앙의 'Core API' 큐브 위로 드래그함.
2. 큐브 근처에 도달하면 자석처럼 착 달라붙는(Snapping) 효과와 함께 강력한 빛의 연결선(Link)이 생성됨.
3. 연결 즉시 우측 공간에 세련된 '키오스크 전용 주문 화면' UI가 페이드인되며 나타남.
4. "Kiosk Interface Synchronized!"라는 성공 메시지 노출.

### B. 멀티 채널 확장 (Multi-channel Expansion)
1. 여러 개의 아이콘을 동시에 큐브에 연결할 수 있음.
2. 아이콘이 추가될 때마다 코어 큐브의 색상이 더 다채로워지며 확장되는 생태계를 시각화함.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **DnD**: `dnd-kit` (Custom collision detection for the cube)
    - **3D**: `React Three Fiber` (Core cube)
    - **Animation**: `framer-motion` (UI preview transitions)
*   **색상 가이드**:
    - **Core Cube**: `#00D1B2` (Empasy Mint)
    - **Connection Line**: `#3B82F6` (Blue 500)
    - **UI Preview BG**: `#F8FAFC` (Slate 50)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Channel | Kiosk | 키오스크 | Kiosk | キオスク |
| Channel | Web | 웹 쇼핑몰 | Web Store | ウェブショップ |
| Msg | Sync | 인터페이스 동기화 완료 | Sync Successful | 同期完了 |
| Status | Core | 커머스 코어 API | Commerce Core API | コマースコアAPI |

## 6. 기대 효과
*   **구조적 장점 부각**: '헤드리스(Headless)'라는 어려운 기술 용어를 '조립'이라는 쉬운 비유로 풀어내어 고객의 심리적 장벽 제거.
*   **확장성 경험**: 새로운 채널을 추가하는 것이 얼마나 빠르고 쉬운지 직접 체험하게 함으로써 시스템 도입의 효능감 전달.
