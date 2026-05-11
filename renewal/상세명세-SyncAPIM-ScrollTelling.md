# 상세 명세: SyncAPIM Scroll-Telling Architecture Map

사용자의 스크롤 흐름에 따라 API의 설계부터 분석까지의 전체 라이프사이클이 단계적으로 활성화되는 인터랙티브 아키텍처 맵을 구현합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Full Lifecycle Illumination"**
*   **상징성**: API 플랫폼이 단순히 호출만 중계하는 것이 아니라, 개발-운영-분석의 전 과정을 통합 관리한다는 가치를 스토리텔링 방식으로 전달.
*   **사용처**: SyncAPIM 페이지 'Full Lifecycle Management' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 아키텍처 맵 베이스 (Architecture Map Base)
*   **디자인**: 배경에 희미하게 그려진 논리 아키텍처 다이어그램 (박스와 연결선 형태).
*   **구성**: 'Developer Services', 'API Gateway Services', 'Analytics Services' 3단계 층(Layer).

### B. 서비스 블록 (Service Blocks)
*   **디자인**: 각 단계에 속한 기능 아이콘 (Smart Doc, Security, OAuth, Metric Chart 등).
*   **연출**: 비활성 상태에서는 투명도가 낮고 회색빛을 띄다가, 활성화 시 고유의 브랜드 컬러로 빛남.

### C. 데이터 연결선 (Connector Lines)
*   **디자인**: 블록 사이를 잇는 점선 또는 실선.
*   **연출**: 하위 단계가 활성화되면 상위 단계로 빛이 흐르며 연결됨을 표시.

## 3. 인터랙션 시나리오 (Interaction)

### A. 단계별 활성화 (Step-by-step Lighting)
1. **1단계 (Developer):** 사용자가 스크롤을 내리면 하단 'Developer Services' 영역의 불이 켜지며 API 문서가 생성되는 애니메이션 재생.
2. **2단계 (Gateway):** 더 내리면 중앙 'API Services' 영역이 활성화됨. 보안 방패 아이콘이 나타나고 정책(Policy)이 적용되는 모션.
3. **3단계 (Analytics):** 마지막으로 상단 'Analytics Services' 영역이 빛나며 대시보드 그래프가 위로 솟아오름.

### B. 텍스트 동기화 (Text Sync)
1. 각 단계가 활성화될 때마다 좌측 또는 우측의 설명 텍스트가 하이라이트되거나 페이드인됨.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Scroll Control**: `Framer Motion` (useScroll, useTransform) 또는 `GSAP` (ScrollTrigger)
    - **SVG Animation**: `react-lottie` 또는 `SVG stroke-dashoffset` (연결선 연출)
*   **색상 가이드**:
    - **Inactive**: `#94A3B8` (Slate 400)
    - **Active Developer**: `#3B82F6` (Blue)
    - **Active Gateway**: `#00D1B2` (Empasy Mint)
    - **Active Analytics**: `#F59E0B` (Amber)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Layer | Developer | 개발자 서비스 | Developer Services | 開発者サービス |
| Layer | Gateway | API 서비스 | API Services | APIサービス |
| Layer | Analytics | 분석 서비스 | Analytics Services | 分析サービス |
| Feature | SmartDoc | 스마트 문서 | Smart Doc | スマートドキュメント |

## 6. 기대 효과
*   **정보 전달력 향상**: 복잡한 아키텍처를 한 번에 보여주지 않고 단계별로 노출하여 사용자의 이해도를 높임.
*   **전문성 강조**: API 관리의 전 과정을 아우르는 플랫폼의 완성도를 시각적으로 증명.
