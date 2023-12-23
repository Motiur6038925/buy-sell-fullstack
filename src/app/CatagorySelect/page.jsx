import CatagorySelect from "@/component/CatagorySelect";
import React from "react";
import { PrismaClient } from "@prisma/client";

const page = async () => {
  const prisma = new PrismaClient();
  const categories = await prisma.catagory.findMany({});
  const locations = await prisma.location.findMany({});
  return (
    <div>
      <CatagorySelect Data={{ categories, locations }} />
    </div>
  );
};

export default page;
