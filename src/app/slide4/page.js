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
        <div className="flex flex-col md:flex-row mt-32 gap-10">
          <div className="flex items-center justify-center">
            <div>
              <div className="flex mb-5 w-full">
                <div>
                  <div className="bg-white p-4 shadow-xl rounded-3xl">
                    <div className="text-[15px] md:text-[25px] md:pr-10 font-bold mb-2 bg-sky-100 p-4 rounded-3xl">
                      Kelebihan
                    </div>
                    <div className="text-[15px] md:text-[20px] text-wrap md:pr-10 text-center md:text-justify p-4">
                      relevansinya dan saran praktis yang ditawarkan untuk{" "}
                      mengatasi rasa tidak aman, menggunakan bahasa yang
                      sederhana sehingga mudah dipahami oleh pembaca.
                      Pendekatan empatik dari penulis juga membantu memahami dan
                      merangkul perasaan pembaca dengan lebih baik.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center justify-center">
            <Image
              src="/img/cover.jpg"
              alt="alt"
              className="w-48 md:w-[300px]"
              width={300}
              height={300}
            />
          </div> */}
          <div className="flex items-center justify-center">
            <div>
              <div className="flex mb-5 w-full">
                <div>
                  <div className="bg-white p-4 shadow-xl rounded-3xl">
                    <div className="text-[15px] md:text-[25px] md:pr-10 font-bold mb-2 bg-sky-100 p-4 rounded-3xl">
                      Kekurangan
                    </div>
                    <div className="text-[15px] md:text-[20px] text-wrap md:pr-10 text-center md:text-justify p-4">
                      contoh yang tidak banyak dan saran yang kadang-kadang
                      terasa terlalu umum, sehingga mungkin tidak cocok untuk
                      semua orang. Selain itu, beberapa bagian buku terasa
                      mengulang-ulang, yang bisa membuat pengalaman membaca
                      kurang menyenangkan.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center mt-10">
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
    </main>
  );
}
