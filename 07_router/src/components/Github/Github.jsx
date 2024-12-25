import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hitestchoudhary')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])

  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-md'>
        Github Followers: {data.followers} 
        <img src={data.avatar_url} alt="" width={200} className='rounded-md'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}