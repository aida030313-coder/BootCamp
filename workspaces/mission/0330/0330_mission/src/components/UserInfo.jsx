import React from 'react'

function UserInfo() {

    const { useState } = React

    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const [age, setAge] = useState('');

    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <>
            <h4>이름:
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
            </h4>

            <h4>나이:
                <input
                    type="number"
                    value={age}
                    onChange={handleAgeChange}
                />
            </h4>

            <h4>이메일: 
                <input
                type="email"
                value={email}
                onChange={handleEmailChange}
            />
            </h4>

            <h3>프로필</h3>
            <p>{name}</p>
            <p>({age} 세)</p>
            <p>📧 {email}</p>
        </>
    )
}

export default UserInfo