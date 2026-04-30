# 상세 명세: Data Ingestion Particle Animation

효성ITX의 AI 컨택센터 데이터를 수집하고 학습 데이터로 변환하는 과정을 역동적인 파티클 애니메이션으로 구현합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Flow of Intelligence"**
*   **상징성**: 콜센터 음성 데이터, 텍스트, 메타데이터 등 다양한 형태의 비정형 데이터가 엠파시 파이프라인으로 유입되어 가치 있는 지능으로 변모하는 과정을 시각화.
*   **사용처**: UseCases 페이지 - 효성ITX 카드 Hover Motion.

## 2. 시각적 구성 (Visual Components)

### A. 데이터 소스 노드 (Data Source Nodes)
*   **디자인**: 화면 좌측에 흩어져 있는 다채로운 아이콘(Mic, Message, File, User).
*   **연출**: 불규칙하게 고동치며 데이터가 생성되고 있음을 암시.

### B. 파티클 스트림 (Particle Stream)
*   **디자인**: 수많은 작은 빛의 점(Particles)들이 좌에서 우로 빠르게 흐름.
*   **연출**: 파티클의 색상이 유입 시에는 화이트/그레이 계열이다가, 중앙의 필터를 지나며 엠파시 민트 컬러(#00D1B2)로 변화함.

### C. 센트럴 인텔리전스 허브 (Central Intelligence Hub)
*   **디자인**: 화면 우측의 육각형(Hexagon) 또는 원형 코어.
*   **연출**: 유입된 파티클들이 이곳으로 모여들며 코어가 점점 더 강하게 발광함.

## 3. 애니메이션 시나리오 (Animation Scenario)

1.  **초기 상태**: 소수의 파티클이 느리게 떠다니는 정적인 상태.
2.  **호버 시 (Hover)**:
    *   **Burst**: 데이터 소스 아이콘에서 수만 개의 파티클이 동시에 방출됨.
    *   **Flow**: 파티클들이 보이지 않는 강물처럼 하나의 거대한 줄기를 형성하여 우측 허브를 향해 가속하며 이동.
    *   **Transformation**: 중앙의 보이지 않는 선을 지날 때 파티클들이 민트색으로 반짝이며 정제됨(Cleansing & Processing).
3.  **완료 연출**: 허브가 가득 차오르며 "AI Model Ready" 텍스트와 함께 데이터 처리량(예: 1TB/Day) 수치가 노출됨.

## 4. 기술 구현 사양 (Technical Specs)

*   **권장 스택**:
    *   **Particle Engine**: `Canvas API` 또는 `Three.js Points`
    *   **Physics**: `framer-motion`의 `layout` 또는 단순 CSS Keyframes (성능 최적화 필수)
*   **색상 가이드**:
    *   **Raw Data**: `#CBD5E1` (Slate 300)
    *   **Processed Data**: `#00D1B2` (Empasy Mint)
    *   **Hub Glow**: `#5EEAD4` (Teal 300)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Process | Ingesting | 데이터 수집 중 | Ingesting Data | データ収集会中 |
| Process | Cleaning | 데이터 정제 | Data Cleansing | データ精製 |
| Process | Analysis | 분석 완료 | Analysis Done | 分析完了 |

## 6. 기대 효과
*   **빅데이터 처리 역량 어필**: 방대한 양의 데이터를 실시간으로 처리할 수 있는 파이프라인의 성능을 직관적으로 이해시킴.
*   **AI 생태계 중심성 강조**: 단순한 저장소가 아닌, 데이터를 지능으로 바꾸는 "엔진"으로서의 엠파시 역할을 강조.
