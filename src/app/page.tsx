import Footer from "./components/footer";
import Image from "next/image";
import HeroSection from "./components/hero";
import img1 from "@/img/img-1.jpeg";
import img2 from "@/img/img-2.jpeg";
import img3 from "@/img/img-3.jpeg";
import VideoBanner from "./components/video-banner";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-white w-full md:py-0 py-20">
        <HeroSection />
        <div className="w-full bg-green-600 py-10">
          <div className="container mx-auto w-full">
            <h3 className="font-extrabold md:text-2xl text-xl text-center font-korona">
              CA: C3Y2Ku8BK37uHHt5TLVNPFnf3hp98fLvV9BX224Fpump
            </h3>
          </div>
        </div>
        <div className="w-full bg-red-600 py-24">
          <div className="md:max-w-7xl md:px-0 px-4 container mx-auto w-full">
            <div className="flex md:flex-row flex-col w-full">
              <div className="md:w-[60%] pr-20">
                <h3 className="font-korona font-bold text-white md:text-[40px] text-[32px]">
                  Get Yourself Ready for CRYPTOMAS
                </h3>
                <p className="pb-2 pt-8 md:text-xl text-base leading-9">
                  $CRYPTOMAS is a festive meme coin bringing the magic of Santa
                  and the joy of Christmas to the crypto world! 🎅 🎄 Built
                  around the spirit of giving and holiday cheer, $CRYPTOMAS
                  combines fun, community vibes, and seasonal surprises, making
                  it the ultimate coin for hodlers who love the holidays.
                </p>
                <p className="md:text-xl text-base leading-9">
                  $CRYPTOMAS is more than just a meme coin - it is a celebration
                  of the festive spirit on the blockhain!. It is the season to
                  invest in good cheer.
                </p>
                <p className="py-2 md:text-xl text-base leading-9">
                  Get ready to sleigh the blockchain this Christmas with Santa
                  on your side!.
                </p>
              </div>
              <div className="h-[400px] md:w-[40%] w-full bg-white shadow-lg">
                <div className="w-full h-full">
                  <Image
                    src={img1}
                    alt="CRYPTOMAS"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 md:gap-10 gap-6 grid md:grid-cols-2 w-full">
              <div className="h-[400px] w-full bg-white shadow-lg">
                <div className="w-full h-full">
                  <Image
                    src={img2}
                    alt="CRYPTOMAS"
                    className="h-full w-full object-fit object-center"
                  />
                </div>
              </div>
              <div className="h-[400px] w-full bg-white shadow-lg">
                <Image
                  src={img3}
                  alt="CRYPTOMAS"
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-red-600 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-white text-2xl font-medium mb-2">ROADMAP</h2>
              <h1 className="text-white text-2xl md:text-[40px] font-bold font-korona">
                Our Project Roadmap
              </h1>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-700" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16">
                  <div className="w-full md:w-5/12 bg-gray-900 rounded-lg p-6 mb-8 md:mb-0">
                    <p className="text-white text-xl font-medium">
                      Launch on PumpFun
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white transform rotate-45" />
                  </div>
                  <div className="w-full md:w-5/12 bg-gray-900 rounded-lg p-6">
                    <p className="text-white text-xl font-medium">
                      Pay for Finders Trending
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16">
                  <div className="w-full md:w-5/12 bg-gray-900 rounded-lg p-6 mb-8 md:mb-0">
                    <p className="text-white text-xl font-medium">
                      Pay Dex at $25K Mcap
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white transform rotate-45" />
                  </div>
                  <div className="w-full md:w-5/12 bg-gray-900 rounded-lg p-6">
                    <p className="text-white text-xl font-medium">
                      1000+ Holders CoinGecko/CoinMarketCap Listing
                    </p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16">
                  <div className="w-full md:w-5/12 bg-gray-900 rounded-lg p-6 mb-8 md:mb-0">
                    <p className="text-white text-xl font-medium">
                      Hit King Of The Hills
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white transform rotate-45" />
                  </div>
                  <div className="w-full md:w-5/12 bg-gray-900 rounded-lg p-6">
                    <p className="text-white text-xl font-medium">
                      CEX Listing at 10,000+ Holders
                    </p>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16">
                  <div className="w-full md:w-5/12 bg-gray-900 rounded-lg p-6 mb-8 md:mb-0">
                    <p className="text-white text-xl font-medium">
                      Migrate to Raydium
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white transform rotate-45" />
                  </div>
                  <div className="w-full md:w-5/12 bg-gray-900 rounded-lg p-6">
                    <p className="text-white text-xl font-medium">
                      100,000+ Holders T1 Exchange Listing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-red-600 px-4">
          <div className="max-w-7xl mx-auto">
            <VideoBanner
              altText="Detty December"
              videoSrc="https://hrcdn.net/fcore/assets/onboarding/globe-5fdfa9a0f4.mp4"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
