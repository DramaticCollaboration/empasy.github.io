# 상세 명세: SyncBoot CI/CD Pipeline Progress

코드 개발부터 배포까지의 전 과정을 자동화하는 CI/CD 파이프라인(Jenkins/GitLab)의 진행 상황을 시각적인 프로그레스 바와 단계별 스테이지 애니메이션으로 표현합니다.

## 1. 개요 (Overview)
*   **컨셉**: **"Smooth Journey to Production"**
*   **상징성**: 복잡한 빌드/테스트/배포 과정을 하나의 유기적인 흐름으로 시각화하여, 개발자의 생산성 향상과 배포 안정성을 강조.
*   **사용처**: SyncBoot 관찰성(Observability) 섹션 - CI/CD Pipeline 탭.

## 2. 시각적 구성 (Visual Components)

### A. 스테이지 로드맵 (Stage Roadmap)
*   **디자인**: 수평 방향으로 배열된 5개의 아이콘화된 스테이지 노드.
    1. **Checkout**: 소스 코드 체크아웃 (Git 아이콘)
    2. **Build**: 컴파일 및 패키징 (Box 아이콘)
    3. **Test**: 단위/통합 테스트 (Checklist 아이콘)
    4. **Dockerize**: 컨테이너 이미지 생성 (Whale 아이콘)
    5. **Deploy**: 쿠버네티스 배포 (K8s 아이콘)

### B. 액티브 프로그레스 라인 (Active Progress Line)
*   **디자인**: 노드 사이를 연결하는 굵은 트랙.
*   **동작**: 현재 진행 중인 단계까지 민트색 게이지가 차오르며, 진행 중인 노드 주위에는 로딩 스피너(Spinner) 또는 펄스(Pulse) 효과 발생.

## 3. 애니메이션 시나리오 (Animation Scenario)

1.  **Stage 1: Checkout**: Git에서 코드를 가져오는 애니메이션 (약 1초).
2.  **Stage 2: Build**: 막대 게이지가 빠르게 차오르며 "Compiling..." 텍스트 노출.
3.  **Stage 3: Test**: "Testing..." 문구와 함께 테스트 통과를 나타내는 작은 체크 표시들이 연속적으로 나타남.
4.  **Stage 4: Dockerize**: 상자 아이콘이 도커 이미지 아이콘으로 변하는 변신 애니메이션.
5.  **Stage 5: Deploy**: 로켓 아이콘이 위로 발사되거나 클라우드 아이콘 안으로 들어가는 연출과 함께 "SUCCESS" 메시지 출력.

---

## 4. 기술 구현 사양 (Technical Specs)

*   **권장 스택**: 
    - **Animation**: `Framer Motion` (Layout transitions & variants)
    - **Icons**: `Lucide React` 또는 `React Icons`
    - **Timeline**: `GSAP` (정밀한 시퀀스 애니메이션 제어)
*   **색상 가이드**:
    - **Active**: `#00D1B2` (Empasy Mint)
    - **Inactive**: `#334155` (Slate 700)
    - **Success Glow**: `#5EEAD4` (Teal 300)
    - **Error**: `#F43F5E` (Rose 500)

---

## 5. 다국어 콘텐츠 정의 (Multi-language)

| 구분 | Key | 한국어 (KO) | English (EN) | 일본어 (JP) |
| :--- | :--- | :--- | :--- | :--- |
| Stage | Build | 빌드 중 | Building | ビルド中 |
| Stage | Test | 테스트 검증 | Testing | テスト検証 |
| Stage | Deploy | 배포 완료 | Deployed | デプロイ完了 |
| UI | Pipeline Title | 자동화 파이프라인 | Automation Pipeline | 自動化パイプライン |

---

## 6. 기대 효과
*   **신속성 시각화**: 배포까지의 과정이 막힘없이 빠르게 진행됨을 보여주어 "Agility" 컨셉을 뒷받침.
*   **프로세스 투명성**: 개발 프로세스의 표준화를 시각적으로 제시하여 기술적 신뢰도 제고.
