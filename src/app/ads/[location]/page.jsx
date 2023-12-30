import Hero2 from "@/component/Hero2";
import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";
import React from "react";

const page = async (context) => {
  // let Slug = params.searchParams.slug;
  // let location = params.location;
  // const { params, query } = context;

  const { params, searchParams } = context;
  const location = params.location;
  const Slug = searchParams.slug;

  const prisma = new PrismaClient();
  const locations = await prisma.location.findMany({});
  const Sublocations = await prisma.sublocation.findMany({});
  let data = [];
  // it is old
  if (location == "Bangladesh") {
    data = await prisma.service.findMany({
      where: {
        OR: [
          {
            catagoryid: parseInt(Slug),
          },
          { subcatagoryId: parseInt(Slug) },
        ],
      },
    });
  } else {
    data = await prisma.service.findMany({
      where: {
        AND: [
          {
            OR: [
              { catagoryid: parseInt(Slug) },
              { subcatagoryId: parseInt(Slug) },
            ],
          },
          {
            sublocationId: parseInt(location),
          },
        ],
      },
    });
  }

  return (
    <div>
      <Hero2
        Data={data}
        locations={locations}
        Sublocations={Sublocations}
        Slug={Slug}
      />
    </div>
  );
};

export default page;
