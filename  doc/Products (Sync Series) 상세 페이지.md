# 📝 Products (Sync Series) 상세 페이지 화면 명세서

## 1. 페이지 공통 전략 (Common Strategy)
모든 Sync Series(Eta, Boot, CMS, Crawl, Insight, APIM) 제품 페이지는 **통일된 레이아웃(Master Template)**을 유지하되, 각 솔루션의 특성에 맞는 **고유한 콘텐츠(Content Asset)**를 배치합니다.

*   **디자인 컨셉:** **"Visualized Intelligence"** (보이지 않는 백엔드 로직과 AI 프로세스를 시각화)
*   **스크롤 흐름:** **[Attention(비전)] $\rightarrow$ [Interest(기능)] $\rightarrow$ [Desire(기술/아키텍처)] $\rightarrow$ [Conviction(사례/ROI)] $\rightarrow$ [Action(문의)]**
*   **네비게이션:** 페이지 내 스크롤 이동을 위한 **Sticky Sub-Nav** (개요 | 주요기능 | 아키텍처 | 기대효과 | 도입문의) 적용.

---

## 2. 상세 화면 구성 명세 (Section-by-Section)

### **Section 1: Hero Visual (제품 아이덴티티 정의)**
방문자가 가장 먼저 마주하는 영역으로, 제품의 핵심 가치를 한 줄로 정의하고 강렬한 인상을 남깁니다.

*   **배경 (Visual):** 각 제품을 상징하는 **3D 아이소메트릭 모션 그래픽**.
    *   *예: SyncEta는 코드를 분석하는 AI 뇌와 로봇팔, SyncBoot는 연결된 컨테이너 블록.*
*   **카피 (Copywriting):**
    *   **Main Title:** 제품명 (예: **SyncEta**)
    *   **Slogan:** 핵심 가치 (예: **"사람처럼 이해하고, 기계처럼 테스트하라"**)
    *   **Description:** 2줄 내외의 정의. (예: LLM 기반 자연어 테스트 생성 및 자가 치유(Self-Healing)를 지원하는 차세대 AI QA 플랫폼)
*   **CTA 버튼:**
    *   [Primary] **도입 문의하기**
    *   [Secondary] **브로슈어 다운로드 (PDF)**

---

### **Section 2: Key Problem & Solution (문제 해결 능력)**
고객의 통점(Pain Point)을 건드리고, 엠파시 솔루션이 이를 어떻게 해결하는지 대조하여 보여줍니다.

*   **레이아웃:** 좌우 분할 구조 (Left: Before / Right: After with Empasy)
*   **콘텐츠 예시 (SyncEta의 경우):**
    *   **Before (Pain Point):** "잦은 배포로 인한 QA 병목 현상, UI 변경 시마다 깨지는 테스트 스크립트 유지보수 지옥."
    *   **After (Solution):** "자연어 명령 한 줄로 테스트 케이스 자동 생성. UI가 바뀌어도 AI가 스스로 고치는 **Self-Healing** 기술."
*   **UI 요소:** 중앙에 화살표 또는 전환 애니메이션을 넣어 **변화(Transformation)**를 강조.

---

### **Section 3: Core Features (핵심 기능 4~6종)**
제품의 기술적 우위를 증명하는 핵심 기능을 아이콘과 함께 카드 형태로 나열합니다.

*   **UI 스타일:** 2x3 또는 3x2 그리드 카드 UI. 마우스 오버 시 상세 설명 노출 (Flip or Expand).
*   **제품별 콘텐츠 매핑:**
    *   **SyncEta:**
        1.  **AI Test Gen:** 자연어(Excel) 기획서를 분석하여 실행 코드 자동 생성.
        2.  **Self-Healing:** DOM 구조 변경을 감지하여 스크립트 자동 복구.
        3.  **Playwright MCP:** 멀티 브라우저 병렬 실행 및 초고속 검증.
        4.  **Visual Check:** 픽셀 단위 화면 깨짐 및 결제 로직 검증.
    *   **SyncBoot:**
        1.  **MSA Standard:** Spring Cloud 기반 표준 마이크로서비스 아키텍처.
        2.  **E2E DevOps:** CI/CD부터 모니터링까지 통합 툴체인 제공.
        3.  **Container Orch:** Docker/Kubernetes 기반 오토 스케일링.
    *   **SyncCMS:**
        1.  **Modular Structure:** 필요한 기능만 선택 조립하는 유연한 모듈 구조.
        2.  **SEO Native:** 검색 엔진 최적화 기본 탑재.
        3.  **Visual Layout:** 드래그 앤 드롭 방식의 페이지/템플릿 관리.
    *   **SyncInsight:**
        1.  **On-Premise AI:** 데이터 유출 없는 내부망 전용 LLM 구축.
        2.  **Multi-Agent:** 수집-분석-보고 에이전트 간 협업 워크플로우.
        3.  **RAG Engine:** 사내 문서 기반의 정확한 답변 생성.

---

### **Section 4: System Architecture (기술적 신뢰도)**
SI 제안서 스타일의 아키텍처 다이어그램을 웹에 맞게 인터랙티브하게 구현하여 전문성을 강조합니다.

*   **Visual:** **논리/물리 아키텍처 다이어그램**.
    *   사용자가 다이어그램의 특정 요소(예: AI Engine, DB, Gateway)에 마우스를 올리면 해당 기술 스택(Java, Vue, Python 등)이 툴팁으로 표시됨.
*   **강조 포인트:**
    *   **"Cloud Native"** & **"Vendor Neutral"** (특정 벤더 종속 없음).
    *   **"Security First"** (AES 암호화, OWASP 대응).

---

### **Section 5: Performance & ROI (정량적 효과)**
추상적인 형용사 대신 구체적인 숫자와 그래프로 도입 효과를 증명합니다.

*   **레이아웃:** 대형 숫자(Big Number) 타이포그래피 + 상승하는 그래프 애니메이션.
*   **데이터 소스:**
    *   **비용 절감:** 테스트케이스 작성 시간 **80% 단축**.
    *   **생산성:** QA 및 운영 리소스 효율 **30% 증대**.
    *   **품질:** 주요 기능 장애(Regression) **Zero** 달성.
    *   **속도:** 배포 주기(Time-to-Market) 혁신적 단축.

---

### **Section 6: Integration Strategy (확장성 & 연동)**
Sync Series 제품들이 서로 어떻게 연결되는지(SyncVerse), 그리고 기존 레거시 시스템과 어떻게 연동되는지 보여줍니다.

*   **Visual:** 중앙의 **n8n Workflow** 아이콘을 중심으로 각 제품과 외부 툴(Jira, Slack, Git)이 연결되는 흐름도.
*   **시나리오 예시:**
    *   *"Git 코드 커밋 $\rightarrow$ SyncEta 테스트 자동 트리거 $\rightarrow$ 성공 시 SyncBoot 배포 $\rightarrow$ Slack 알림"*.

---

### **Section 7: Tech Specs (기술 명세)**
개발자나 IT 담당자가 확인해야 할 기술 스택을 명시합니다.

*   **형식:** 표(Table) 또는 배지(Badge) 리스트.
*   **항목:**
    *   **Backend:** Java 17+, Spring Boot 3.x, Spring Cloud.
    *   **Frontend:** Vue 3, Vite, TypeScript, Quasar.
    *   **Database:** MySQL, Redis, Elasticsearch, Vector DB.
    *   **AI/Infra:** Mistral/Llama(LLM), Docker, Kubernetes, Playwright.

---

### **Section 8: Floating CTA & Footer (문의 유도)**
페이지 하단, 또는 스크롤 시 따라다니는 플로팅 바.

*   **메시지:** **"귀사의 비즈니스에 맞는 데모를 확인해보세요."**
*   **버튼:** [무료 데모 신청] [견적 문의]
*   **신뢰 요소:** 하단에 **GS인증 1등급(예정), 벤처기업 인증** 마크 노출.

---

## 3. 제품별 특화 콘텐츠 가이드 (Content Variation)

### **A. SyncEta (주력 제품)**
*   **핵심 영상:** 엑셀 파일을 업로드하자마자 브라우저가 자동으로 열려 클릭/입력을 수행하는 **'Zero-Recording'** 시연 영상 삽입.
*   **강조 키워드:** **No-Code**, **Self-Healing**, **Regression Test**.

### **B. SyncBoot (기반 플랫폼)**
*   **핵심 이미지:** 복잡한 마이크로서비스들이 깔끔하게 정리된 **대시보드 화면** 및 **토폴로지 맵**.
*   **강조 키워드:** **Open Source**, **Standard**, **E2E Platform**.

### **C. SyncInsight (신규 전략 제품)**
*   **핵심 이미지:** 수많은 문서 아이콘이 깔때기를 통과해 하나의 **'리포트'**로 변환되는 인포그래픽.
*   **강조 키워드:** **Data Sovereignty(데이터 주권)**, **On-Premise**, **Actionable Insight**.

---

## 4. 개발 시 고려사항 (Implementation Note)

1.  **반응형 웹:** 모든 다이어그램과 표는 모바일 환경에서 가독성을 해치지 않도록 **Stacking** 되거나 **가로 스크롤** 처리되어야 함.
2.  **SEO 태그:** 각 페이지별 `meta description`, `og:image`를 제품 특성에 맞게 개별 설정 (예: "AI 테스트 자동화 솔루션 - SyncEta").
3.  **성능 최적화:** Hero Section의 3D 그래픽이나 고화질 영상은 **Lazy Loading** 및 **WebP/WebM** 포맷을 사용하여 로딩 속도 저하 방지.
4.  **다국어 대응:** 2026년 글로벌 진출을 고려하여, 모든 텍스트는 **i18n(국제화)** 키 값으로 관리하여 추후 영문/일문 전환이 용이하도록 설계.