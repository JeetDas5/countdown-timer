import Timer from "@/components/Timer";
import { Bitter } from "@next/font/google";
import { Poppins } from "@next/font/google";

const bitter = Bitter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div
        className="relative bg-no-repeat bg-cover bg-bottom bg-[#101010]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(16, 16, 16) 0%, rgba(15, 15, 15, 0.53) 48%, rgb(16, 16, 16) 100%), url('/timer_bg.jpg')",
          opacity: 1,
        }}
      >
        <div className="w-full h-screen flex items-center px-4 sm:px-8 lg:px-16">
          <div className="font-bitter flex items-center justify-center flex-col mx-auto mb-10 md:mb-20 text-white">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl ${bitter.className} text-center`}
            >
              HURRY UP!
            </h1>
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl ${bitter.className} text-center`}
            >
              RESERVE YOUR SPOT NOW
            </h1>
            <Timer launchDate="2024-11-08T17:00:00" />
            <button
              className={`mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 py-2 sm:py-3 bg-lime-500 text-black text-sm sm:text-base md:text-lg ${poppins.className}`}
            >
              <span className="inline-block w-5 h-[1px] bg-black mr-2 align-middle"></span>
              BUY TICKET
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
