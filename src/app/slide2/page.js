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
      className={`${poppins.className} relative flex h-screen flex-col items-center justify-between p-24`}
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
      <div className="content flex flex-col md:flex-row gap-5 items-center justify-center h-screen">
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
            <div className="flex gap-5">
              <div className="text-[15px] md:text-[25px] font-bold">
                Pengarang
              </div>
              <div className="text-[15px] md:text-[25px]">Alvi Syahrin</div>
            </div>
            <hr className="my-2"></hr>
            <div className="flex gap-5">
              <div className="text-[15px] md:text-[25px] font-bold mr-5 md:mr-0">
                Penerbit
              </div>
              <div className="text-[15px] md:text-[25px]">
                Alvi Ardhi Publishing
              </div>
            </div>
            <hr className="my-2"></hr>
            <div className="flex gap-5">
              <div className="text-[15px] md:text-[25px] font-bold mr-6 md:mr-0">
                Tahun Terbit
              </div>
              <div className="text-[15px] md:text-[25px]">
                Cetakan pertama, Mei 2021
              </div>
            </div>
            <hr className="my-2"></hr>
            <div className="flex gap-5">
              <div className="text-[15px] md:text-[25px] font-bold">
                Tebal Buku
              </div>
              <div className="text-[15px] md:text-[25px]">264 halaman</div>
            </div>
            <hr className="my-2"></hr>
            <div className="flex gap-5 ">
              <div className="">
                <Link href={`/`}>
                  <div className="w-20 h-8 mt-6 ml-5 md:ml-0 bg-sky-400 hover:bg-sky-500 p-4 md:w-28 flex items-center justify-center rounded-xl md:h-10 text-white">
                    Back...
                  </div>
                </Link>
              </div>
              <div className="">
                <Link href={`/slide3`}>
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
