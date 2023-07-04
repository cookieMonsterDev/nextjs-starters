import axios from 'axios'
import React from 'react'

const Page = async () => {
  
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default Page