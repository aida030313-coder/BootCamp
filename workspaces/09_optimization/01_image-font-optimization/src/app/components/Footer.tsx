'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">Gallery</h3>
            <p className="text-gray-400">
              아름다운 이미지로 세상을 연결합니다
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">갤러리</a></li>
              <li><a href="#" className="hover:text-white transition">제품</a></li>
              <li><a href="#" className="hover:text-white transition">블로그</a></li>
              <li><a href="#" className="hover:text-white transition">소개</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">지원</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">고객센터</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition">개인정보처리방침</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400 font-mono">
              <li>contact@gallery.com</li>
              <li>02-1234-5678</li>
              <li>서울시 강남구</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="font-mono">© 2024 Gallery. All rights reserved. | 최적화 전 프로젝트</p>
        </div>
      </div>
    </footer>
  );
}

