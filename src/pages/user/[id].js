import { useRouter } from 'next/router'
import { useUser } from '../../hooks/fetchHooks/user'

export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const { user, isLoading } = useUser(id)

  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <>
      <div>User Details</div>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
    </>
  )
}
