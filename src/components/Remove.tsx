"use client"
import { Delete } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

const Remove = ({id}:any) => {
  const router = useRouter();

  const remove = async () => {
    const confirmed = confirm("Are you Sure");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/List?id=${id}`,
        {
          method: "DELETE",
        }
      )
      if (res.ok)
       { router.refresh()
       }

    }
  }
  return (
    <div>
        
        <button onClick={remove} className='text-red-400'>
            <Delete/>
        </button>
    </div>
  )
}

export default Remove  


