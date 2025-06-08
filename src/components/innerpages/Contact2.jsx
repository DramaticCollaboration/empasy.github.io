import { useContext, useState } from "react";

export default function Contact2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://7f4wwc40if.execute-api.ap-northeast-2.amazonaws.com/dev/email-contact-us-template-dev-sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('전송에 실패했습니다.');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        content: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 min-h-600px bg-secondary dark:bg-opacity-0 z-0" />
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <img
            className="w-32px text-gray-900 dark:text-white"
            src="/assets/images/template/star-1.svg"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
          />
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <img
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-2.svg"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Contact us
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                아래에 언제든지 문의해 주세요. 전담 팀이 신속하게 응답해 드리겠습니다.
              </p>
            </div>
            <div className="panel max-w-750px mx-auto">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="vstack gap-2 p-3 sm:p-6 xl:p-8 rounded-2 border bg-white dark:bg-gray-900 border-secondary dark:border-gray-300 dark:border-opacity-20"
              >
                <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                  질문이나 의견이 있으신가요? 아래 양식을 작성해 주시면 가능한 한 빠르게 답변드리겠습니다.
                </p>
                <div className="row child-cols-12 md:child-cols-6 g-2">
                  <div>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                      type="text"
                      placeholder="이름"
                      required
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                      type="email"
                      placeholder="이메일"
                      required
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <input
                  className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                  type="text"
                  placeholder="제목"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}

                />
                <textarea
                  className="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                  placeholder="내용.."
                  required
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-primary btn-md text-white mt-2"
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit }
                >
                  {isSubmitting ? '전송 중...' : '보내기'}
                </button>
                {submitStatus === 'success' && (
                    <div className="alert alert-success">
                      메시지가 성공적으로 전송되었습니다.
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="alert alert-danger">
                      메시지 전송에 실패했습니다. 다시 시도해주세요.
                    </div>
                )}

                <button
                    className="btn btn-secondary btn-md text-primary mt-2"
                    type="button"
                    onClick={() => {window.location = "mailto:poh@empasy.com";}}
                >
                  이메일
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
