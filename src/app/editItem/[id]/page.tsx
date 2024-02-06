import EditForm from '@/components/EditForm'
import React from 'react'

const getitemsById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/List/${id}`, {
      cache: "no-store"
    })

    if (!res.ok) {
      throw new Error("Failed to Fetch Items")
    }
    return res.json()

  } catch (error) {
    console.log(error)

  }
}


const EditItem = async ({ params }: any) => {
  const { id } = params
  const { item } = await getitemsById(id)
  const { name, quantity, amount } = item
  return (
    <div>

      <EditForm id={id} name={name} quantity={quantity} amount={amount} />

    </div>
  )
}

export default EditItem