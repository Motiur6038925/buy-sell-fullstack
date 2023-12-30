import SubCategorySelectForUser from "@/component/SubCategorySelectForUser";

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
      <SubCategorySelectForUser
        Subcategories={data}
        CategoryParams={categoryParams}
        CategoryName={CategoryName}
      />
    </div>
  );
};

export default page;
