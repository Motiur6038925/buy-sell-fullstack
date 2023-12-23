import { NextResponse } from "next/server";
import { VerifyToken } from "@/utility/JWTTokenHelper";

export async function middleware(req, res) {
  let token = req.cookies.get("token");
  if (token) {
    let payload = await VerifyToken(token["value"]);

    if (payload) {
      if (req.nextUrl.pathname.startsWith("/dashboard/adminpanel")) {
        let RoleType = ["admin", "modaretor"];
        if (!RoleType.includes(payload["usertype"])) {
          return NextResponse.redirect(new URL("/", req.url));
        } else {
          try {
            const requestHeader = new Headers(req.headers);
            requestHeader.set("email", payload["email"]);
            requestHeader.set("id", payload["id"]);
            console.log(payload);

            return NextResponse.next({
              request: { headers: requestHeader },
            });
          } catch (e) {
            return NextResponse.redirect(new URL("/login", req.url));
          }
        }
      }
    }
  }
}
