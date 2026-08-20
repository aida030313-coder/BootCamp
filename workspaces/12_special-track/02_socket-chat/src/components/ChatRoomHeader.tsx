'use client';

interface ChatRoomHeaderProps {
  currentUsername: string;
  onLeave: () => void;
}

export default function ChatRoomHeader({
  currentUsername,
  onLeave
}: ChatRoomHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-gray-800">실시간 채팅</h1>
        <p className="text-sm text-gray-500">{currentUsername}님으로 접속 중</p>
      </div>
      <button
        onClick={onLeave}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
      >
        나가기
      </button>
    </div>
  );
}