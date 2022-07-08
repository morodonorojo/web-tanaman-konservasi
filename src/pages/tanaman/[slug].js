import React, { useState } from "react";
import clsx from "clsx";

import BackArrowHeader from "../../components/BackArrowHeader";
import Carousel from "../../components/Carousel";
import { MainButton } from "../../components/Button";

const DetailTanaman = ({...props}) => {
  const [activeCategory, setActiveCategory] = useState("peran");

  return (
    <section className="mx-auto w-full xl:container" {...props}>
      <div className="mt-3 px-3">
        <BackArrowHeader />
      </div>
      <div className="image-carousel p-3">
        <Carousel />
      </div>
      <div className="plant-detail min-h-screen w-full rounded-tr-2xl rounded-tl-2xl bg-mutedgray-25 p-3">
        <div className="category-buttons w-full child:mx-1">
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
        <div className="explanation relative font-body text-sm text-justify mt-4">
          <div
            data-category="peran"
            className={clsx(
              "absolute w-full",
              activeCategory === "peran"
                ? "left-0 transition-all opacity-100"
                : "-left-[5555px] transition-all opacity-0"
            )}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              odit delectus ullam reprehenderit placeat sapiente ex animi non
              ea! Molestiae, quisquam non aspernatur minima iste illum id vitae
              sed consequuntur?
            </p>
          </div>
          <div
            data-category="morfologi"
            className={clsx(
              "absolute w-full",
              activeCategory === "morfologi"
                ? "left-0 transition-all opacity-100"
                : "-left-[5555px] transition-all opacity-0"
            )}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              odit delectus ullam reprehenderit placeat sapiente ex animi non
              ea! Molestiae, quisquam non aspernatur minima iste illum id vitae
              sed consequuntur?
            </p>
          </div>
          <div
            data-category="persebaran"
            className={clsx(
              "absolute w-full",
              activeCategory === "persebaran"
                ? "left-0 transition-all opacity-100"
                : "-left-[5555px] transition-all opacity-0"
            )}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              odit delectus ullam reprehenderit placeat sapiente ex animi non
              ea! Molestiae, quisquam non aspernatur minima iste illum id vitae
              sed consequuntur?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailTanaman;
