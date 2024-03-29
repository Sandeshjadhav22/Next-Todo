import { ConnectDb } from "@/lib/config/db";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
dotenv.config()

const LoadDB = async() => {
    await ConnectDb()
}
LoadDB()   
 

export async function GET(request){
  return NextResponse.json({msg:"hello sandy api"})
}