import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {

        
        const tasks = await prisma.task.findMany();
        console.log(tasks);
        return NextResponse.json(tasks)
    } catch (error) {
        return NextResponse.json('error: ' + error)
    }
}

export async function POST(request) {
    const {title, desciption} =  await request.json();
    const newTask = await prisma.task.create({
        data: {
            title, 
            desciption
        }
    });
    return NextResponse.json(newTask)
}