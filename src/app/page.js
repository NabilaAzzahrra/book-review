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
            <div className="font-extrabold text-[40px] md:text-[100px]">
              INSECURITY
            </div>
            <div className="font-extrabold text-center md:text-left text-[20px] md:text-[50px] leading-3 mb-10">
              Is My Middle Name
            </div>
            <div className="flex  flex-col md:flex-row items-center justify-between">
              <div className="text-[15px] md:text-[25px]">ALVI SYAHRIN</div>
              <div className="text-[15px] md:text-[25px]">2022</div>
            </div>
            <Link href={`/slide2`}>
              <div className="w-20 h-8 mt-6 ml-20 md:ml-0 bg-sky-400 hover:bg-sky-500 p-4 md:w-28 flex items-center justify-center rounded-xl md:h-10 text-white">More...</div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
