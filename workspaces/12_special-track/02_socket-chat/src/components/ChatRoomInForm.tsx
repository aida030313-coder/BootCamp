'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatRoomInForm() {

  // 채팅방 입장 정보(방이름, 닉네임) 상태 관리
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const router = useRouter();

  // 채팅방 입장 함수 => /chat/[방이름]?username=[닉네임] 형태의 주소로 이동
  const joinRoom = () => {
    if (username !== '' && room !== '') {
      router.push(`/chat/${room}?username=${username}`);
    } else {
      alert('이름과 채팅방을 입력해주세요!');
    }
  };

  return (
    <>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">닉네임</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="이름을 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && joinRoom()}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">채팅방</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="채팅방 이름 (예: general)"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && joinRoom()}
          />
        </div>
        <button
          onClick={joinRoom}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold p-3 rounded-lg transition duration-200"
        >
          입장하기
        </button>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-600">💡 추천 채팅방</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setRoom('general')}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          >
            general
          </button>
          <button
            onClick={() => setRoom('random')}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          >
            random
          </button>
          <button
            onClick={() => setRoom('study')}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          >
            study
          </button>
        </div>
      </div>
    </>
  );
}