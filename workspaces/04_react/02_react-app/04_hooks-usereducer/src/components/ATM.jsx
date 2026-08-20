import { useReducer, useState } from "react";

/*
    reducer: 업무 규칙에 따라 일 처리해주는 은행 직원
    state: 현재 계좌 상태 {accountId: 현재 계좌 번호, balance: 현재 계좌 잔액}
    action: 고객이 작성한 입금 또는 출금 요청서 {type: "요청종류", payload: 데이터 }
    dispatch: 고객이 요청서를 작성한 후 직원을 부르는 기능

*/

function bankReducer(state, action) {
  switch (action.type) {
    case "입금":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "출금":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

function ATM() {
  // 상태관리1. 계좌 정보 관리 - 입금, 출금 요청에 따라 잔액 정보를 수정
  const [account, dispatch] = useReducer(bankReducer, {
    accountId: "123-456-789",
    balance: 10000,
  });

  // 상태관리2. 사용자가 입력하는 금액값 관리 - 사용자의 입력에 따라, 입금/출금 완료됐을 때 초기화
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h2>현재 계좌 번호 : {account.accountId}</h2>
      <h2>현재 계좌 잔액 : {account.balance}</h2>
      <input
        type="number" // 숫자로 입력할 수 있게 하는것 문자열로 반환됨
        placeholder="금액"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <br />

      <button onClick={() => dispatch({ type: "입금", payload: amount })}>
        입금
      </button>
      <button onClick={() => dispatch({ type: "출금", payload: amount })}>
        출금
      </button>
    </>
  );
}
export default ATM;