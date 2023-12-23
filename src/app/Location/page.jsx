import Location from "@/component/Location";
import React from "react";
import { PrismaClient } from "@prisma/client";
const page = async ({ params }) => {
  let Params = params.slug;
  let CategoryName = params.catagory;
  const prisma = new PrismaClient();
  const locations = await prisma.location.findMany({});
  return (
    <div>
      <Location
        Data={locations}
        CategoryParams={Params}
        CategoryName={CategoryName}
      />
    </div>
  );
};

export default page;
