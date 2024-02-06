import connectMongoDB from "../../libs/mongoes";
import Item from "../../models/Item";
import { NextResponse } from "next/server";


export async function POST(request) {

    const { name, quantity, amount } = await request.json();
    await connectMongoDB();
      await  Item.create({ name, amount, quantity });
    return NextResponse.json({ message: "Items Created" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const Items = await Item.find();
    return  NextResponse.json({Items})
}

export async function DELETE (request) {
    const id = await request.nextUrl.searchParams.get("id")
    await connectMongoDB();
    await Item.findByIdAndDelete(id);
    return NextResponse.json ({message:"Item deleted"} , {status:200})

}

