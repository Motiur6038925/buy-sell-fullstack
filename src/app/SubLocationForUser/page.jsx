import React from "react";
import { PrismaClient } from "@prisma/client";

import SubLocationForUser from "@/component/SubLocationForUser";
const page = async (params) => {
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
      <SubLocationForUser
        Data={subLocation}
        location={location}
        locationparams={locationparams}
      />
    </div>
  );
};

export default page;
