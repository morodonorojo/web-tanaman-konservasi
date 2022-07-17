import React, { useState } from "react";
import clsx from "clsx";

import { createClient } from "../../../prismicio";

import BackArrowHeader from "../../components/BackArrowHeader";
import Carousel from "../../components/Carousel";
import { MainButton } from "../../components/Button";

const DetailTanaman = ({ plantDetail, ...props }) => {
  const [activeCategory, setActiveCategory] = useState("peran");

  return (
    <section className="w-full mx-auto max-w-xl overflow-hidden" {...props}>
      <div className="mt-3 px-3">
        <BackArrowHeader
          plantName={plantDetail.data.plantName}
          plantNameLatin={plantDetail.data.plantNameLatin}
        />
      </div>
      <div className="image-carousel p-3">
        <Carousel imageData={plantDetail.data.slices[0].items} />
      </div>
      <div className="w-full pl-3 mb-3 text-sm">
        Status Konservasi: {plantDetail.data.conservationStatus}
      </div>

      <div className="plant-detail min-h-screen w-full rounded-tr-2xl rounded-tl-2xl bg-mutedgray-25 p-3">
        <div className="category-buttons w-full child:mx-1 flex justify-center">
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
        <div className="explanation relative mt-4 text-justify font-body text-sm">
          <div
            data-category="peran"
            className={clsx(
              "absolute w-full duration-500",
              activeCategory === "peran"
                ? "left-0 opacity-100 transition-all"
                : "-left-[5555px] opacity-0 transition-all"
            )}
          >
            <p>{plantDetail.data.usage[0].text}</p>
          </div>
          <div
            data-category="morfologi"
            className={clsx(
              "absolute w-full duration-500",
              activeCategory === "morfologi"
                ? "left-0 opacity-100 transition-all"
                : "-left-[5555px] opacity-0 transition-all"
            )}
          >
            <p>{plantDetail.data.morphology[0].text}</p>
          </div>
          <div
            data-category="persebaran"
            className={clsx(
              "absolute w-full duration-500",
              activeCategory === "persebaran"
                ? "left-0 opacity-100 transition-all"
                : "-left-[5555px] opacity-0 transition-all"
            )}
          >
            <p>{plantDetail.data.habitat[0].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailTanaman;

export async function getStaticProps(context) {
  const client = createClient();

  const plantDetail = await client.getByUID("plantdata", context.params.uid);

  return {
    props: { plantDetail },
  };
}

export async function getStaticPaths(context) {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const plantDetail = await client.getAllByType("plantdata");

  const paths = plantDetail.map((plant) => ({
    params: {
      uid: plant.uid,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
