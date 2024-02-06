"use client"
import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const EditForm = ({ id, name, quantity, amount }: any) => {
  const [newName, setNewName] = useState(name)
  const [newAmount, setNewAmount] = useState(amount)
  const [newQuantity, setNewQuantity] = useState(quantity)

  const router = useRouter()
  
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3000/api/List/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newAmount, newQuantity })
      })
      if (!res.ok) {
        throw new Error("Failed To Update new Items ")
      }

      router.push("/")
      router.refresh();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      <div className='p-4 border-2 border-slate-400 my-3 flex flex-col gap-5 items-start w-full max-w-md'>
        <h3 className='font-sans font-bold text-lg'>Edit Items</h3>
        <Input
          placeholder='Items Name'
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          className='my-4 rounded-none bg-gray-200 w-full'
        />

        <h3 className='font-sans font-bold text-lg'>Edit Amount</h3>
        <Input
          placeholder='Amount'
          onChange={(e) => setNewAmount(e.target.value)}
          value={newAmount}
          className='my-4 rounded-none bg-gray-200 w-full'
        />

        <h3 className='font-sans font-bold text-lg'>Edit Quantity</h3>
        <Input
          placeholder='Quantity'
          onChange={(e) => setNewQuantity(e.target.value)}
          value={newQuantity}
          className='my-4 rounded-none bg-gray-200 w-full'
        />
      </div>
      <Button className="mt-10 bg-green-800 text-white hover:bg-gray-400">Update Items</Button>
    </form>
  )
}

export default EditForm
