import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }   
    })
    return NextResponse.json(task)
}

export async function PUT(request, {params}) {
    const reqValues =  await request.json()
    const updatedTask = await prisma.task.update({
        where : {
            id: Number(params.id)
        },
        data: reqValues 
    })

    return NextResponse.json(updatedTask)
}

export  async function DELETE(request, {params}) {
    try {
        
        
        const deletedTask = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }   
        })
        return NextResponse.json("tarea eliminada");
    } catch (error) {
        return NextResponse.json(error.message)
    }
}