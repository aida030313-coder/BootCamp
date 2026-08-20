"use client";

import { useEffect, useRef, useState } from "react";

/*
    1. 컴포넌트 마운트시(최초 1회)
        1) 현재 사용자의 브라우저에서 SpeechRecognition(WebSpeechAPI) 지원하는지 여부 판단
        2) 지원할 경우, SpeechRecognition 인스턴스 초기화 및 각종 속성, 이벤트 핸들러 바인딩
    2. 음성 입력 시작시(이벤트 핸들러)
        1) SpeechRecognition 인스턴스 생성여부, 브라우저 지원 여부 체크
        2) SpeechRecognition객체.start() 실제 음성인식 시작(비동기)
    3. 음성 인식 종료시(이벤트 핸들러)
        1) SpeechRecognition 인스턴스 존재여부 체크
        2) SpeechRecognition객체.stop()
*/

export default function STT_WebSpeechAPI() {

  const [hasSTTSupport, setHasSTTSupport] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [userText, setUserText] = useState("");

  const recognitionRef = useRef<any>(null);

  useEffect(() => {

    // 클라이언트 환경이 브라우저 환경인지 체크
    if(typeof window == "undefined") return;

    // 브라우저 호환성 체크
    // - window 객체에 내장되어있는 SpeechRecognition 생성자 찾기(브라우저마다 이름이 다름)
    // - 찾아지지 않을 경우 === 지원이 되지 않음
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if(SpeechRecognition) {   // 찾아졌을 경우 === 지원됨
        setHasSTTSupport(true)

        // 음성인식을 위한 인스턴스(SpeechRecognition) 생성 및 설정, 이벤트 핸들러 바인딩
        const recognition = new SpeechRecognition();
        recognition.lang = 'ko-KR'   // 인식 언어 설정
        recognition.continuous = true;   // false(단일 문장 인식) true(여러 문장, 연속 인식)
        recognition.interimResults = true;   // false(최종 결과만) true(중간 결과와 최종 결과 같이)

        recognition.onend = () => {   // 음성 인식 세션 종료 시 발생되는 이벤트(end)에 대한 이벤트 핸들러
            setIsListening(false)
        }

        recognition.onerror = () => {   // 다양한 경우에서의 에러가 발생될 때 실행되는 이벤트(error)
            setIsListening(false)
        }

        recognition.onresult = (event: any) => {   // 인식된 텍스트 결과가 들어올 때마다 실행되는 이벤트(result)
            
            // 로그 확인
            console.log('=============== result 이벤트 발생!! ===============');
            console.log('event: ', event);
            console.log('event.results: ', event.results)

            // 단일 문장 인식(continuous: false), 실시간 X === 최종결과만(interimResults: false)
            // const finalTranscript = event.results[0][0].transcript;
            // setUserText(finalTranscript);

            // 여러 문장 인식(continuous: true), 실시간 O === 중간결과 받기(interimResults: true)
            for(let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                if(result.isFinal) {
                    setUserText((prev) => prev + result[0].transcript + "\n");
                }
            }
        }
        recognitionRef.current = recognition;   // 외부에서 사용하기 위해 기록
    }
  }, [])

  const handleStartListening = () => {   // 마운트 시점에 생성된 SpeechRecognition 객체 필요

    // 브라우저 지원 여부 체크, recognition 객체 생성 여부 체크
    if(!hasSTTSupport || !recognitionRef.current) return;

    // 음성인식 시작 => start()
    try {
        recognitionRef.current.start();   // 마이크 on => 권한 요청
        setIsListening(true);
    } catch(error) {
    }
  };

  const handleStopListening = () => {
    if(!recognitionRef.current) return;

    try {
        recognitionRef.current.stop();
        setIsListening(false);
    } catch(error) {}
  };


  return (
    <section className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-4">

      <div className="mb-5 bg-zinc-50 text-xs text-zinc-700 flex justify-between">
        <span className="font-semibold">브라우저 지원 상태 - STT </span>{" "}
        {hasSTTSupport ? (
          <span className="text-emerald-700">지원됨 ✅</span>
        ) : (
          <span className="text-red-600">미지원 ⚠️</span>
        )}
      </div>
      
      
      <h2 className="mb-2 text-sm font-semibold text-zinc-900">
        STT - Web Speech API (SpeechRecognition) 활용
      </h2>
      <p className="mb-3 text-xs text-zinc-600">
        마이크 버튼을 눌러 말해 보세요. <code>onresult</code>와 <code>onend</code>{" "}
        이벤트를 통해 결과를 처리합니다.
      </p>

      <div className="mb-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleStartListening}
          disabled={!hasSTTSupport || isListening}
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-white transition ${
            !hasSTTSupport || isListening
              ? "cursor-not-allowed bg-zinc-400"
              : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          <span>🎤 음성 입력 시작</span>
        </button>
        <button
          type="button"
          onClick={handleStopListening}
          disabled={!isListening}
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition ${
            !isListening
              ? "cursor-not-allowed border border-zinc-200 bg-white text-zinc-400"
              : "border border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
          }`}
        >
          ⏹️ 음성 입력 종료
        </button>
        <span className="inline-flex items-center text-xs text-zinc-500">
          상태:{" "}
          <span
            className={`ml-1 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
              isListening
                ? "bg-emerald-50 text-emerald-700"
                : "bg-zinc-100 text-zinc-500"
            }`}
          >
            {isListening ? "LISTENING..." : "IDLE"}
          </span>
        </span>
      </div>

      <label className="mb-1 text-xs font-medium text-zinc-700">
        사용자가 말한 내용 (텍스트 입력창)
      </label>
      <textarea
        className="min-h-[120px] w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        placeholder="마이크 버튼을 누르고 말해 보세요."
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />
    </section>
  );
}