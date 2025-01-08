import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const allGadgets = useLoaderData();
  const { category } = useParams();

  const [allData, setAllData] = useState(allGadgets);

  useEffect(() => {
    if (!category) {
      setAllData([...allGadgets].slice(0, 7));
    } else if (category === "All Product") {
      setAllData(allGadgets);
      // console.log(category);
    } else {
      const arr = [...allGadgets].filter((item) => item.category == category);
      setAllData(arr);
    }
  }, [category, allGadgets]);

  // console.log(allData.length);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allData.length > 0 ? (
        allData.map((item) => <Card key={item.product_id} gadget={item}></Card>)
      ) : (
        <div className="flex justify-center items-center">
          <p className="font-bold text-3xl text-[#09080F] ">No data found</p>
        </div>
      )}
    </div>
  );
};

export default Cards;
