import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            문의하기
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            스터디 계획부터 취직까지, 함께 달리는 러닝메이트가 되어드리겠습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <form className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                    placeholder="이름"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    className="w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    연락처
                  </label>
                  <input
                    type="tel"
                    className="w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                    placeholder="000-0000-0000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    문의내용
                  </label>
                  <textarea
                    className="w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300 h-40"
                    placeholder="문의하실 내용을 자세히 적어주세요."
                    required
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                  문의하기
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                연락처 정보
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "전화",
                    info: "02-1234-5678",
                    desc: "평일 09:00 - 18:00",
                  },
                  {
                    title: "이메일",
                    info: "support@example.com",
                    desc: "24시간 접수 가능",
                  },
                  {
                    title: "주소",
                    info: "서울특별시 강남구 삼성동 123번지",
                    desc: "본사",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.info}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202200.01609690193!2d126.6915837746969!3d37.64038100169786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb421c44ad%3A0xe955a50c118085f8!2z6rSR7ZmU66y46rSR7J6l!5e0!3m2!1sko!2skr!4v1754635507397!5m2!1sko!2skr"
                width="100%"
                height="400"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-[400px] md:h-[600px] lg:h-[600px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
