// 메세지 타입
export interface Message {
  username: string;              // 닉네임
  message: string;               // 메시지(채팅/시스템)
  timestamp: string;             // 메시지 전송 날짜
  type?: 'system' | 'chat';      // 시스템 메시지, 채팅 메시지
}

// 사용자 타입
export interface User {
  id: string;       // socket에 연결된 각 클라이언트의 고유 객체 아이디
  username: string; // 사용자 닉네임 
}