import Hero2 from "@/component/Hero2";
import { PrismaClient } from "@prisma/client";
import React from "react";

const page = async ({ params }) => {
  const prisma = new PrismaClient();
  const ads = await prisma.catagory.findFirst({
    where: {
      id: parseInt(params.slug),
    },
    include: {
      service: true,
    },
  });

  let data = ads.service;

  return (
    <div>
      <Hero2 Data={data} />
    </div>
  );
};

export default page;
