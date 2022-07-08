import React, { useState } from "react";

import BackArrowHeader from "../../components/BackArrowHeader";
import Carousel from "../../components/Carousel";
import { MainButton } from "../../components/Button";

const DetailTanaman = () => {
  const [activeCategory, setActiveCategory] = useState("peran");

  return (
    <section className="mx-auto w-full xl:container">
      <div className="mt-3 px-3">
        <BackArrowHeader />
      </div>
      <div className="image-carousel p-3">
        <Carousel />
      </div>
      <div className="plant-detail min-h-screen w-full rounded-tr-2xl rounded-tl-2xl bg-mutedgray-25 p-3">
        <div className="category-buttons w-full child:mx-3">
          <MainButton
            data-category="peran"
            onClick={(e) => setActiveCategory(e.target.dataset.category)}
            isActive={activeCategory === "peran"}
          >
            Peran
          </MainButton>
          <MainButton
            data-category="morfologi"
            onClick={(e) => setActiveCategory(e.target.dataset.category)}
            isActive={activeCategory === "morfologi"}
          >
            Morfologi
          </MainButton>
          <MainButton
            data-category="persebaran"
            onClick={(e) => setActiveCategory(e.target.dataset.category)}
            isActive={activeCategory === "persebaran"}
          >
            Persebaran
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default DetailTanaman;
