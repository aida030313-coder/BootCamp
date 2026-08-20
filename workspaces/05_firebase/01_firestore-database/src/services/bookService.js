import { addDoc, collection, setDoc, doc, getDocs, getDoc, updateDoc, serverTimestamp, deleteField, increment, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/config.js'

// 도서 관련 데이터 CRUD
// - 필드의 값으로는 다양한 타입 모두 가능하다.

/*
    books(컬렉션, collection) [
        문서(document) {
            title: 'xxx',   // 필드(field)
            author: 'xxx',
            price: 'xxx',
            createdAt: new Date()    
        },
        문서(document) {
            title: 'xxx',   // 필드(field)
            author: 'xxx',
            price: 'xxx',
            createdAt: new Date()    
        },
        문서(document) {
            title: 'xxx',   // 필드(field)
            author: 'xxx',
            price: 'xxx',
            createdAt: new Date()    
        }
    ]
*/


// 1) 새로운 도서(document, 문서) 추가 (addDoc, collection)
// async function addBook() {
//     const docRef = await addDoc(collection(db, "books"), {
//         title: 'firebase의 모든 것',
//         author: '모닥불',
//         price: 10000,
//         createdAt: new Date()
//     })
//     console.log('추가완료된 도서의 고유 ID(식별자)', docRef.id);
// }

// addBook();


// 2) 새로운 도서(문서) 추가 (setDoc, doc)
// const addBook = async () => {
//     await setDoc(doc(db, "books", "bk_001"), {
//         title: 'React의 모든 것',
//         author: '김코딩',
//         price: 15000,
//         createdAt: new Date()
//     })
// }

// addBook();


// 3) 문서 조회 - 전체 문서 조회 (getDocs, collection)
// const getBooks = async () => {
//     const querySnap = await getDocs(collection(db, "books"));

//     console.log(querySnap.size);   // 데이터 갯수
//     console.log(querySnap.empty);   // 비어있는지 여부
//     console.log(querySnap.docs);   // 조회된 문서 목록이 배열 형태로(QueryDocumentSnapshot, ...)
//     querySnap.docs.forEach((doc) => console.log(doc.id, doc.data()));

//     const books = querySnap.docs.map((doc) => {
//         return{
//             id: doc.id,   // id까지 추가해서 결과 확인
//             ...doc.data()
//         }
//     });
//     console.log(books);
// }

// getBooks();


// 4) 문서 조회 - 단일 문서 가져오기(getDoc, doc)
// const getBook = async (bookId) => {
//     const docSnap = await getDoc(doc(db, "books", bookId));

//     if(docSnap.exists()) {
//         console.log(docSnap.id);
//         console.log(docSnap.data('title'));
//     } else {
//         console.log('조회 결과가 없습니다. ID를 확인해주세요. ')
//     }
// }

// getBook('bk_001');


// 5) 문서 수정 (updateDoc, doc)
// const updateBook = async (bookId) => {
//     try {
//         await updateDoc(doc(db, "books", bookId), {
//             title: '수정 타이틀',
//             author: deleteField(),
//             price: increment(5000),
//             createdAt: serverTimestamp()
//         })
//     } catch(error) {
//         console.log('문서 오류 수정');
//     }
// }

// updateBook('bk_001');


// 6) 문서 삭제 (deleteDoc, doc)
const deleteBook = async (bookId) => {
    await deleteDoc(doc(db, "books", bookId));
}

deleteBook('bk_001');