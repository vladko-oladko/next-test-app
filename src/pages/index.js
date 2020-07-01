import Head from 'next/head'
import Link from 'next/link'
import fetcher from '../services/fetcher'
import styles from './index.module.css'

export async function getStaticProps() {
  const users = await fetcher('/users?page=1')
  return {
    props: {
      users
    },
  }
}

export default function Home({ users }) {
  console.log(users)
  return (
    <div className="container">
      <Head>
        <title>Next Text App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.title}>Index page (users) (static)</div>
        <div className={styles.container}>
          <div className={styles.linkContainer}>
            <div>Links to static rendered users</div>
            {users.map(user => (
              <Link 
                key={user.id} 
                href='/user/[id]' 
                as={`/user/${user.id}`}
              >
                <a className={styles.link}>{user.email}</a>
              </Link>            
            ))}
          </div>
          <div className={styles.linkContainer}>
            <div>Links to server rendered posts</div>
            {users.map(user => (
              <Link 
                key={user.id} 
                href='/posts/[id]' 
                as={`/posts/${user.id}`}
              >
                <a className={styles.link}>{user.email}</a>
              </Link>            
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}
