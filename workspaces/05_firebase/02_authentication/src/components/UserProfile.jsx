import React, { useEffect, useState } from 'react'
import { logout } from '../services/authService'
import { auth, db } from '../firebase/config'
import { getDoc, doc } from 'firebase/firestore';

function UserProfile() {

    const [UserProfile, setUserProfile] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const docsnapshot = await getDoc(doc(db, "users", auth.currentUser.uid));
            setUserProfile(docsnapshot.data())
        }
        fetchUser();
    }, [])

    const handleLogout = async () => {
        await logout()
    }

    return (
        <div>
            <h2>사용자 프로필</h2>
            <p>이메일: {auth.currentUser.email}</p>
            <p>UID: {auth.currentUser.uid}</p>
            <p>생성일: {new Date(auth.currentUser.metadata.creationTime).toLocaleString()}</p>
            <p>마지막 로그인: {new Date(auth.currentUser.metadata.lastSignInTime).toLocaleString()}</p>

            <>
                <p>이름: {UserProfile.name}</p>
                <p>주소: {UserProfile.address}</p>
                <p>성별: {UserProfile.gender}</p>
                <p>권한: {UserProfile.role}</p>
            </>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    )
}

export default UserProfile
