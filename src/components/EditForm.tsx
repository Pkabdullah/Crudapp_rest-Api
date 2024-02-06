  "use client"
  import { Button } from '@/components/ui/button'
  import { Input } from '@/components/ui/input'
  import { useRouter } from 'next/navigation'
  import React, { useState } from 'react'
  
  const AddItems = () => {
    const [name, setname] = useState("")
    const [amount, setamount] = useState("")
    const [quantity, setquantity] = useState("")
  
    const router = useRouter()
  
    const handlesubmit = async (e: any) => {
      e.preventDefault();
  
      if (!name || !amount || !quantity) {
        alert("Item, Amount and Quantity are required.")
        return;
      }
  
      try {
        const res = await fetch("http://localhost:3000/api/List", {
          method: "POST",
          body: JSON.stringify({ name, amount, quantity }),
        });
        if (res.ok) {
          router.push("/")
          router.refresh()
        } else {
          throw Error("Failed to add Item")
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    return (
      <form onSubmit={handlesubmit} className="p-4  ">
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 items-start'>
          <div>
            <h3 className='font-bold text-lg'>Items</h3>
            <Input
              placeholder='Items Name'
              onChange={(e) => setname(e.target.value)}
              value={name}
              className='w-full my-4 rounded bg-gray-200' />
          </div>
          <div>
            <h3 className='font-bold text-lg'>Amount</h3>
            <Input
              placeholder='Amount'
              onChange={(e) => setamount(e.target.value)}
              value={amount}
              className='w-full my-4 rounded bg-gray-200' />
          </div>
          <div>
            <h3 className='font-bold text-lg'>Quantity</h3>
            <Input
              placeholder='Quantity'
              onChange={(e) => setquantity(e.target.value)}
              value={quantity}
              className='w-full my-4 rounded bg-gray-200' />
          </div>
        </div>
        <Button type='submit' className="mt-10 w-full md:w-auto bg-green-700 text-white hover:bg-gray-400">Update Items</Button>
      </form>
    )
  }
  
  export default AddItems
  