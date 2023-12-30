import Location from "@/component/Location";

import { PrismaClient } from "@prisma/client";
const page = async (params) => {
  let categoryParams = params.searchParams.categoryParams;

  let Subcategory = params.searchParams.subcat;
  let SubcategoryParams = params.searchParams.subcatid;
  let CategoryName = params.searchParams.category;

  const prisma = new PrismaClient();
  const locations = await prisma.location.findMany({});

  return (
    <div>
      <Location
        Data={locations}
        CategoryParams={categoryParams}
        CategoryName={CategoryName}
        Subcategory={Subcategory}
        SubcategoryParams={SubcategoryParams}
      />
    </div>
  );
};

export default page;
