import getCurrentUser from '@/actions/getCurrentUser'
import React from 'react'

const Public =  async () => {
  const user = await getCurrentUser()

  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default Public