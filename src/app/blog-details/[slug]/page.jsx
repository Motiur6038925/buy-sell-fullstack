import React from "react";
import { PrismaClient } from "@prisma/client";

import BlogDetails from "@/component/BlogDetails";

async function getData(id) {
  const prisma = new PrismaClient();
  let Details = await prisma.service.findFirst({ where: { id: parseInt(id) } });
  return Details;
}

async function page({ params }) {
  let id = params.slug;

  let data = await getData(id);
  console.log(data);
  return (
    <main>
      {/* Blog Details */}
      <BlogDetails data={data} />
    </main>
  );
}

export default page;
