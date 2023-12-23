import React from "react";
import Service from "@/component/Service";

const page = ({ params }) => {
  let CategoryParams = params.categoryslug;
  let LocationParams = params.locationslug;

  return (
    <div>
      <Service
        CategoryParams={CategoryParams}
        LocationParams={LocationParams}
      />
    </div>
  );
};

export default page;
