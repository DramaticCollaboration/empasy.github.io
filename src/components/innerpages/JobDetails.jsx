import { benefits, requirement, tasks } from "@/data/jobDetails";
import React from "react";

export default function JobDetails() {
  return (
      <div id="job_details" className="job-details section panel pb-6 xl:pb-9">
          <div className="empathy-container">
              <div className="intro">
                  <p>안녕하세요! <span className="highlight">'공감 시너지(Empathic Synergy)'</span>를 통해 최고의 결과물을 만들어내는
                      엠파시(Empathy)입니다.</p>
                  <p>빠르게 변하는 세상 속에서, 저희는 <span className="highlight">'변화에 최적화된 솔루션'</span>을 만드는 것을 최고의 가치로 생각합니다.</p>
                  <p>예측 불가능한 시장 변화에 민첩하게 대응하고, 비즈니스에 민첩성을 더하는 멋진 일(Boon to business by agility)을 함께하고 있습니다.</p>
              </div>

              <div className="section">
                  <h2 className="section-title">🚀 우리가 하는 일: 기술로 혁신을 만듭니다</h2>
                  <p>엠파시에서는 프론트엔드, 백엔드, 콘텐츠 관리, 테스트 자동화까지, 소프트웨어 개발의 전 과정을 더 빠르고 유연하게 만드는 <span className="highlight">'Sync Series'</span> 솔루션들을
                      개발하고 있습니다.</p>

                  <ul className="product-list">
                      <li><span className="highlight">SyncBoot & SyncAdmin</span>: MSA와 최신 프론트엔드 기술로 복잡한 기업용 애플리케이션을 레고
                          조립하듯 빠르게 만들고, 개발자들이 비즈니스 로직에만 집중할 수 있는 환경을 제공합니다.
                      </li>
                      <li><span className="highlight">SyncCMS</span>: 코딩을 모르는 마케터나 운영자도 전문가처럼 콘텐츠를 관리할 수 있는 사용자 친화적인
                          CMS를 만듭니다.
                      </li>
                      <li><span className="highlight">SyncEta</span>: AI가 사람처럼 테스트하고 기계처럼 실행하는 똑똑한 테스트 자동화 플랫폼으로 소프트웨어의
                          품질을 혁신하고 있습니다. 최근에는 자연어 테스트케이스 기술로 미국 진출까지 꿈꾸고 있답니다!
                      </li>
                  </ul>

                  <p>우리는 Java, Spring Boot, Vue.js, AI(LLM), MSA, 클라우드 네이티브 등 혁신적인 기술들을 적극적으로 배우고 적용하며 늘 새로운 도전을
                      즐깁니다.</p>
              </div>

              <div className="section">
                  <h2 className="section-title">✨ 우리가 일하는 방식: 엠파시의 문화</h2>
                  <p>엠파시의 문화는 세 가지 핵심 가치를 중심으로 움직입니다: <span
                      className="highlight">혁신적인 기술 개발, 애자일 조직 문화, 그리고 건강한 워라밸</span>.</p>

                  <div className="culture-item">
                      <h3 className="culture-title">🌟 워라밸, 말뿐이 아닙니다. 진심입니다.</h3>
                      <ul className="culture-list">
                          <li>저희는 구성원의 <span className="highlight">워라밸(Work-Life Balance)을 최우선으로 존중합니다</span>.</li>
                          <li><span className="highlight">주말이나 업무 외 시간에 온 메시지에 답하지 않아도 전혀 문제가 되지 않습니다.</span> 업무 외 시간의
                              응답 지연으로 인한 불이익은 절대 없으며, 다음 근무 시간에 확인 후 응답하는 것이 원칙입니다.
                          </li>
                          <li>본사 근무 시에는 <span className="highlight">제한 없는 자율 출퇴근제</span>를 운영하여 유연한 근무 환경을 보장합니다.</li>
                          <li>긴급한 장애 대응 등 예외적인 상황이 발생하면, 상황 종료 후 <span className="highlight">반드시 대체 휴식 시간을 보장</span>합니다.
                          </li>
                      </ul>
                  </div>

                  <div className="culture-item">
                      <h3 className="culture-title">🤝 함께 실험하고 성장하는 애자일 문화</h3>
                      <ul className="culture-list">
                          <li>우리는 <span className="highlight">협업과 빠른 피드백</span>을 중요하게 생각하며, 실험과 학습을 두려워하지 않습니다.</li>
                          <li>가능한 공개 채널에서 투명하게 소통하며 정보 접근성을 높이고, 긍정적이고 건설적인 피드백을 주고받는 문화를 장려합니다.</li>
                          <li>문제가 발생하면 숨기지 않고 <span className="highlight">정직하고 투명하게 공유하며</span> 함께 해결책을 찾습니다.</li>
                      </ul>
                  </div>

                  <div className="culture-item">
                      <h3 className="culture-title">💙 서로를 존중하는 '공감 시너지'</h3>
                      <ul className="culture-list">
                          <li>회사 이름처럼, 우리는 <span className="highlight">깊은 공감과 협업</span>의 힘을 믿습니다.</li>
                          <li>모든 동료, 고객, 파트너를 <span className="highlight">존중하고 배려하며</span>, 맡은 업무에 책임감을 갖고 신뢰를 기반으로
                              행동합니다.
                          </li>
                          <li>이러한 문화를 통해 팀원 각자가 역량을 마음껏 발휘하며 함께 성장하는 환경을 만들어갑니다.</li>
                      </ul>
                  </div>
              </div>

              <div className="section">
                  <h2 className="section-title">🙋‍♀️ 이런 분을 기다려요!</h2>
                  <ul className="looking-for-list">
                      <li>최신 기술 트렌드를 배우고 적용하는 것을 즐기시는 분.</li>
                      <li>혼자보다는 팀으로 협업하며 시너지를 만들 때 더 큰 보람을 느끼시는 분.</li>
                      <li>빠르게 변하는 환경에 유연하게 대응하며 성장을 즐기시는 분.</li>
                      <li>자신의 일에 책임감을 갖고, 동료들과 투명하게 소통하는 것을 중요하게 생각하시는 분.</li>
                  </ul>
              </div>

              <div className="conclusion">
                  <h2 className="section-title">🙌 변화를 향한 여정에 함께해요!</h2>
                  <p>엠파시는 당신의 성장을 지원하고, 일과 삶의 균형을 존중하며, 함께 혁신적인 결과물을 만들어나갈 준비가 되어 있습니다. 엠파시의 '공감 시너지'에 함께하고 싶다면, 주저하지 말고
                      지금 바로 지원해주세요!</p>
                  <a href="mailto:poh@empasy.com" className="apply-button">[지원하기]</a>
              </div>
          </div>
      </div>
  );
}
