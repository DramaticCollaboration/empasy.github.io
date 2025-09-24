export const accordionItems = [
  {
    id: 1,
    question: "회사 이름 '엠파시(Empasy)'는 무슨 뜻인가요?",
    answer:
      "'엠파시(EmpaSy)'는 <b>'공감 시너지(Empathic Synergy)'</b>의 줄임말이에요. <br>" +
        "고객 및 팀원들과 깊이 공감하고 협업하여 뛰어난 결과를 만들어낸다는 가치를 담고 있습니다",
    controls: "uc-accordion-24",
    expanded: true,
  },
  {
    id: 2,
    question: "엠파시가 추구하는 핵심 가치는 무엇인가요?",
    answer: "저희는 <b>변화에 최적화된 솔루션</b>을 만드는 것을 최고의 가치로 생각합니다.<br>" +
        " 비즈니스 환경이 빠르게 변할 때 소프트웨어도 그 속도에 맞춰 신속하게 변경되어야 한다는 철학을 가지고 <b>살아 있는 소프트웨어</b>를 만드는 것을 목표로 하고 있어요.",
    controls: "uc-accordion-26",
    expanded: false,
  },
  {
    id: 3,
    question: "'Sync Series'는 무엇인가요?",
    answer: "'Sync Series'는 변화에 신속하게 대응하기 위해 엠파시가 개발한 솔루션 제품군이에요.<br>" +
        " 백엔드 개발 플랫폼 SyncBoot, 프론트엔드 관리 템플릿 SyncAdmin, 콘텐츠 관리 시스템 SyncCMS, 그리고 AI 테스트 자동화 플랫폼 SyncETA로 구성되어 있습니다.",
    controls: "uc-accordion-28",
    expanded: false,
  },
  {
    id: 4,
    question: "엠파시는 어떤 조직 문화를 가지고 있나요?",
    answer: "저희는 애자일(Agile) 조직 문화와 건강한 워라밸을 핵심 가치로 삼고 있어요.<br>" +
        " 협업과 빠른 피드백을 중시하며, 주말이나 업무 외 시간에는 자유를 보장하여 업무 효율과 건강한 생활의 균형을 최우선으로 합니다.",
    controls: "uc-accordion-30",
    expanded: false,
  },
  {
    id: 5,
    question: "SyncBoot는 어떤 솔루션인가요?",
    answer: "SyncBoot는 Java와 Spring Boot 기반의 오픈소스 빠른 개발 플랫폼이에요.<br>" +
        " 특히 마이크로서비스 아키텍처(MSA) 구축에 최적화되어 있으며, 권한 관리, 모니터링, CI/CD 등 기업용 애플리케이션 개발에 필요한 다양한 기능들을 미리 갖추고 있어 개발 속도를 획기적으로 높여줍니다.",
    controls: "uc-accordion-32",
    expanded: false,
  },
  {
    id: 6,
    question: "SyncBoot의 가장 큰 장점은 무엇인가요?",
    answer: "특정 업체에 종속되지 않는 오픈소스 기반이라는 점, 컨테이너 관리부터 API, 모니터링까지 지원하는 E2E 솔루션이라는 점, 그리고 필요한 기능만 골라 쓸 수 있는 모듈화된 설계로 확장성이 뛰어나다는 점 등이 가장 큰 장점입니다",
    controls: "uc-accordion-32",
    expanded: false,
  },
  {
    id: 7,
    question: "시스템 모니터링 기능도 제공하나요?",
    answer: "네, SyncBoot는 강력한 모니터링 기능을 제공해요. ELK를 통한 통합 로그 관리., Prometheus와 Grafana를 활용한 시스템 매트릭 시각화, 그리고 느린 SQL 모니터링 기능 등을 통해 서비스 상태를 지속적으로 확인하고 장애에 빠르게 대응할 수 있습니다.",
    controls: "uc-accordion-32",
    expanded: false,
  },
  {
    id: 8,
    question: "SyncAPIM은 어떤 솔루션인가요?",
    answer: "SyncAPIM은 API 게이트웨이, 개발자 포털, 분석 도구 등을 제공하는 종합 API 관리 플랫폼이에요.<br>" +
        " API의 생성, 배포, 보안, 모니터링, 분석까지 모든 과정을 한 곳에서 통합 관리하여 안정적이고 효율적인 API 운영을 지원합니다",
    controls: "uc-accordion-32",
    expanded: false,
  },
  {
    id: 10,
    question: "SyncAdmin은 무엇에 쓰는 건가요?",
    answer: "SyncAdmin은 Vue 3, Vite, TypeScript 같은 최신 기술로 만들어진 오픈소스 관리 시스템 템플릿이에요.<br>" +
        " 재사용 가능한 컴포넌트들을 활용해 복잡한 관리자 페이지나 대시보드를 마치 레고 조립하듯 빠르고 쉽게 개발할 수 있도록 도와줍니다.",
    controls: "uc-accordion-32",
    expanded: false,
  },
    {
        id: 11,
        question: "SyncCMS는 어떤 솔루션인가요?",
        answer: "SyncCMS는 Java 기반의 <b>콘텐츠 관리 시스템(Content Management System)<b>입니다.<br>" +
            " 웹사이트의 콘텐츠를 체계적으로 관리할 수 있도록 돕는 솔루션으로, 안정성과 확장성이 뛰어납니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },
    {
        id: 12,
        question: "개발자가 아니어도 SyncCMS를 사용할 수 있나요?",
        answer: "네, 그럼요! SyncCMS는 <b>사용자 친화적인 인터페이스(UI)<b>를 제공해서, 코딩을 모르는 마케터나 운영 담당자도 웹사이트의 글이나 이미지를 쉽게 업데이트하고 관리할 수 있습니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },
    {
        id: 13,
        question: "마이크로서비스 아키텍처(MSA)가 왜 중요한가요?",
        answer: "MSA는 하나의 큰 시스템을 작고 독립적인 서비스들로 나누는 방식이에요.<br>" +
            " 이렇게 하면 변화에 민첩하게 대응할 수 있고(하나만 바꾸면 되니까요!), 필요한 서비스만 확장할 수 있어 효율적이며, 일부 서비스에 문제가 생겨도 전체 시스템이 멈추는 것을 막을 수 있어 안정적입니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },
    {
        id: 14,
        question: "엠파시 솔루션들은 클라우드 환경도 지원하나요?",
        answer: "네, 당연합니다! 저희 솔루션들은 특정 클라우드 업체에 종속되지 않는 '클라우드 네이티브' 구축을 지향해요.<br>" +
            " Kubernetes, Docker 등 컨테이너 기술을 적극 활용하여 프라이빗이든 퍼블릭이든 어떤 클라우드 환경에도 유연하게 배포하고 운영할 수 있습니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },
    {
        id: 15,
        question: "SyncETA가 뭔가요? ",
        answer: "SyncETA는 AI 기반의 차세대 테스트 자동화 플랫폼이에요.<br>" +
            " 쉽게 말해, 사용자가 웹사이트를 이용하는 행동(클릭, 입력 등)을 그대로 녹화해서 테스트 시나리오를 만들고, AI가 이걸 분석해서 사람이 읽기 쉬운 테스트 케이스(엑셀 형식)로 자동으로 만들어주는 솔루션입니다.<br>" +
            " 이렇게 만들어진 테스트 케이스를 자동으로 실행하고, QA팀의 피드백을 다시 AI가 학습해서 점점 더 똑똑해지는 시스템이죠.<br>" +
            " 한마디로 <b>'사람처럼 이해하고, 기계처럼 테스트'<b>하는 똑똑한 친구랍니다!",
        controls: "uc-accordion-32",
        expanded: false,
    },
    {
        id: 16,
        question: "SyncETA는 코딩을 전혀 몰라도 사용할 수 있나요?",
        answer: "네, 그럼요! SyncETA의 가장 큰 장점 중 하나가 바로 '코드 없는(Code-free)' 웹 테스트 자동화를 구현한다는 점이에요.<br>" +
            " 직관적인 UI와 기능을 통해 개발 지식이 없는 QA 담당자나 비전문가도 누구나 쉽게 테스트 자동화 환경을 구축하고 사용할 수 있습니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },
    {
        id: 17,
        question: "SyncETA에 AI는 구체적으로 어떤 일을 해주나요?",
        answer: "SyncETA의 AI는 여러 단계에서 아주 중요한 역할을 해요.<br> " +
            " - <b>테스트 케이스 자동 생성</b>: 사용자의 행동 녹화 기록(JSON)을 분석해서, LLM이 테스트 절차, 입력값, 기대 결과가 포함된 자연어 테스트케이스를 자동으로 만들어줘요.<br>" +
            " - <b>테스트 데이터 자동 생성</b>: 테스트에 필요한 다양한 목업(mock) 데이터를 AI가 자동으로 생성해줘서, 여러 가지 케이스를 쉽게 테스트할 수 있어요.<br>" +
            " - <b>화면 검증</b>: 테스트 실행 중 화면을 캡처해서 UI 요소나 데이터가 올바른지 AI가 추가로 검증해줘요.<br>" +
            " - <b>지속적인 학습</b>: QA팀이 수정한 테스트 케이스를 AI가 다시 학습해서, 점점 더 정확하고 똑똑한 테스트 케이스를 만들게 돼요.",
        controls: "uc-accordion-32",
        expanded: false,
    },
    {
        id: 18,
        question: "저희 팀은 이미 사용하던 엑셀 테스트 케이스가 많은데, 활용할 수 있나요?",
        answer: "물론입니다! SyncETA의 아주 특별하고 강력한 기능인데요,<br>" +
            " 기존에 사용하시던 엑셀 형식의 테스트 케이스를 녹화 과정 없이 바로 업로드해서 자동 테스트를 실행할 수 있어요.<br>" +
            " AI가 엑셀 파일 안의 'Step', 'Input' 같은 항목들을 분석해서 브라우저에서 자동으로 동작을 수행하고 결과를 검증해준답니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },

    {
        id: 19,
        question: "AI가 만든 테스트, 얼마나 믿을 수 있나요?",
        answer: "좋은 질문이에요! SyncETA는 'QA 피드백 기반 지속적 개선' 구조를 가지고 있어서 신뢰성을 계속 높여가요.<br>" +
            " AI가 생성한 테스트 케이스를 먼저 QA 엔지니어가 검토하고 수정하면, 이 수정된 내용이 AI의 학습 데이터로 다시 활용돼요.<br>" +
            " 이렇게 피드백이 쌓이면 AI 모델이 점점 더 똑똑해져서 초기 QA 검증을 거쳐 3개월 내 90% 이상의 정확도 달성을 목표로 하고 있답니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },

    {
        id: 20,
        question: "에러가 나면 원인 찾기가 편한가요?",
        answer: "네, 그럼요! 에러 분석을 최대한 쉽게 할 수 있도록 여러 기능을 제공해요.<br>" +
            " 테스트 실패 시 사용자 친화적인 에러 메시지를 보여주고, 에러가 발생한 지점의 스크린샷을 자동으로 기록해요.<br>" +
            " 또, 대시보드에서 에러가 난 부분을 클릭하면 당시 상황을 녹화한 영상으로 바로 확인할 수 있어서 원인을 직관적으로 파악하는 데 큰 도움이 됩니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },

    {
        id: 21,
        question: "어떤 브라우저를 지원하나요?",
        answer: "Chrome, Firefox, Edge 등 다양한 브라우저에서 크로스 브라우저 테스트를 지원해요.<br>" +
            " '컬렉션' 기능을 사용하면 하나의 시나리오를 여러 브라우저에서 동시에 실행하고 결과를 비교해볼 수도 있어요.",
        controls: "uc-accordion-32",
        expanded: false,
    },

    {
        id: 22,
        question: "기존 CI/CD 파이프라인에 통합할 수 있나요?",
        answer: "네, 가능합니다.<br>" +
            " SyncETA는 Jenkins, Azure DevOps 등 다양한 CI/CD 도구와 원활하게 통합되어 개발 파이프라인에 테스트 자동화를 자연스럽게 녹여낼 수 있어요.<br>" +
            " 개발자가 코드를 변경하면 자동으로 테스트가 실행되고, 문제가 없으면 배포까지 연결되는 워크플로우를 구축할 수 있습니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },

    {
        id: 23,
        question: "그래서 SyncETA를 쓰면 뭐가 좋은가요?",
        answer: "SyncETA를 도입하면 여러 가지 놀라운 효과를 기대할 수 있어요!" +
            " - <b>시간 절약 ⏰</b>: 수작업 대비 테스트 케이스 작성 시간을 80% 이상 획기적으로 줄여줘요.<br>" +
            " - <b>업무 효율 UP 🚀</b>: 반복적인 테스트 작업이 자동화되면서 QA팀은 더 중요하고 전략적인 업무에 집중할 수 있어요.<br>" +
            " - <b>품질 향상 🏆</b>: 사람의 실수를 줄이고, AI 기반의 일관된 테스트로 소프트웨어의 품질과 신뢰성을 높일 수 있어요.<br>" +
            " - <b>비용 절감 💰</b>: 자동화된 프로세스를 통해 초기 도입 비용과 장기적인 유지보수 비용을 최소화할 수 있습니다",
        controls: "uc-accordion-32",
        expanded: false,
    },


    {
        id: 24,
        question: "'레코드', '시나리오', '스토리'는 뭐가 다른가요?",
        answer: "용어가 헷갈릴 수 있죠! 쉽게 설명해 드릴게요.<br>" +
            " - <b>레코드(Record)</b>: 사용자의 클릭, 입력 같은 개별 행동 하나하나를 기록한 가장 작은 단위예요.<br>" +
            " - <b>시나리오(Scenario)</b>: 여러 '레코드'를 모아서 '로그인하기'처럼 하나의 의미 있는 테스트 흐름을 만든 거예요.<br>" +
            " - <b>스토리(Story)</b>: 여러 '시나리오'들을 플로우 차트처럼 연결해서, '로그인 성공 시 상품 페이지로 이동'과 같이 조건에 따라 다르게 실행되는 복잡한 테스트 흐름을 만든 거랍니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },

    {
        id: 25,
        question: "여러 테스트 환경(개발, 운영 등)에서 테스트할 수 있나요?",
        answer: " 네, '컬렉션' 기능을 통해 다양한 환경에서 시나리오를 동시에 테스트할 수 있어요.<br>" +
            " 중앙화된 환경 구성으로 여러 테스트 환경을 하나의 인터페이스에서 쉽게 관리할 수 있습니다",
        controls: "uc-accordion-32",
        expanded: false,
    },
    {
        id: 26,
        question: "테스트에 필요한 가짜 데이터(목업 데이터)도 만들어 주나요?",
        answer: "그럼요! SyncETA의 <b>AI 기반 테스트 데이터 생성</b> 기능을 사용하면 시나리오에 필요한 목업 데이터를 자동으로 만들 수 있어요.<br>" +
            " 이를 통해 다양한 값으로 시나리오를 테스트하며 엣지 케이스까지 꼼꼼하게 확인할 수 있습니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },
    {
        id: 27,
        question: "우리 회사 업무에 맞게 커스터마이징이 가능한가요?",
        answer: "물론입니다! 엠파시의 모든 솔루션은 <b>맞춤화를 핵심 DNA</b>로 생각해요.<br>" +
            " 고객의 비즈니스 환경, 요구 사항, 기존 시스템과의 통합 등 다양한 필요에 맞춰 유연하게 맞춤형 테스트 자동화 솔루션을 제공합니다.",
        controls: "uc-accordion-32",
        expanded: false,
    },

];

export const accordionItems2 = [
  {
    id: 23,
    title: "Manage tasks",
    icon: "/assets/images/common/icons/zap.svg",
    content:
      "Offers a unified platform that fosters innovation while providing end-to-end data management.",
    isOpen: false,
  },
  {
    id: 25,
    title: "Set priorities",
    icon: "/assets/images/common/icons/target.svg",
    content:
      "Providing end-to-end data management. See how we help your team solve today’s biggest challenges.",
    isOpen: false,
  },
  {
    id: 27,
    title: "Collaborate with your team",
    icon: "/assets/images/common/icons/settings.svg",
    content:
      "Our shared team inboxes keep everyone on the same page and in the loop.",
    isOpen: true,
  },
];
