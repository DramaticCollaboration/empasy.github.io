# 상세 명세: CommerceLogi Document AI & JSON Transformation

수작업으로 처리하던 물류 영수증, 계약서 등 비정형 문서를 AI가 스캔하여 구조화된 데이터(JSON)로 즉각 변환하는 과정을 시각화합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Unstructured to Structured"**
*   **상징성**: 물리적인 종이 문서나 이미지 데이터를 디지털 자산으로 전환하는 SyncLogi의 OCR 및 NLP 기술력을 강조.
*   **사용처**: CommerceLogi 페이지 'Document AI & Enterprise RAG' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 원본 문서 (Raw Documents - Left)
*   **디자인**: 구겨진 종이 영수증, 복잡한 표가 담긴 PDF 계약서 이미지.
*   **연출**: 약간의 노이즈와 함께 아날로그적인 느낌 강조.

### B. AI 스캐닝 모듈 (AI Scanning Module - Center)
*   **디자인**: 수직으로 위아래 이동하는 밝은 레이저 빔(Scanning Bar).

### C. 구조화 데이터 (Structured JSON - Right)
*   **디자인**: 세련된 코드 에디터 스타일의 검은색 배경 박스.
*   **구성**: 중괄호`{}`와 키-값 쌍`"date": "2024-04-30"` 형태의 텍스트.

## 3. 인터랙션 시나리오 (Interaction)

### A. 실시간 데이터 변환 (Transformation)
1. 스크롤 진입 시 좌측의 영수증 이미지가 중앙의 레이저 빔을 통과함.
2. 레이저가 영수증의 글자를 훑을 때마다, 우측 코드 박스에서 해당 데이터가 한 줄씩 타이핑(Typewriter Effect)되며 나타남.
    - 영수증의 "2024.04.30" -> JSON의 `"date": "2024-04-30"`
    - 영수증의 "Total: $500" -> JSON의 `"total_amount": 500`
3. 변환이 완료되면 코드 박스 상단에 "OCR Accuracy: 97.4%" 배지가 나타남.

### B. 결과 하이라이트 (Hover Sync)
1. 사용자가 우측 JSON 데이터의 특정 라인에 마우스를 올림.
2. 좌측 원본 문서 이미지에서 해당 데이터가 위치한 영역이 사각형으로 강조(Bounding Box)됨.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Animation**: `framer-motion` (Scanning motion, Typewriter effect)
    - **Code Highlighting**: `react-syntax-highlighter` 또는 직접 커스텀 스타일링
*   **색상 가이드**:
    - **Scanner Beam**: `#00D1B2` (Empasy Mint)
    - **JSON Key**: `#3B82F6` (Blue)
    - **JSON Value**: `#F59E0B` (Amber)
    - **Bounding Box**: `rgba(0, 209, 178, 0.4)`

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| UI | Raw | 비정형 문서 | Raw Document | 非定型ドキュメント |
| UI | Structured | 구조화 데이터 | Structured Data | 構造化データ |
| Status | Accuracy | OCR 정확도 | Accuracy | OCR正確度 |
| Action | Processing | 문서 분석 중... | Processing... | ドキュメント分析中... |

## 6. 기대 효과
*   **업무 효율성 강조**: 단순 반복적인 문서 입력 작업을 AI가 완벽하게 대체할 수 있음을 시각적으로 체감시킴.
*   **기술적 신뢰도**: 비정형 데이터가 질서 정연한 코드로 변하는 과정을 통해 솔루션의 정교함을 부각.
