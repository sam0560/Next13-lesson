import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav>
        <h2>Navigation</h2>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
