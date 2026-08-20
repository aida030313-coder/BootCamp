const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);

// Socket.io 서버 생성 및 CORS 설정
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// 채팅방별 사용자 관리를 위한 Map 자료구조 { roomName: [ {id, username}, {id, username}, ... ] }
const roomUsers = new Map();

// 연결된 클라이언트 이벤트 처리
io.on('connection', (socket) => {
  console.log(`✅ 사용자 연결됨: ${socket.id}`);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  [클라이언트🖥️ → 서버🗄️] 1. join_room
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  socket.on('join_room', (data) => {
    const { room, username } = data;
    
    // Socket.io의 join을 활용하여 해당 room에 입장
    socket.join(room); 
    
    // 사용자 정보 소켓에 저장 (나중에 사용하기 위해)
    socket.username = username;
    socket.room = room;

    // 해당 채팅방 사용자 목록에 추가
    if (!roomUsers.has(room)) {
      roomUsers.set(room, []);
    }
    roomUsers.get(room).push({ id: socket.id, username }); 
    // roomUsers.get(room) == [{id: 클라이언트객체고유id, username: 닉네임}, ..]

    console.log(`👤 ${username}님이 ${room}방에 입장했습니다.`);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🗄️ [서버 → 클라이언트] 1. welcome_message (본인에게만)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    socket.emit('welcome_message', {
      message: `${room}방에 오신 것을 환영합니다! 🎉`,
      timestamp: new Date().toISOString(),
    });

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🗄️ [서버 → 클라이언트] 2. user_joined (다른 사람들에게)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    socket.to(room).emit('user_joined', {
      message: `${username}님이 입장했습니다.`,
      timestamp: new Date().toISOString(),
    });

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🗄️ [서버 → 클라이언트] 3. room_users (모든 사람에게)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    io.to(room).emit('room_users', roomUsers.get(room)); // []

    /*
      💡 "본인에게만", "다른 사람들에게", "모든 사람에게", "서버 전체 모든 사용자에게" 이벤트를 보내는 방법

      - 본인에게만: socket.emit(...)               // 현재 연결된 내 소켓에만 메시지 전송
      - 다른 사람들에게: socket.to(room).emit(...) // 나를 제외한 채팅방(room)에 있는 모든 소켓에게 전송
      - 모든 사람에게(해당 방 전체): io.to(room).emit(...) // 나를 포함한 채팅방(room)의 모든 소켓에게 전송
      - 서버 전체(모든 방의 모든 사용자 포함): io.emit(...) // 모든 소켓(전체 사용자)에게 전송
    */
  });

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🖥️ [클라이언트 → 서버] 2. send_message
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  socket.on('send_message', (data) => {
    const { room, message, username } = data;
    
    console.log(`💬 [${room}] ${username}: ${message}`);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🗄️ [서버 → 클라이언트] 4. receive_message (모든 사람에게)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    io.to(room).emit('receive_message', {
      username,
      message,
      timestamp: new Date().toISOString(),
    });
  });


  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🖥️ [클라이언트 → 서버] 3. typing
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  socket.on('typing', (data) => {
    const { room, username } = data;

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🗄️ [서버 → 클라이언트] 5. user_typing (다른 사람들에게)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    socket.to(room).emit('user_typing', { username });
  });


  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🖥️ [클라이언트 → 서버] 4. stop_typing
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  socket.on('stop_typing', (data) => {
    const { room } = data;

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🗄️ [서버 → 클라이언트] 6. user_stop_typing (다른 사람들에게)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    socket.to(room).emit('user_stop_typing');
  });


  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🖥️ [클라이언트 → 서버] 5. disconnect 
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  socket.on('disconnect', () => {
    console.log(`❌ 사용자 연결 해제됨: ${socket.id}`);

    const { room, username } = socket;

    // 채팅방 사용자 목록에서 제거
    if (room && roomUsers.has(room)) {
      const users = roomUsers.get(room);
      const updatedUsers = users.filter(user => user.id !== socket.id);
      
      if (updatedUsers.length > 0) { // ------ 채팅방에 사용자가 남아있으면
        roomUsers.set(room, updatedUsers);
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // 🗄️ [서버 → 클라이언트] 7. user_left (남은 사람들에게)
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        socket.to(room).emit('user_left', {
          message: `${username}님이 퇴장했습니다.`,
          timestamp: new Date().toISOString(),
        });

        io.to(room).emit('room_users', updatedUsers);
      } else { // ---------------------------- 채팅방에 사용자가 없으면
        // 채팅방 삭제
        roomUsers.delete(room);
        console.log(`🗑️ ${room}방이 삭제되었습니다. (사용자 없음)`);
      }
    }
  });
});

// 서버 포트 4000으로 실행 
server.listen(4000, () => {
  console.log('🚀 SOCKET CHAT SERVER RUNNING ON PORT 4000');
});
