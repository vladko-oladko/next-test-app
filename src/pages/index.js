import Head from 'next/head'
import Link from 'next/link'
import fetcher from '../services/fetcher'
import styles from './index.module.css'

export async function getStaticProps(context) {
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
        <div className={styles.title}>Index page (users)</div>
        <div className={styles.linkContainer}>
          {users.map(user => (
            <Link 
              key={user.id} 
              href='/user/[id]' 
              as={`/user/${user.id}`} 
            >
              {user.email}
            </Link>            
          ))}
        </div>
      </main>
    </div>
  )
}
