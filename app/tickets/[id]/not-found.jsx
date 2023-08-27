import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'> 
      <h2 className='text-3xl'>There is a problem</h2>
      <p>We could not find the page you were looking for..</p>
      <p>Go back to all <Link href="/tickets">Tickets</Link></p>
    </main>
  )
}
