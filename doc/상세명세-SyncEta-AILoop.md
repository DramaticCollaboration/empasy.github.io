# 상세 명세: SyncEta AI Feedback Loop & Accuracy Chart

테스트 결과에 대한 피드백을 통해 AI 모델이 스스로 학습하고 정교해지는 지속적 품질 개선 루프를 시각화합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Self-Evolving QA Partner"**
*   **상징성**: 고정된 알고리즘이 아니라, 실제 운영 데이터를 먹고 자라며 시간이 지날수록 기업의 비즈니스 로직을 완벽하게 이해하게 되는 AI의 성장성 부각.
*   **사용처**: SyncEta 페이지 'AI Feedback Loop' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 무한 루프 파이프라인 (Infinite Loop Pipeline)
*   **디자인**: 뫼비우스의 띠 또는 원형으로 순환하는 파이프라인 구조.
*   **단계 노출**: [Feedback] -> [Data Collection] -> [LLM Training] -> [Optimized Test].
*   **연출**: 파이프라인을 따라 빛나는 데이터 입자(Particles)들이 끊임없이 순환함.

### B. AI 정확도 차트 (AI Accuracy Chart)
*   **디자인**: 중앙 또는 하단에 위치한 라인 그래프.
*   **연출**: 데이터 입자가 루프를 한 바퀴 돌 때마다 그래프의 선이 우상향하며 새로운 고점을 찍음.

### C. 모델 성장 아이콘 (Evolving Brain)
*   **디자인**: 루프 중앙의 뇌 아이콘.
*   **연출**: 루프가 반복될수록 아이콘 주위의 네온 광무(Glow)가 더 밝고 화려하게 변함.

## 3. 인터랙션 시나리오 (Interaction)

### A. 자가 진화 데모 (Self-Evolving Loop)
1. 스크롤 진입 시 입자들이 루프를 따라 빠르게 이동하기 시작함.
2. 'LLM Training' 구간을 지날 때 입자들이 강하게 반짝이며 "Learning..." 텍스트 노출.
3. 입자가 한 바퀴를 돌아 'Optimized Test'에 도달하면 중앙의 정확도 차트가 50% -> 75% -> 95%로 점진적으로 상승함.

### B. 호버 하이라이트 (Step Hover)
1. 사용자가 루프의 특정 단계(예: Feedback)에 마우스를 올리면, 해당 단계에서 어떤 데이터가 수집되는지 구체적인 설명 툴팁 팝업.
2. "QA Engineers' Review Data used for LoRA Fine-tuning" 메시지 노출.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Loop Animation**: `SVG Path` + `framer-motion` (Path offset & Particle along path)
    - **Chart**: `Recharts` 또는 `Canvas API` (Dynamic line drawing)
    - **Effect**: `CSS Filter: drop-shadow` (Glowing particles)
*   **색상 가이드**:
    - **Loop Track**: `rgba(255, 255, 255, 0.05)`
    - **Particles**: `#00D1B2` (Mint) and `#3B82F6` (Blue)
    - **Chart Line**: `#10B981` (Emerald 500)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Step | Feedback | 피드백 수집 | Feedback | フィードバック収集 |
| Step | Training | AI 모델 재학습 | AI Training | AIモデル再学習 |
| Metric | Accuracy | 테스트 정확도 | AI Accuracy | テスト正確度 |
| Status | Learning | 학습 중... | Learning... | 学習中... |

## 6. 기대 효과
*   **차별화된 기술력 강조**: 단순한 자동화 도구를 넘어 '학습하는 AI'라는 미래 지향적 가치를 고객에게 전달.
*   **장기 도입 명분 제공**: "사용할수록 더 똑똑해진다"는 메시지를 통해 솔루션 도입의 장기적 혜택 어필.
