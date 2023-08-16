import React from 'react'
import Link from 'next/link'
// Logo image
import Image from 'next/image'
import Logo from './dojo-logo.png'


export default function Navbar() {
  return (
    <nav>
        <Link href="/" className='inline-flex items-center gap-2'>
            <Image 
                src={Logo}
                alt="Dojo Helpdesk logo"
                width={70}
                quality={100}
                placeholder='blur'
            />
            <h2>Navigation</h2>
        </Link>
        
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
