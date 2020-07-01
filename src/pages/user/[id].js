import Head from 'next/head'
import fetcher from '../../services/fetcher'

export async function getStaticProps({ params }) {
  console.log(params.id)
  const user = await fetcher(`/users/${params.id}`)
  return {
    props: {
      user
    },
  }
}

export async function getStaticPaths() {
  const users = await fetcher('/users?page=1')
  return {
    paths: users.map(user => ({ params: { id: user.id } })),
    fallback: false
  };
}

export default function Home({ user }) {
  return (
    <>
      <div>User Details</div>
      <div>{user.first_name}</div>
      <div>{user.email}</div>
    </>
  )
}
