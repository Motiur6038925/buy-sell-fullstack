import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    reqBody.status = "pending";
    let features = reqBody.Features;
    reqBody.Features = features.join(", ");
    let prisma = new PrismaClient();
    console.log(reqBody);

    let result = await prisma.service.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
