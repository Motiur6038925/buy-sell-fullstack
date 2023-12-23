import { jwtVerify, SignJWT } from "jose";

export async function CreateToken(email, id, usertype) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  console.log(usertype);
  let token = await new SignJWT({ email: email, id: id, usertype: usertype })

    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
    .sign(secret);
  return token;
}

export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decoded = await jwtVerify(token, secret);
  return decoded["payload"];
}
