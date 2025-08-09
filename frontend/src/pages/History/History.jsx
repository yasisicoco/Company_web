import React from "react";

const History = () => {
  const servicesList = [
    {
      id: 1,
      title: "맞춤형 소프트웨어 개발",
      description: "고객의 요구사항에 맞는 최적화된 솔루션을 제공합니다.",
      icon: "💻",
    },
    {
      id: 2,
      title: "클라우드 서비스",
      description: "안정적이고 확장 가능한 클라우드 인프라 구축 및 관리",
      icon: "☁️",
    },
    {
      id: 3,
      title: "보안 솔루션",
      description: "최신 보안 기술을 적용한 안전한 시스템 구축",
      icon: "🔒",
    },
    {
      id: 4,
      title: "기술 컨설팅",
      description: "전문가의 분석을 통한 최적의 기술 전략 수립",
      icon: "📊",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-32 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          우리의 기억
        </h1>
        <p className="text-xl text-gray-600">
          열정으로 꾸준한 스터디를 진행합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          왜 우리와 함께해야 할까요?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              1년+ 경험
            </h3>
            <p className="text-gray-600">초심, 입문자 입장에서의 공감과 배움</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              전문가로의 과정
            </h3>
            <p className="text-gray-600">숙련된 개발자가 되어가는 길</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              24/7 지원
            </h3>
            <p className="text-gray-600">자신만의 루틴, 혹은 러닝메이트</p>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          프로젝트 진행 프로세스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "요구사항 분석",
              desc: "고객의 니즈와 목표를 정확히 파악",
            },
            {
              step: "02",
              title: "설계 및 기획",
              desc: "최적의 솔루션 설계와 개발 계획 수립",
            },
            {
              step: "03",
              title: "개발 및 테스트",
              desc: "체계적인 개발과 품질 검증 진행",
            },
            {
              step: "04",
              title: "배포 및 유지보수",
              desc: "안정적인 서비스 운영과 지속적인 개선",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-md"
            >
              <div className="text-blue-600 text-5xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 bg-blue-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          프로젝트를 시작할 준비가 되셨나요?
        </h2>
        <p className="text-xl mb-8">
          우리와 상담하고 최적의 스터디를 찾으세요!
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
          무료 상담 신청하기
        </button>
      </div>
    </div>
  );
};

export default History;
