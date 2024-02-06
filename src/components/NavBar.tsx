
import React from 'react'
import { Button } from "../components/ui/button"
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <div className='flex flex-col sm:flex-row justify-between items-center px-4 sm:px-12 py-4 bg-slate-500 text-center sm:h-16 mb-8'>
                <h1 className='text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-0 mt-5'>
                    <Link href="/" className='text-[30px] sm:text-xl'>Grocery List</Link>
                </h1>
                <Link href={"/addItem"} className='sm:ml-4 mt-8'>
                    <Button className='bg-black text-white mt-2 sm:mt-0 hover:bg-black'>Add Items</Button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
