import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

import { CreateToken } from "@/utility/JWTTokenHelper";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();

    let prisma = new PrismaClient();
    let result = await prisma.users.findFirst({
      where: reqBody,
    });

    if (!result) {
      return NextResponse.json({ status: "Fail", data: result });
    } else {
      let token = await CreateToken(
        result["email"],
        result["id"],
        result["roleType"]
      );
      let usertype = result["roleType"];

      const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
      let cookieString = `token=${token}; expires=${expirationDate.toUTCString()}; path=/;`;

      return NextResponse.json(
        { status: "success", data: token },
        { status: 200, headers: { "Set-Cookie": cookieString } }
      );
    }
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
