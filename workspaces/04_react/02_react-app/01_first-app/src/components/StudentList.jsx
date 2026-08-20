import React from 'react'
import StudentItem from './StudentItem';

// rfce 단축키
function StudentList() {

  const students = [
      {id: 1, name: '홍길동', age: 20}, 
      {id: 2, name: '이길동', age: 22}, 
      {id: 3, name: '김길동', age: 25}
  ];

  return (
    <>
        <h2>학생 목록</h2>
        <div>
          { students.map((student) => <StudentItem key={student.id} stu={student}/>)}
        </div>
    </>
  )
}

export default StudentList
