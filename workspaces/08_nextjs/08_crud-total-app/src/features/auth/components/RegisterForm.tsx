'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { registerAction } from "../actions";

export default function RegisterForm() {

  const [state, formAction, isPending] = useActionState(registerAction, {
    success: false,
    message: '',
    errors: {}
  })

  return (
    <form
      action={formAction}
      className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">이름</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="이름을 입력하세요"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          name= "email"
          type="email"
          placeholder="example@email.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          name= "password"
          type="password"
          placeholder="비밀번호를 입력하세요 (최소 6자)"
          required
          minLength={6}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          required
        />
      </div>

      {!state.success && state.message && (
        <div className="rounded-md bg-destructive/10 text-destructive text-sm p-3">
          {state.message}
        </div> 
      )}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? '회원가입 중...' : '회원가입'}
      </Button>
    </form>
  );
}
