import ChatRoomInForm from "@/components/ChatRoomInForm";

export default function Home() {

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">💬 채팅방 입장</h1>

        {/* 채팅방 입장을 위한 폼 */}
        <ChatRoomInForm />
      </div>
    </div>
  );

}