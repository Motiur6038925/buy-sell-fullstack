import React from "react";
import Service from "@/component/Service";

const page = (params) => {
  let CategoryParams = params.searchParams.categoryparams;
  let SubCategoryParams = params.searchParams.SubcategoryParams;
  let Subcategory = params.searchParams.Subcategory;
  let LocationParams = params.searchParams.locationparams;
  let SubLocationParams = params.searchParams.sublocationparams;

  return (
    <div>
      <Service
        CategoryParams={CategoryParams}
        LocationParams={LocationParams}
        Subcategory={Subcategory}
        SubCategoryParams={SubCategoryParams}
        SubLocationParams={SubLocationParams}
      />
    </div>
  );
};

export default page;
