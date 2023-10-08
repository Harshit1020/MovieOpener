import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='container mt-5'>
    <br /><br /><br /><br /><br />
    <div className="mt-4 text-center text-gray-500">
    <h3>Sorry Page Not Found 😒</h3>
    &copy; {new Date().getFullYear()} Made with ❤️ by harshit.
    <br />
    <Link href="/">Go to home page</Link>

  </div>
  </div>

  )
}

export default page