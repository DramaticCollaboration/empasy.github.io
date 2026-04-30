# 상세 명세: Company Dark Mode Map with Ping Marker

엠파시 본사의 위치를 세련된 다크 모드 디자인의 지도와 역동적인 마커 애니메이션으로 시각화하여 현대적인 기업 이미지를 전달합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Sophisticated Presence"**
*   **상징성**: 물리적인 오피스 위치를 단순히 정보로 제공하는 것을 넘어, 브랜드 컬러(Teal)와 다크 모드 UI의 조화를 통해 '테크 에이전시'로서의 감각적인 정체성 강조.
*   **사용처**: Company 페이지 'Location & Contact' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 커스텀 다크 맵 (Custom Dark Mode Map)
*   **디자인**: 배경은 딥 네이비 또는 블랙, 도로는 다크 그레이, 주요 건물은 차분한 톤으로 구성된 커스텀 지도 스타일.
*   **라벨**: 텍스트 라벨을 최소화하고 엠파시 본사 주변의 주요 랜드마크만 노출.

### B. 엠파시 핑 마커 (Empasy Ping Marker)
*   **디자인**: 엠파시 로고 또는 민트색 원형 마커.
*   **연출**: 마커를 중심으로 원형의 파동(Ping/Ripple)이 밖으로 끊임없이 퍼져나가는 애니메이션.

### C. 위치 정보 카드 (Location Info Card)
*   **디자인**: 지도 위에 겹쳐진 반투명 유리 질감(Glassmorphism)의 주소 정보창.

## 3. 인터랙션 시나리오 (Interaction)

### A. 마커 펄스 효과 (Pulse Animation)
1. 지도가 화면에 나타나면, 엠파시 본사 위치의 마커가 중앙에서부터 민트색 파동을 발산함.
2. 파동은 밖으로 갈수록 투명해지며 사라지는 링(Ring) 형태.

### B. 지도 탐색 (Map Exploration)
1. 사용자가 지도를 드래그하거나 확대/축소할 수 있으며, 이때 마커는 항상 부드러운 애니메이션과 함께 위치를 유지함.
2. 위치 정보 카드의 '길찾기' 버튼을 클릭하면 구글 맵 또는 카카오 맵으로 연동됨.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Map API**: `Google Maps JavaScript API` (with custom JSON styling) 또는 `Mapbox GL JS`
    - **Marker Animation**: `CSS Animation` (keyframes for scale & opacity)
*   **색상 가이드**:
    - **Map Base**: `#0F172A` (Slate 900)
    - **Roads**: `#1E293B` (Slate 800)
    - **Marker**: `#00D1B2` (Empasy Mint)
    - **Ripple**: `rgba(0, 209, 178, 0.4)`

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| UI | Address | 주소 | Address | 住所 |
| Action | Directions | 길찾기 | Get Directions | ルート案内 |
| Info | Office | 엠파시 본사 | Empasy HQ | エムパシー本社 |

## 6. 기대 효과
*   **브랜드 일관성 유지**: 홈페이지 전체의 다크 & 테크니컬 무드를 지도 영역까지 확장하여 완성도 높은 사용자 경험 제공.
*   **시각적 시선 유도**: 반복적인 핑(Ping) 모션을 통해 사용자의 시선을 본사 위치로 자연스럽게 유도하고 신뢰감 부여.
