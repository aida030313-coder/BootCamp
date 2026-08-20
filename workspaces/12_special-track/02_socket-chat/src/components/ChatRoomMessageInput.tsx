'use client';

import { useRef, useState } from "react";

interface ChatRoomMessageInputProps {
  onTyping: () => void;
  onStopTyping: () => void;
  onSendMessage: (message: string) => void;
}

export default function ChatRoomMessageInput({ 
	onTyping, 
	onStopTyping, 
	onSendMessage 
}: ChatRoomMessageInputProps) {

  const [message, setMessage] = useState('');

  // 일반 변수로 관리할 경우 - 리렌더링 되었을 때 보존 불가
  // useRef로 관리할 경우 - 값이 변경되었다고 해도 리렌더링이 되지 않음(불필요한 리렌더링 방지)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 타이핑 이벤트 처리
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);

    onTyping();   // 타이핑중임!!! 이벤트 전송

    // 기존 타이머가 있을 경우, 삭제
    if(typingTimeoutRef.current)
        clearTimeout(typingTimeoutRef.current);;

    // 1초 후에는 자동으로 타이핑 중지됐음!!! 이벤트 전송
    typingTimeoutRef.current = setTimeout(() => {   // 새로운 타이머 생성(우리가 필요한건 마지막 타이머만 필요)
        onStopTyping();
    }, 1000);
    
  };

  // 메세지 전송 이벤트 처리
  const handleSend = () => {
    if(message.trim()) {
        onSendMessage(message);
        setMessage('');
        // 전송 즉시 타이핑 중지 알림
        onStopTyping();
        // 마지막의 타이머 제거
        if(typingTimeoutRef.current)
            clearTimeout(typingTimeoutRef.current);
    }
  };

  // 엔터키 이벤트 처리
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {   // Shift랑 Enter가 같이 눌리면 여러 줄 전송할 수 있도록

    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="메시지를 입력하세요..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          전송
        </button>
      </div>
    </div>
  );
}