import fetcher from '../../services/fetcher'
import styles from './[id].module.css'

export async function getServerSideProps({ params }) {
  const posts = await fetcher(`/posts?user_id=${params.id}`)
  return {
    props: {
      posts
    },
  }
}

export default function Home({ posts }) {
  return (
    <>
      <div>Some posts</div>
      {posts.map(post => (
        <div className={styles.postContainer} key={post.id}>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </>
  )
}
