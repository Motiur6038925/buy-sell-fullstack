import CatagorySelect from "@/component/CatagorySelect";
import Subcategory from "@/component/Subcategory";

import { PrismaClient } from "@prisma/client";

const page = async (params) => {
  const categoryParams = params.searchParams.categoryparams;
  const CategoryName = params.searchParams.category;

  const prisma = new PrismaClient();

  const Subcategories = await prisma.subcatagory.findMany({
    where: {
      catagoryid: parseInt(categoryParams),
    },
  });
  console.log(Subcategories);

  let data = Subcategories;
  return (
    <div>
      <Subcategory
        Subcategories={data}
        CategoryParams={categoryParams}
        CategoryName={CategoryName}
      />
    </div>
  );
};

export default page;
