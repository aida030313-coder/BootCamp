'use client';

import { Socket, io } from "socket.io-client";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoomMessageInput from "./ChatRoomMessageInput";
import ChatRoomMessageList from "./ChatRoomMessageList";
import ChatRoomSidebar from "./ChatRoomSidebar";
import { useEffect, useState } from "react";
import { Message, User } from "@/types";
import { useRouter } from "next/navigation";

// 소켓 인스턴스를 담을 전역 변수
let socket: Socket;

export default function ChatRoom({ room, username }: { room: string, username: string }) {

    // 채팅방 참여자 목록 - 새로운 클라이언트가 해당 방의 socket에 연결(=입장)시마다 갱신
    //                                                         + 또는 퇴장시마다 갱신
    const [roomUsers, setRoomUsers] = useState<User[]>([]);
    // 채팅 메시지 목록 - 새로운 메시지가 수신될 때마다 갱신
    const [messages, setMessages] = useState<Message[]>([]);
    // 타이핑 중인 사용자 닉네임 관리 - 특정 사용자가 타이핑할 때, 타이핑 멈출 때 갱신
    const [typingUser, setTypingUser] = useState<string>('');

    const router = useRouter()

    useEffect(() => {
        socket = io("http://localhost:4000");

        // 소켓 연결 성공 시 => 채팅방 입장 요청
        socket.on('connect', () => {
            console.log('소켓 연결 성공(client): ', socket.id);
            socket.emit('join_room', { room, username });
        })

        // 채팅방 사용자 목록 갱신 이벤트 발생 시 수행할 이벤트 리스너 등록
        socket.on('room_users', (users: User[]) => {
            setRoomUsers(users);
        })

        socket.on('welcome_message', (data) => {   // 본인이 방에 입장했을 때 발생
        setMessages((prev) => [
          ...prev,
          {
            username: 'System',
            message: data.message,
            timestamp: data.timestamp,
            type: 'system',
          },
        ])
      })
      socket.on('user_joined', (data) => {   // 누군가가 내 방에 입장했을 때 발생
        setMessages((prev) => [
          ...prev,
          {
            username: 'System',
            message: data.message,
            timestamp: data.timestamp,
            type: 'system',
          }
        ])
      })
      socket.on('user_left', (data) => {   // 누군가가 내 방으로부터 퇴장했을 때 발생
        setMessages((prev) => [
          ...prev,
          {
            username: 'System',
            message: data.message,
            timestamp: data.timestamp,
            type: 'system',
          }
        ])
      })
      // 채팅 메세지 수신을 위한 이벤트 리스너 
      socket.on('user_typing', (data) => {
        setTypingUser(data.username);
      })
      socket.on('user_stop_typing', () => {
        setTypingUser('');
      })
      socket.on('receive_message', (data) => {
        setMessages((prev) => [
          ...prev,
          {
            username: data.username,
            message: data.message,
            timestamp: data.timestamp,
            type: 'chat',
          }
        ])
      })

        return () => {
            if(socket) socket.disconnect();
        }

    }, [])

    // 나가기 버튼 클릭 시 수행시킬 함수
    const handleLeaveRoom = () => {
      socket.disconnect(); // 소켓 연결 해제
      router.push('/');    // 후에 메인페이지로 자동 이동 
    }

    // 메세지 전송용 이벤트 핸들러 
    const handleSendMessage = (message: string) => {
      socket.emit('send_message', { room, message, username }); // "어떤 룸"에 "누가" "어떤 메세지"를 보냈는지 전달 
    }
    // 타이핑 시 이벤트 핸들러
    const handleTyping = () => {
      socket.emit('typing', { room, username }); // "어떤 룸"에서 "누가" 타이핑하는지 전달
    }
    // 타이핑 중지 시 이벤트 핸들러
    const handleStopTyping = () => {
      socket.emit('stop_typing', { room }); // "어떤 룸"에서 타이핑이 멈췄는지 전달 
    }

  return (
    <div className="flex h-screen bg-gray-100">

      {/* 👥 사이드바: 사용자 목록 */}
      <ChatRoomSidebar
        room={room}
        roomUsers={roomUsers}
        currentUsername={username} 
    />

      {/* 💬 메인 채팅 영역 */}
      <div className="flex-1 flex flex-col">
        {/* 헤더 */}
        <ChatRoomHeader
            currentUsername={username}
            onLeave={handleLeaveRoom}
        />

        {/* 메시지 목록 */}
        <ChatRoomMessageList 
            messages={messages}
            typingUser={typingUser}
            currentUsername={username}
        />

        {/* 메시지 입력 영역 */}
        <ChatRoomMessageInput
            onTyping={handleTyping}
	        onStopTyping={handleStopTyping}
	        onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}