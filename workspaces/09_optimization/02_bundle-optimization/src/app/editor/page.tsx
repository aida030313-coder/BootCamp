"use client";

import { useState } from "react";
import Link from "next/link";

import debounce from "lodash/debounce";

import dayjs from "dayjs";
import "dayjs/locale/ko";

// 코드 스플리팅 적용 => 동적(dynamic) import 적용
// import Editor from "@monaco-editor/react";   // 정적 import

import dynamic from "next/dynamic";
const Editor = dynamic(() => import ("@monaco-editor/react"), {
  loading: () => (   // 동적으로 로드될 때 띄워줄 로딩 UI
    <div className="h-[400px] fles items-center justify-center bg-gray-900 text-white rounded-md">
      에디터 로딩중...
    </div>
  ),
  ssr: false
})

export default function EditorPage() {

  const [content, setContent] = useState("// 여기에 코드를 작성하세요...\n");
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("javascript");

  const handleContentChange = debounce((value: string | undefined) => {
    if (value !== undefined) {
      setContent(value);
      console.log("Content updated:", value.length, "characters");
    }
  }, 300);

  const currentDate = dayjs().format("YYYY년 MM월 DD일 HH:mm");

  const handleSave = () => {
    alert(`저장되었습니다!\n제목: ${title}\n언어: ${language}\n코드 길이: ${content.length}자`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">에디터 페이지</h1>
          <Link 
            href="/"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            홈으로
          </Link>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">이 페이지의 문제점</h3>
              <div className="mt-2 text-sm text-green-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>lodash 전체를 import → 트리쉐이킹 O debounce 함수만 import</li>
                  <li>moment.js 사용 → dayjs로 대체</li>
                  <li>Monaco Editor (3MB+)를 직접 import → 코드 스플리팅 O(동적 import)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              제목
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              placeholder="파일 제목을 입력하세요"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              작성일: {currentDate}
            </label>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                프로그래밍 언어
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              >
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="json">JSON</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                코드 길이
              </label>
              <div className="px-3 py-2 bg-gray-100 rounded-md text-gray-700">
                {content.length} 자
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              코드 에디터 (Monaco Editor - VS Code와 동일)
            </label>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <Editor
                height="400px"
                language={language}
                value={content}
                onChange={handleContentChange}
                theme="vs-dark"
                options={{
                  minimap: { enabled: true },
                  fontSize: 14,
                  lineNumbers: "on",
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={() => setContent("// 여기에 코드를 작성하세요...\n")}
              className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              초기화
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              저장하기
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

