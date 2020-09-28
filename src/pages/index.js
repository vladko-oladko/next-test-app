import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { getUsers } from '../services/mockData'
import styles from './index.module.css'

export async function getServerSideProps() {
  const users = getUsers();
  return {
    props: {
      users
    },
  }
}

const Home = ({ users }) => {
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
            <div>Some users</div>
            {users.map(user => (
              <Link 
                key={user.id} 
                href='/user/[id]' 
                as={`/user/${user.id}`}
              >
                <a className={styles.link}>{user.name}</a>
              </Link>            
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}

Home.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  )
};


export default Home;
