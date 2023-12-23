import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    let reqBody = await req.json();

    let prisma = new PrismaClient();
    console.log(reqBody);

    let result = await prisma.catagory.create({
      data: reqBody,
    });
    console.log(result);

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}

export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();

    let result = await prisma.catagory.findMany({});
    console.log(result);

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
