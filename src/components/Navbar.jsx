import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-blue-950 text-yellow-400 h-10 '>
        <div className='container mx-auto flex justify-between pt-2'>

        <h3>
            NextCRUD
        </h3>
        <ul className='flex gap-4'>
            <li className='hover:text-red-400'>
                <Link
                href="/"
                >Tareas</Link>
            </li>
            <li className='hover:text-red-400'>
                <Link
                href="/new"
                >Crear</Link>
            </li>
            <li className='hover:text-red-400'>
                <Link
                href="/about"
                >About</Link>
            </li>
        </ul>
                </div>
    </nav>
  )
}

export default Navbar