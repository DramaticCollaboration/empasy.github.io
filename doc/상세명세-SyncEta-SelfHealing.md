# 상세 명세: SyncEta Interactive Self-Healing Simulator

UI 구조가 변경되어도 AI가 스스로 새로운 요소를 찾아내어 테스트 중단을 방지하는 SyncEta의 자가 복구(Self-Healing) 능력을 시뮬레이션합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Unstoppable Testing"**
*   **상징성**: 서비스 업데이트로 인한 UI 변경이 잦은 환경에서도 유지보수 비용 없이 테스트의 연속성을 보장하는 지능형 엔진 부각.
*   **사용처**: SyncEta 페이지 'Self-Healing & Visual QA' 섹션.

## 2. 시각적 구성 (Visual Components)

### A. 가상 로그인 화면 (Virtual Login UI)
*   **디자인**: '아이디', '비밀번호' 입력창과 푸른색 'Login' 버튼이 있는 심플한 웹 폼.
*   **연결선**: 버튼과 코드 아이콘(테스트 스크립트)을 잇는 파란색 선.

### B. SyncEta AI Brain
*   **디자인**: 화면 상단 또는 중앙에 위치한 뇌 형상의 인공지능 아이콘.
*   **연출**: 대기 상태에서는 부드럽게 고동치며(Pulse), 문제 발생 시 빨간색으로 점멸.

### C. 스캐닝 레이저 (Scanning Laser)
*   **디자인**: AI Brain에서 뿜어져 나오는 얇고 날카로운 빛의 선.

## 3. 인터랙션 시나리오 (Interaction)

### A. 버튼 위치 강제 변경 (Manual Breaking)
1. 사용자가 화면의 'Login' 버튼을 마우스로 클릭하여 드래그함.
2. 버튼을 원래 위치에서 멀리 떨어진 곳으로 옮기면, 기존의 파란색 연결선이 붉은색으로 변하며 끊어짐(Error 발생).
3. "Locator Failed: Button not found"라는 경고 메시지가 작게 노출됨.

### B. AI 자가 복구 (AI Recovery)
1. 에러 발생 즉시 'SyncEta AI Brain'이 활성화되며 화면 전체를 훑는 레이저 스캔 애니메이션 재생.
2. AI가 새로운 위치의 버튼을 찾아내면, 끊어졌던 연결선이 다시 살아나며 새로운 경로로 버튼에 연결됨.
3. 색상이 다시 파란색(Success)으로 변하며 "Self-Healing Complete: New Locator Found" 툴팁이 나타남.

## 4. 기술 구현 사양 (Technical Specs)
*   **권장 스택**:
    - **DnD**: `framer-motion` (Drag constraints)
    - **Line Drawing**: `SVG Path` with `framer-motion` (Dynamic line routing)
    - **Scanning**: `CSS Linear-gradient` with keyframe animation
*   **색상 가이드**:
    - **Success Blue**: `#3B82F6` (Blue 500)
    - **Error Red**: `#EF4444` (Red 500)
    - **AI Mint**: `#00D1B2` (Empasy Mint)

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| UI | Button | 로그인 버튼 | Login Button | ログインボタン |
| Msg | Error | 위치 변경 감지 | UI Change Detected | 位置変更を検知 |
| Msg | Recover | 자가 복구 완료 | Self-Healed | 自己修復完了 |

## 6. 기대 효과
*   **기술력 체감**: '유지보수가 필요 없다'는 추상적인 설명을 직접 버튼을 옮겨보는 행동을 통해 확신으로 전환.
*   **사용자 재미**: 게임 같은 인터랙션을 통해 자칫 지루할 수 있는 B2B 솔루션 소개에 활력 부여.
