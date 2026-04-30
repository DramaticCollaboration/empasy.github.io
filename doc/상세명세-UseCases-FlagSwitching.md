# 상세 명세: 15개국 국기 스위칭 & 동기화 애니메이션

LX하우시스의 글로벌 웹사이트를 통합 관리하는 엠파시 CMS의 멀티테넌트(Multi-tenant) 및 글로벌 동기화 기능을 시각화합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Global Synchronization"**
*   **상징성**: 전 세계 15개국 이상의 사이트에 동일한 브랜드 자산을 동시에 배포하고 관리할 수 있는 일관성과 편의성을 강조.
*   **사용처**: UseCases 페이지 - LX하우시스 카드 Hover Motion.

## 2. 시각적 구성 (Visual Components)

### A. 글로벌 맵 그리드 (Global Map Grid)
*   **디자인**: 15개국의 국기가 바둑판 형태의 그리드로 배열됨.
*   **연출**: 각 국기 아이콘은 원형 또는 둥근 사각형 안에 부드럽게 배치됨.

### B. 센트럴 마스터 자산 (Central Master Asset)
*   **디자인**: 그리드 중앙 또는 상단에 위치한 '마스터 문서' 또는 '이미지' 아이콘.
*   **연출**: 마스터 자산이 수정되면 빛이 번져나가는 연출 발생.

### C. 동기화 라인 (Sync Lines)
*   **디자인**: 마스터 자산에서 각 국가 국기로 연결되는 얇은 선들.
*   **연출**: 실시간으로 데이터가 전달됨을 보여주는 흐르는 빛 효과.

## 3. 애니메이션 시나리오 (Animation Scenario)

1.  **초기 상태**: 15개국의 국기가 회색조(Grayscale)로 비활성화된 채 그리드에 배치됨.
2.  **호버 시 (Hover)**:
    *   **Master Trigger**: 중앙의 마스터 아이콘이 엠파시 민트 컬러로 빛나며 펄스(Pulse) 발생.
    *   **Propagation**: 빛의 파동이 중앙에서 사방으로 퍼져나가며 각 국가의 국기에 닿음.
    *   **Coloring**: 빛이 닿은 국기들이 하나씩 제 색깔을 찾으며 활성화됨 (순차적 페이드인).
    *   **Sync Stamp**: 각 국기 우측 하단에 작은 'Sync Check' 아이콘이 나타남.
3.  **완료 연출**: 모든 국기가 선명하게 빛나며 "15 REGIONS SYNCED" 메시지 노출.

## 4. 기술 구현 사양 (Technical Specs)

*   **권장 스택**:
    *   **Animation**: `Framer Motion` (Staggered animation for grid items)
    *   **Icons**: High-quality SVG Flags
*   **색상 가이드**:
    *   **Inactive**: `grayscale(100%)` with low opacity
    *   **Active**: Original flag colors with high saturation
    *   **Sync Light**: `#00D1B2` (Empasy Mint)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Action | Syncing | 국가별 동기화 중 | Syncing Across Regions | 地域別同期中 |
| Status | AllUpdated | 전 국가 업데이트 완료 | All Regions Updated | 全地域更新完了 |
| Metric | Countries | 15개국 통합 관리 | 15 Countries Integrated | 15カ国統合管理 |

## 6. 기대 효과
*   **운영 효율성 시각화**: 수많은 글로벌 사이트를 개별적으로 관리할 필요 없이 한 곳에서 통제할 수 있다는 강력한 운영상 이점을 전달.
*   **브랜드 일관성 강조**: 전 세계 어디서나 동일한 브랜드 경험을 제공할 수 있다는 신뢰감 구축.
