import NavBar from '@/components/NavBar'
import { useSession } from 'next-auth/react'
import React from 'react'

const Home = () => {
  const { data } = useSession()

  console.log(data);

  return (
    <div>
      <NavBar />
    </div>
  )
}

export default Home