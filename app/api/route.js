import { ConnectDb } from "@/lib/config/db";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import TodoModel from "@/lib/models/TodoModel";
dotenv.config();

const LoadDB = async () => {
  await ConnectDb();
};
LoadDB();

export async function POST(request) {
  const { title, description } = await request.json();
  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "Todo Created" },{
    status:201
  });
}

export async function GET(request) {
  const todos = await TodoModel.find({});

  return NextResponse.json({ todos });
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id")
  await TodoModel.findByIdAndDelete(id)

  return NextResponse.json({msg:"Todo Deleted"},{
    status:200
  });
}
