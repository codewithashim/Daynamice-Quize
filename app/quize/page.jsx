import QuizeList from "@/src/Components/QuizeList/QuizeList";
import MainLayouts from "@/src/Layouts/MainLayouts";
import React from "react";

const page = () => {
  return (
    <section>
      <MainLayouts>
        <QuizeList />
      </MainLayouts>
    </section>
  );
};

export default page;
