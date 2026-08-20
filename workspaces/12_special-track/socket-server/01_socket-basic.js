const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors()); // CORS 허용 (클라이언트와 포트가 다르므로 필수)

const server = http.createServer(app);

// Socket.io 서버 생성 및 설정
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Next.js 클라이언트 주소
    methods: ["GET", "POST"],
  },
});

// 클라이언트가 연결되었을 때 실행되는 이벤트
io.on('connection', (socket) => { // socket: 연결된 각 클라이언트의 고유 객체
  
  console.log(`User Connected: ${socket.id}`);

  // 1. 클라이언트가 보낸 메시지 듣기 (on)
  socket.on('send_message', (data) => {
    
    console.log('Message Received:', data);

    // 2. 소켓에 연결된 클라이언트 측으로 들어온 메세지 전송 (Broadcast)
    // 2_1) 나를 제외한 모든 클라이언트에게 메세지 전송 
    socket.broadcast.emit('receive_message', data);
    // 2_2) 나를 포함한 모든 클라이언트에게 메세지 전송 
    io.emit('receive_message', data);
    
  });

  // 연결 해제 시
  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});

server.listen(4000, () => {
  console.log('🚀 SOCKET SERVER RUNNING ON PORT 4000');
});