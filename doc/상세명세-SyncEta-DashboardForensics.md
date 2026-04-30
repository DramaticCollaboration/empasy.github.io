# 상세 명세: SyncEta Live Dashboard & Forensic Video Playback

수백 개의 테스트가 병렬로 실행되는 현황을 모니터링하고, 에러 발생 시점의 영상을 즉시 확인하여 결함 원인을 분석하는 관리 환경을 구현합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Multimedia Test Forensics"**
*   **상징성**: 단순히 텍스트 로그만 제공하는 것이 아니라, 실제 에러가 발생한 상황을 비디오로 증명하여 개발자와 QA 사이의 커뮤니케이션 비용을 획기적으로 줄여주는 효율성 강조.
*   **사용처**: SyncEta 페이지 'Real-time Dashboard & TestOps' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 라이브 대시보드 (Live Dashboard UI)
*   **디자인**: 다크 모드 기반의 세련된 표(Table) UI.
*   **구성**: '테스트 케이스명', '기기/브라우저', '실행 상태', '결과'.
*   **연출**: 실행 중인 행(Row)에는 "Running..." 상태등이 깜빡이며 파동 그래픽이 흐름.

### B. 에러 로그 하이라이트 (Error Log Highlight)
*   **디자인**: 결과가 'Failed'인 행은 배경이 붉은색으로 강조됨.

### C. 타임머신 비디오 팝업 (Video Forensic Popup)
*   **디자인**: 에러 행 위에 마우스를 올렸을 때 나타나는 말풍선 형태의 미니 플레이어.
*   **연출**: 에러 발생 5초 전부터의 브라우저 화면이 자동 재생(Loop)됨.

## 3. 인터랙션 시나리오 (Interaction)

### A. 병렬 실행 모니터링 (Parallel Execution)
1. 스크롤 진입 시 대시보드의 여러 행에서 동시에 테스트가 진행되는 애니메이션 재생.
2. 초저지연 소켓 통신을 상징하는 파동 그래픽이 대시보드 전체를 가로질러 흐름.

### B. 에러 포렌식 체험 (Forensic Hover)
1. 사용자가 'Failed'라고 표시된 특정 행에 마우스를 올림.
2. 즉시 비디오 팝업이 나타나며, 로그인 버튼을 클릭했는데 서버 응답이 없어 에러가 발생하는 과정이 영상으로 재생됨.
3. 팝업 하단에 "Error Code: Timeout", "Captured at: Step 4" 정보 노출.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **Layout**: `CSS Grid` / `Flexbox`
    - **Animation**: `framer-motion` (Hover scale, Fade-in popups)
    - **Video**: `HTML5 Video` (Muted, Autoplay, Loop) or `GIF` (Optimized)
*   **색상 가이드**:
    - **Dashboard BG**: `#0F172A` (Slate 900)
    - **Running State**: `#3B82F6` (Blue) with Glow
    - **Failed State**: `#EF4444` (Red) with subtle pulse

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Table | Case | 테스트 케이스 | Test Case | テストケース |
| Table | Status | 상태 | Status | 状態 |
| Status | Running | 실행 중... | Running... | 実行中... |
| Action | Forensic | 영상 증빙 확인 | Check Video | ビデオ確認 |

## 6. 기대 효과
*   **운영 편의성 어필**: 대규모 테스트 환경을 한눈에 통제할 수 있다는 관리적 이점 강조.
*   **결함 해결 속도 강조**: 재현 불가능한 '간헐적 오류'도 영상을 통해 완벽하게 잡아낼 수 있다는 강력한 기능적 차별점 전달.
