import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
const PostList = () => {

  const posts = useSelector(selectAllPosts)

  const renderPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p> {post.content.substring(0, 100)} </p>
    </article>
  ))

  return (
    <section>
      <h2>posts</h2>
      {renderPosts}
    </section>

  )
}

export default PostList
