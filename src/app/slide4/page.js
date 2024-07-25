import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Page() {
  return (
    <main
      className={`${poppins.className} relative flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="background-image"></div>
      <div className="bubble-background">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div className="content flex flex-col md:flex-row gap-5 items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/img/cover.jpg"
            alt="alt"
            className="w-48 md:w-[300px]"
            width={300}
            height={300}
          />
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div className="flex mb-5">
              <div>
                <div className="bg-sky-100 p-4 shadow-xl">
                  <div className="text-[15px] md:text-[25px] md:pr-10 font-bold mb-2">
                    Fisik yang Kurang Menarik
                  </div>
                  <div className="text-[15px] md:text-[20px] text-wrap md:pr-10">
                    Dalam bagian ini penulis membahas mengenai Standar
                    Kecantikan,<br></br> Perbandingan Sosial, Kritik Diri, dan
                    Menerima Diri Sendiri.
                  </div>
                </div>
              </div>
              <div className="md:-ml-10 ml-5 text-[70px] font-bold flex items-center justify-center">
                01
              </div>
            </div>

            <div className="flex mb-5">
              <div>
                <div className="bg-sky-100 p-4 shadow-xl">
                  <div className="text-[15px] md:text-[25px] md:pr-10 font-bold mb-2">
                    Masa Depan yang Buram
                  </div>
                  <div className="text-[15px] md:text-[20px] text-wrap md:pr-10">
                    Dalam bagian ini penulis membahas Ketidakpastian Masa Depan,
                    <br></br>
                    Tekanan untuk Sukses, Mengatasi Ketakutan,<br></br>
                    Membangun Kepercayaan Diri.<br></br>
                  </div>
                </div>
              </div>
              <div className="md:-ml-10 ml-5 text-[70px] font-bold flex items-center justify-center">
                02
              </div>
            </div>

            <div className="flex mb-5">
              <div>
                <div className="bg-sky-100 p-4 shadow-xl">
                  <div className="text-[15px] md:text-[25px] md:pr-10 font-bold mb-2">
                    Jauh Tertinggal Dari Teman-Temanku
                  </div>
                  <div className="text-[15px] md:text-[20px] text-wrap md:pr-10">
                    Dalam bagian ini penulis membahas Perbandingan dengan Teman,
                    <br></br>
                    Dampak Negatif, Mengatasi Perasaan Tertinggal, Penghargaan
                    <br></br>
                    Diri Sendiri.
                  </div>
                </div>
              </div>
              <div className="md:-ml-10 ml-5 text-[70px] font-bold flex items-center justify-center">
                03
              </div>
            </div>

            <div className="flex mb-5">
              <div>
                <div className="bg-sky-100 p-4 shadow-xl">
                  <div className="text-[15px] md:text-[25px] md:pr-10 font-bold mb-2">
                    I Hate Myself
                  </div>
                  <div className="text-[15px] md:text-[20px] text-wrap md:pr-10">
                    Dalam bagian ini penulis membahas Kritik Diri, Dampak{" "}
                    <br></br>
                    Negatif, Mengatasi Kebencian Diri.
                  </div>
                </div>
              </div>
              <div className="md:-ml-10 ml-5 text-[70px] font-bold flex items-center justify-center">
                04
              </div>
            </div>

            <div className="flex mb-5">
              <div>
                <div className="bg-sky-100 p-4 shadow-xl">
                  <div className="text-[15px] md:text-[25px] md:pr-10 font-bold mb-2">
                    Berdamai Dengan Insecurity
                  </div>
                  <div className="text-[15px] md:text-[20px] text-wrap md:pr-10">
                    Dalam bagian ini penulis membahas Menerima<br></br>
                    Ketidaksempurnaan, Mengembangkan Self-Compassion, Melihat<br></br>
                    Progres Diri, Dukungan Sosial.
                  </div>
                </div>
              </div>
              <div className="md:-ml-10 ml-5 text-[70px] font-bold flex items-center justify-center">
                05
              </div>
            </div>

            <div className="flex gap-5 ">
              <div className="">
                <Link href={`/slide3`}>
                  <div className="w-20 h-8 mt-6 ml-5 md:ml-0 bg-sky-400 hover:bg-sky-500 p-4 md:w-28 flex items-center justify-center rounded-xl md:h-10 text-white">
                    Back...
                  </div>
                </Link>
              </div>
              <div className="">
                <Link href={`/slide5`}>
                  <div className="w-20 h-8 mt-6 ml-6 md:ml-0 bg-sky-400 hover:bg-sky-500 p-4 md:w-28 flex items-center justify-center rounded-xl md:h-10 text-white">
                    Next...
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
