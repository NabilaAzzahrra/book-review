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
        <div className="">
          <div className="">
            <div className="text-[15px] md:text-[30px] text-wrap md:pr-10 text-center font-extrabold p-4">
            mengatasi rasa tidak aman, kita perlu menerima diri sendiri, berhenti membandingkan diri dengan orang lain, dan fokus pada perkembangan pribadi sambil mencari dukungan dari orang lain.
            </div>
          </div>
          <div className="">
            <div className="flex gap-5 items-center justify-center mt-10">
              <div className="">
                <Link href={`/slide4`}>
                  <div className="w-20 h-8 mt-6 bg-sky-400 hover:bg-sky-500 p-4 md:w-28 flex items-center justify-center rounded-xl md:h-10 text-white">
                    Back...
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
