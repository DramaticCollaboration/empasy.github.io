# 상세 명세: Use Cases Impact Metrics Radial Charts

성공 사례를 통해 증명된 생산성 향상, 비용 절감 등의 핵심 지표를 역동적인 원형(Radial) 차트로 시각화합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Performance Proven by Data"**
*   **상징성**: 추상적인 '혁신'이라는 말을 넘어, 실제 비즈니스 현장에서 달성한 압도적인 수치(KPI)를 통해 솔루션의 효능을 증명.
*   **사용처**: UseCases 페이지 'Impact Metrics' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 3개의 도넛형 차트 (Three Radial Charts)
*   **디자인**: 중앙에 수치가 있고 테두리가 채워지는 도넛 형태의 차트 3개 나열.
*   **차트 1**: **"80% TC Reduction"** (테스트 케이스 작성 시간 단축)
*   **차트 2**: **"Cost Down"** (운영 리소스 및 비용 절감 상징)
*   **차트 3**: **"0ms Latency"** (피크 타임 응답 지연 최소화 상징)

### B. 카운트 업 텍스트 (Count-up Text)
*   **디자인**: 차트 중앙의 큰 숫자.
*   **연출**: 0에서 목표 수치까지 빠르게 올라감.

### C. 하단 레이블 (Bottom Labels)
*   **디자인**: 각 차트의 의미를 설명하는 서브 텍스트.

## 3. 인터랙션 시나리오 (Interaction)

### A. 스크롤 연동 차트 그리기 (Draw on Scroll)
1. 사용자가 스크롤하여 해당 섹션에 도달하면 애니메이션 시작.
2. 빈 도넛 형태에서 테두리 선이 엠파시 브랜드 컬러(Mint/Teal)로 채워지기 시작함.
3. 선이 채워지는 속도와 동기화되어 중앙의 숫자가 0%에서 80% 등으로 빠르게 올라감.

### B. 부드러운 호버 반응 (Hover Glow)
1. 특정 차트에 마우스를 올리면 차트 전체가 은은하게 빛나며(Outer Glow), 수치 하단에 구체적인 성과 지표(예: "Based on LG Case") 툴팁 노출.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Chart**: `SVG Circle` (stroke-dasharray & stroke-dashoffset 애니메이션)
    - **Animation**: `framer-motion` (View-port trigger, Path transitions)
    - **Number Counter**: `react-countup`
*   **색상 가이드**:
    - **Track BG**: `rgba(255, 255, 255, 0.1)`
    - **Active Bar**: `#00D1B2` (Empasy Mint)
    - **Center Number**: `#FFFFFF` (Solid White)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Chart1 | Desc | TC 작성 시간 단축 | TC Creation Saved | TC作成時間短縮 |
| Chart2 | Desc | 운영 비용 절감 | Cost Reduction | 運用コスト削減 |
| Chart3 | Desc | 응답 지연 최소화 | Zero Latency | 応答遅延の最小化 |

## 6. 기대 효과
*   **객관적 신뢰성 확보**: 정량적인 수치를 화려한 시각 효과와 함께 제시함으로써 고객의 의사결정에 강력한 논리적 근거 제공.
*   **정보의 가독성**: 긴 성공 사례 텍스트를 읽지 않더라도, 핵심 성과를 단번에 파악할 수 있도록 도움.
