export interface User {
    id:number;
    email: string;
    name: string;
    role: string;
}

// 로그인 요청과 관련된 타입
export interface LoginRequest {
    email: string;
    password: string;
}

// 로그인 응답과 관련된 타입
export interface LoginResponse {
    accessToken: string;
    user: User;
}

// 회원가입 요청
export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

// 회원가입 응답
export interface RegisterResponse {
    message: string;
    user: User;
}
