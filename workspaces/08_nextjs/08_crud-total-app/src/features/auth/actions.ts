'use server'

import { login, register } from "@/services/auth.service";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ActionState = {
    success: boolean;
    message?: string;
    errors?: Record<string, string>;
}

export const loginAction = async (prevState: ActionState, formData: FormData): Promise<ActionState> => {
    // 사용자 입력값 formData 뽑기
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // 데이터 가공
    const payload = {email, password};

    // API 요청
    let data;

    try {
        data = await login(payload);
    } catch(error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Unknown Error'
        }
    }

    // 로그인 성공 시 data === {accessToken: 출입증, user: User 객체}
    // accessToken => 쿠키에 저장 xss

    // localstorage
    // 1. 브라우저에 계속 유지됨(자동 만료 없음)
    // 2. javascript로 자유롭게 접근 가능 => xss 공격 시 토큰이 탈취될 수 있음(보안 취약)

    // sessionStorage
    // 1. 브라우저 탭 종료 자동 삭제
    // 2. javascript로 자유롭게 접근 가능 => xss 공격 시 토큰이 탈취될 수 있음(보안 취약)

    // cookie
    // 1. 옵션 설정 가능 (HttpOnly) => JS 접근 불가 => xss 공격으로부터 토큰 보호 가능
    // 2. 만료 시간 설정 가능
    const cookieStore = await cookies();

    cookieStore.set('accessToken', data.accessToken, {
        httpOnly: true,   // 자바스크립트에 접근 불가(XXS 방지, 객체)
        maxAge: 60 * 60,    // 1시간
        path: '/'
    });

    if (data.user.role === "ADMIN") {
      redirect("/admin");
    } else {
      redirect("/");
    }
}

export const logoutAction = async () => {
    // 쿠키에 저장된 accessToken 제거
    const cookieStore = await cookies();
    cookieStore.delete('accessToken');
    redirect('/');

    // cookie는 next에서 제공하는 함수이기 때문에 use client에서 사용 불가
    // 예) post.service.ts 내부에서 사용 불가
}

export const registerAction = async (prevState: ActionState, formData: FormData): Promise<ActionState> => {
    // 사용자 입력값 formData 뽑기
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    // 데이터 가공
    const payload = {name, email, password};

    if (password != confirmPassword) {
        return {
            success: false,
            message: '비밀번호 확인 오류 발생'
        }
    }

    // API 요청
    let data;
    try {
        data = await register(payload);
    } catch(error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Unknown Error'
        }
    }
    
    redirect('/auth/login');
}
