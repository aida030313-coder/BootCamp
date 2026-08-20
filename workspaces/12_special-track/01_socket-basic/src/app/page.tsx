'use client'; 

import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

// 소켓 인스턴스 대입할 변수 미리 선언
let socket: Socket;

export default function ChatPage() {

	// 클라이언트가 입력하는 메세지 상태 관리 
  const [message, setMessage] = useState('');
  // 메세지 목록 상태 관리 
  const [messageList, setMessageList] = useState<string[]>([]);

	// ----- 클라이언트 측 소켓 처리 코드 작성 (실습) ----
  useEffect(() => {
    // 1. 소켓 서버 연결 시도(소켓 인스턴스 생성)
    socket = io("http://localhost:4000");

    // 3. 소켓 서버 => 클라이언트 전송해주는 메시지 처리(이벤트리스너 등록)
    socket.on("receive_message", (data) => {   // data == {message: '메시지}
      setMessageList((prev) => [...prev, data.message]);
    })

    // clean-up 함수(컴포넌트가 언마운트 될 때)
    return () => {
      socket.off('receive_message');
      socket.disconnect();
    }
  }, []);

  // 2. 메시지 전송(클라이언트 => 소켓 서버)
  const sendMessage = () => {
    if(message.trim()) {
      socket.emit("send_message", {message});   // { message: "hi"}
      // 메시지는 확장성?을 위해서 제이슨 구조로 보내는게 좋음
      setMessage('');
    }
  }

  return (
    <div className="p-10">
      <h1>실시간 오픈 채팅방</h1>
      <div className="chat-window border p-4 h-64 overflow-y-scroll mb-4">
        {messageList.map((msg, idx) => (
          <div key={idx} className="message p-2 border-b">
            {msg}
          </div>
        ))}
      </div>
      <div className="input-area flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1"
          placeholder="메시지를 입력하세요..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button 
          onClick={sendMessage} 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 cursor-pointer">
          전송
        </button>
      </div>
    </div>
  );
}