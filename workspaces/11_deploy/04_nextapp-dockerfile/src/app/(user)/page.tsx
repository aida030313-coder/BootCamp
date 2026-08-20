
import EnvDisplay from "@/components/EnvDisplay";

export default function UserMainPage() {

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 py-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">사용자 측 메인 화면</h1>
        </div>
      </header>

      <EnvDisplay />  
    </div>
  );
}