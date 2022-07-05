import Head from "next/head";
import Image from "next/image";

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

      <main>
        <div className="w-full h-screen bg-gradient-to-bl from-[#B2FEFA] to-[#0ED2F7] flex flex-col justify-center items-center">
          <h1 className="text-3xl text-white font-bold ">Coming Soon</h1>
          <h1 className="text-1xl text-white font-bold ">
            KKN-PPM UGM 2022 Moro Donorojo
          </h1>
        </div>
      </main>
    </div>
  );
}
