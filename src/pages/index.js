import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { IconCard, PlantCard } from "../components/Card";
import { createClient } from "../../prismicio";
import { useEffect } from "react";

export default function Home({ vegetationRole }) {
  useEffect(() => {
    console.log(vegetationRole);
  }, [vegetationRole]);

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
        <h1 className="mx-auto mb-4 max-w-sm text-center text-3xl font-semibold text-forestgreen-900">
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

      <section className="mx-auto mt-4 w-full p-3 px-6">
        <h2 className="mb-2 text-center text-3xl text-forestgreen-900">
          Apa itu <span className="font-semibold">konservasi</span> pantai?
        </h2>
        <p className="text-justify font-body">
          Konservasi adalah upaya-upaya perlindungan dan pelestarian lingkungan,
          melakukan kegiatan pemanfaatan sumberdaya alam secara terkendali
          sekaligus mempertahankan keberadaan setiap komponen-konponen
          lingkungan untuk pemanfaatan di masa yang akan datang. Konservasi
          pantai sendiri berbagai kegiatan konservasi yang dilakukan di kawasan
          pantai atau pesisir terhadap berbagai komponen abiotik dan biotik
          pantai. Komponen abiotik pantai antara lain gelombang, arus, angin,
          pasir, batuan, dan sebagainya. Sementara komponen biotik pantai
          terdiri terdiri dari tumbuhan (flora) dan hewan (fauna) yang hidup
          menempati kawasan pesisir/pantai.
        </p>
      </section>

      <section className="mx-auto mt-4 w-full p-3 px-6">
        <h2 className="mb-2 text-center text-3xl text-forestgreen-900">
          Mengapa kita perlu melakukan{" "}
          <span className="font-semibold">konservasi</span>?
        </h2>
        <p className="text-justify font-body">
          Konservasi pantai penting untuk dilakukan demi mempertahankan
          ekosistem pantai dan keberlanjutannya tetap lestari. Ekosistem pantai
          yang terjaga akan dapat memastikan fungsinya dari aspek ekologis dan
          aspek lainnya berjalan secara maksimal pula, mengingat peran pantai
          sangat penting diantaranya seperti perlindungan bahaya abrasi, sebagai
          habitat satwa liar, tempat wisata, dan lain-lain.
        </p>
      </section>

      <section className="mx-auto mt-4 min-h-screen w-full p-3">
        <h2 className="mb-2 text-center text-3xl font-semibold text-forestgreen-900">
          Peran Vegetasi Pantai
        </h2>
        <div className="grid grid-flow-row grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 pb-4">
          {vegetationRole.map((vegetation) => {
            return (
              <IconCard key={vegetation.id} icon={vegetation.data.icon}>
                {vegetation.data.role}
              </IconCard>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const vegetationRole = await client.getAllByType("vegetationrole");

  // Pass the homepage as prop to our page.
  return {
    props: { vegetationRole },
  };
}
