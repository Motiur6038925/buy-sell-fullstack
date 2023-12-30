import Location from "@/component/Location";
import LocationSelectForUser from "@/component/LocationSelectForUser";

import { PrismaClient } from "@prisma/client";
const page = async (params) => {
  const prisma = new PrismaClient();
  const locations = await prisma.location.findMany({});
  return (
    <div>
      <LocationSelectForUser Data={locations} />
    </div>
  );
};

export default page;
