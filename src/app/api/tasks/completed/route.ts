import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database"
import { NextResponse } from "next/server";

export const GET = async ()  => {
 try {
  await connectDb();
  const completedTsks: TaskDocument[] = await TaskModel.find({
    isCompleted: true,
  });

  return NextResponse.json({ Message: 'タスク取得成功', tasks: completedTsks })
 } catch (error) {
  console.log(error);
  return NextResponse.json({ Message: 'タスク取得失敗' }, { status: 500 });
 }
};

export const dynamic = 'force-dynamic';