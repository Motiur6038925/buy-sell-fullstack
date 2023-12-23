import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let prisma = new PrismaClient();

    const result = await prisma.user.create({
      data: {
        email: "elsa@prisma.io",
        name: "Elsa Prisma",
        Status: "Pending",
      },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();

    const result = await prisma.user.findMany();

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
export async function PATCH(req, res) {
  try {
    let prisma = new PrismaClient();

    const result = await prisma.user.update({
      where: {
        id: 1,
      },
      data: {
        Status: "Active",
      },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
