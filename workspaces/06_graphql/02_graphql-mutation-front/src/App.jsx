import { useState } from "react"
import PostDetail from "./components/PostDetail";
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import { useMutation } from "@apollo/client/react";
import { DELETE_POST, GET_ALL_POSTS } from "./queries/postQueries";

function App() {

  const [ selectedPostId, setSelectedPostId ] = useState(null);

  const [deletePost, {loading, error, data}] = useMutation(DELETE_POST, {
    refetchQueries: [GET_ALL_POSTS]
  })

  const handleDeletePost = (e) => {
    deletePost({
      variables: { postId: selectedPostId }
    });
    setSelectedPostId(null)
  }

  return (
    <>
      <PostList setSelectedPostId={setSelectedPostId} />
      {selectedPostId && (
        <>
          <PostDetail postId={selectedPostId} />
          <button onClick={handleDeletePost}>해당 게시글 삭제</button>
        </>
      )}

      <hr />
      <PostForm />
    </>
  )
}

export default App
