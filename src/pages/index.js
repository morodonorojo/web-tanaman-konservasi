import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { PlantCard } from "../components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tanaman Konservasi | Moro Donorojo 2022</title>
        <meta
          name="description"
          content="KKN-PPM (Kuliah Kerja Nyata - Pembelajaran Pemberdayaan Masyarakat) UGM adalah salah  satu bentuk  nyata  komitmen  kerakyatan  dan kebangsaan Universitas Gadjah Mada. KKN-PPM UGM ini  merupakan  mata  kuliah  wajib  yang mempunyai  sejarah  panjang;  rintisannya  telah dimulai  sejak  tahun  1951. KKN-PPM UGM 2022 Moro Donorojo menyasar dua desa yang terdapat di Kecamatan Donorojo, Kabupaten Pacitan, yaitu Desa Sendang dan Desa Kalak. KKN-PPM UGM 2022 Moro Donorojo memiliki tema 'Peningkatan Ekonomi Desa Kalak dan Sendang yang Berkelanjutan Melalui Konsep Ekowisata' yang bertujuan untuk mengembangkan potensi pariwisata dan meningkatkan ekonomi masyarkat pada Desa Sendang dan Desa Kalak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="xl:container mx-auto w-full p-3">
        <h1 className="text-3xl font-bold text-center text-forestgreen-900 mb-8">
          Tanaman Konservasi di Pantai Ngiroboyo
        </h1>
        <div className="plant-list flex">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
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
          </Swiper>
          {/* <PlantCard /> */}
        </div>
      </section>

      <section className="xl:container mx-auto w-full min-h-screen p-3">
        <h2 className="text-3xl font-bold text-center text-forestgreen-900">
          Mengapa kita perlu melakukan{" "}
          <span className="underline">konservasi</span>?
        </h2>
      </section>

      <section className="xl:container mx-auto w-full min-h-screen p-3">
        <h2 className="text-3xl font-bold text-center text-forestgreen-900">
          Yang dapat kita lakukan
        </h2>
      </section>
    </div>
  );
}
