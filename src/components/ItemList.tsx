// import Link from "next/link"
// import Removebutton from "./Remove"
// import { Edit } from "lucide-react"


// const getItems = async () => {
//     try {
//         const res = await fetch("http://localhost:3000/api/List", {
//             cache: "no-store"
//         })
//         if (!res.ok) {
//             throw new Error("failed to Fetch Items")
//         }
//         return res.json()
//     } catch (error) {
//         console.log("Error loading Items", error)

//     }
// }




// const ItemList = async () => {
//     const { Items } = await getItems();
//     return (

//         <>
//             {
//                 Items.map((t: any, d:any) => (


//                     <div key={d} className='p-4 border-2 font-bold border-slate-400 my-3 flex justify-between gap-5 items-start' >

//                         <div>
//                             <h2 className='text-[30px]'>Item Name....{t.name}</h2>
//                             <div>
//                                 <h2>Item Amount....{t.amount}</h2>
//                                 <h2>Item Qunatity....{t.quantity}</h2>
//                             </div>
//                         </div>
//                         <div className='flex gap-5 mr-10'> </div>

//                         <div>
//                             <Removebutton id={t._id} />

//                             <Link href={`/editItem/${t._id}`}>

//                                 <Edit />
//                             </Link>
//                         </div>

//                     </div>
//                 ))
//             }

//         </>
//     )
// }

// export default ItemList





import Link from "next/link"
import Removebutton from "./Remove"
import { Edit } from "lucide-react"

const getItems = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/List", {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("failed to Fetch Items")
        }
        return res.json()
    } catch (error) {
        console.log("Error loading Items", error)
    }
}

const ItemList = async () => {
    const { Items } = await getItems();
    return (
        <>
            {
                Items.map((t: any, d: any) => (
                    <div key={d} className='p-4 border-2 font-bold border-slate-400 my-3 grid grid-cols-3 gap-3 items-start'>
                        <div className='col-span-2'>
                            <h2 className='text-lg sm:text-xl'>Item Name: {t.name}</h2>
                            <div>
                                <h2>Item Amount: {t.amount}</h2>
                                <h2>Item Quantity: {t.quantity}</h2>
                            </div>
                        </div>
                        <div className='flex justify-end items-center gap-4'>
                            <Removebutton id={t._id} />
                            <Link href={`/editItem/${t._id}`}>
                                <Edit />
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ItemList






