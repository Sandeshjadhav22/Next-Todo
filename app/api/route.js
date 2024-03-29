import { ConnectDb } from "@/lib/config/db";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import TodoModel from "@/lib/models/TodoModel";
dotenv.config()

const LoadDB = async() => {
    await ConnectDb()
}
LoadDB()   
 

export async function POST(request){
  const {title,description} = await request.json()
  await TodoModel.create({
    title,
    description
  })
  return NextResponse.json({msg:"Todo Created"})
}