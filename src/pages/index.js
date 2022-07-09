import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { PlantCard } from "../components/Card";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <Head>
        <title>Tanaman Konservasi | Moro Donorojo 2022</title>
        <meta
          name="description"
          content="KKN-PPM (Kuliah Kerja Nyata - Pembelajaran Pemberdayaan Masyarakat) UGM adalah salah  satu bentuk  nyata  komitmen  kerakyatan  dan kebangsaan Universitas Gadjah Mada. KKN-PPM UGM ini  merupakan  mata  kuliah  wajib  yang mempunyai  sejarah  panjang;  rintisannya  telah dimulai  sejak  tahun  1951. KKN-PPM UGM 2022 Moro Donorojo menyasar dua desa yang terdapat di Kecamatan Donorojo, Kabupaten Pacitan, yaitu Desa Sendang dan Desa Kalak. KKN-PPM UGM 2022 Moro Donorojo memiliki tema 'Peningkatan Ekonomi Desa Kalak dan Sendang yang Berkelanjutan Melalui Konsep Ekowisata' yang bertujuan untuk mengembangkan potensi pariwisata dan meningkatkan ekonomi masyarkat pada Desa Sendang dan Desa Kalak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full p-3">
        <h1 className="mx-auto mb-4 max-w-sm text-center text-3xl font-bold text-forestgreen-900">
          Tanaman Konservasi di Pantai Ngiroboyo
        </h1>
        <div className="plant-list flex [&_.swiper-wrapper]:mb-10">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            pagination={true}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <PlantCard />
            </SwiperSlide>
            <SwiperSlide>
              <PlantCard />
            </SwiperSlide>
            <SwiperSlide>
              <PlantCard />
            </SwiperSlide>
            <SwiperSlide>
              <PlantCard />
            </SwiperSlide>
            <SwiperSlide>
              <PlantCard />
            </SwiperSlide>
            <SwiperSlide>
              <PlantCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="mx-auto mt-4 w-full p-3">
        <h2 className="text-center text-3xl font-bold text-forestgreen-900 mb-2">
          Mengapa kita perlu melakukan{" "}
          <span className="underline">konservasi</span>?
        </h2>
        <p className="text-justify font-body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, laboriosam dicta modi quia provident laudantium nulla
          error alias facilis dolorum facere eius cumque libero numquam possimus
          a, obcaecati temporibus magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iste temporibus perferendis, rem blanditiis vitae aliquid quo dolorum vel voluptate quas voluptatum dicta eligendi recusandae eveniet consequuntur ipsam ab reiciendis.
        </p>
      </section>

      <section className="mx-auto mt-4 min-h-screen w-full p-3">
        <h2 className="text-center text-3xl font-bold text-forestgreen-900 mb-2">
          Yang dapat kita lakukan
        </h2>
      </section>
    </div>
  );
}
