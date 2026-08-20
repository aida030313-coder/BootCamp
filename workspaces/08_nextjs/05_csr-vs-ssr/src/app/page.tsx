import CounterButton from "@/components/CounterButton";

export default function Home() {

  console.log('로그인 실행 위치는? - 서버');

  // 서버에서 생성된 시간
  const time = new Date().toLocaleTimeString();   // 서버 측에서 실행

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold bg-blue-600 text-white p-3">
        Server Component VS Client Component
      </h1>
      <p className="mt-2 text-gray-600">
        현재 이 텍스트는 서버 컴포넌트에서 렌더링된 텍스트입니다. 
      </p>
      <div className="mt-4 p-2 bg-gray-200 rounded text-center">
        시간: {time}
      </div>

      <div className="mt-4 text-center">
        <CounterButton/>
      </div>
    </div>
  );
}
