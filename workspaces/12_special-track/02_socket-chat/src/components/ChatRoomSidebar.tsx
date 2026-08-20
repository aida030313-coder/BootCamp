import { User } from "@/types";

interface ChatRoomSidebarProps {
  room: string;
  roomUsers: User[];         // 출력할 채팅방 접속 인원 목록
  currentUsername: string;   // 현재 접속자 본인 닉네임
}

export default function ChatRoomSidebar({ room, roomUsers, currentUsername }: ChatRoomSidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">📍 {room}</h2>
        <p className="text-sm text-gray-500">채팅방</p>
      </div>
      <div className="border-t pt-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">
          참여자 ({roomUsers.length} 명)
        </h3>
        <div className="space-y-2">

          {/* 참여자 목록 */}
          {roomUsers.map((user) => (
            <div 
            key={user.id}
            className={`flex items-center gap-2 p-2 rounded bg-blue-100`}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">
              {user.username}
              {user.username === currentUsername &&
              <span className="text-blue-600 ml-1">(나)</span>}
            </span>
          </div>
          ))}


        </div>
      </div>
    </div>
  );
}