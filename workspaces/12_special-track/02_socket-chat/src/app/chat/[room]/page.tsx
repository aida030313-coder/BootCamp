import ChatRoom from "@/components/ChatRoom";

export default async function ChatRoomPage({ params, searchParams }: { 
  params: Promise<{ room: string }>, 
  searchParams: Promise<{ username: string }> 
}) {

  // 채팅방 입장 정보(방이름, 닉네임) 추출
  const { room } = await params;
  const { username } = await searchParams;
  //console.log(`채팅방입장 정보: ${room}, ${username}`);

  return (
    // 채팅방 전체 화면
    <ChatRoom room={room} username={username} />
  );
}