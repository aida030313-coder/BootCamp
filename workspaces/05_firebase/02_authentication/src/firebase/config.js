import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'   // db 객체를 얻기 위한 함수
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADDBH_Xv_mBEk5XMvCIGEgJLnz-iKJRMc",
  authDomain: "my-firebase-project-8197c.firebaseapp.com",
  projectId: "my-firebase-project-8197c",
  storageBucket: "my-firebase-project-8197c.firebasestorage.app",
  messagingSenderId: "810248052056",
  appId: "1:810248052056:web:ca40b5534efb75f1aed92d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firestore 라이브러리 사용을 위한 객체 가져오기
export const db = getFirestore(app);
export const auth = getAuth(app);