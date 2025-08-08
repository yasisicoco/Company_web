import React from "react";
import { Link } from "react-router-dom";

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">스터디 소개</h3>
            <p className="text-gray-400">
              함께 최고가 되기위해 노력하는 스터디입니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  스터디 정보
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/team-member"
                  className="hover:text-white transition-colors"
                >
                  스터디원 소개
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/board"
                  className="hover:text-white transition-colors"
                >
                  자유 게시판
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/history"
                  className="hover:text-white transition-colors"
                >
                  스터디 이력
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  문의
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">스터디장</h3>
            <ul className="space-y-2 text-gray-400">
              <li>경기도 고양시</li>
              <li>덕양구</li>
              <li>전화: 010-4190-5007</li>
              <li>이메일: yasisicoco@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">소셜 미디어</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/zinooing/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 JW Company. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
