import React from "react";
import { PrismaClient } from "@prisma/client";
import SubLocation from "@/component/SubLocation";
const page = async (params) => {
  let CategoryParams = params.searchParams.categoryparams;
  let CategoryName = params.searchParams.catagory;
  let location = params.searchParams.location;
  let locationparams = params.searchParams.locationparams;
  const Prisma = new PrismaClient();
  const subLocation = await Prisma.sublocation.findMany({
    where: {
      locationid: parseInt(locationparams),
    },
  });
  return (
    <div>
      <SubLocation
        Data={subLocation}
        CategoryParams={CategoryParams}
        CategoryName={CategoryName}
        location={location}
        locationparams={locationparams}
      />
    </div>
  );
};

export default page;
