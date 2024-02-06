"use client"
import React from 'react'
import { DeleteIcon } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function Delete({ id }: any) {
  const router = useRouter();

  const remove = async () => {
    const confirmed = confirm("Are you Sure");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/grocery?id=${id}`,
        {
          method: "DELETE",
        }
      )
      if (res.ok)
       { router.refresh() }

    }
  }
  return (
    <div>
      <button onClick={remove} className='text-red-400'>
        <DeleteIcon />
      </button>
    </div>
  )
}

