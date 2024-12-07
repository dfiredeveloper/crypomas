import React from "react";
import Image from "next/image";
import footer from "@/img/footer.png";
import img1 from "@/img/img-1.jpeg";
import { FaTelegram } from "react-icons/fa6";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-full pt-24 bg-white">
      <h1 className="text-4xl md:text-6xl md:leading-[80px] font-bold mb-4 text-green-600 font-korona text-center">
        How To Buy
      </h1>
      <div className="w-full flex max-w-7xl mx-auto  md:px-0 px-4">
        <div className="w-[35%] z-50 md:block hidden">
          <Image
            src={footer}
            alt="CRYPTOMAS"
            className="h-full w-full object-contain object-center"
          />
        </div>
        <div className="mx-auto pb-10 mt-10 flex flex-col w-full gap-10">
          <div>
            <div className="border-[2.5px] border-red-600 p-5 rounded-xl">
              <h1 className="text-2xl md:text-4xl md:leading-[60px] font-bold mb-4 text-green-600 font-korona">
                🎄 Create a Wallet
              </h1>
              <p className="md:text-2xl text-xl text-gray-600 leading-10">
                Download Phantom or your preferred wallet from the App Store or
                Google Play Store for free. For desktop users, install the
                Google Chrome extension from phantom.
              </p>
            </div>
          </div>
          <div>
            <div className="border-[2.5px] border-red-600 p-5 rounded-xl">
              <h1 className="text-2xl md:text-4xl md:leading-[60px] font-bold mb-4 text-green-600 font-korona">
                🎄 Obtain Sol
              </h1>
              <p className="md:text-2xl text-xl text-gray-600 leading-10">
                Ensure your wallet has SOLANA to trade for $CRYPTOMAS. If you
                don’t have SOLANA, you can purchase it directly on Phantom,
                transfer it from another wallet, or buy it on an exchange and
                send it to your wallet.
              </p>
            </div>
          </div>
          <div>
            <div className="border-[2.5px] border-red-600 p-5 rounded-xl">
              <h1 className="text-2xl md:text-4xl md:leading-[60px] font-bold mb-4 text-green-600 font-korona">
                🎄 Visit Pumpfun
              </h1>
              <p className="md:text-2xl text-xl text-gray-600 leading-10">
                Open Pumpfun in Google Chrome or within the Phantom app browser
                by visiting app.Uniswap.org . Connect your wallet, paste the
                $CRYPTOMAS token address into Pumpfun, select $CRYPTOMAS.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center flex-col justify-center bg-gray-900 py-20">
        <div className="h-[200px] w-[200px] rounded-full overflow-hidden">
          <Image
            src={img1}
            alt="CRYPTOMAS"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex items-center pt-10 gap-10">
          <Link href={""}>
            <BsTwitterX className="md:text-[60px] text-[50px] text-white" />
          </Link>
          <Link href={"https://t.me/bagcryptomas"} target="_blank">
            <FaTelegram className="md:text-[60px] text-[50px] text-white" />
          </Link>
        </div>
        <h1 className="text-xl md:text-[35px] md:leading-[60px] leading-[35px] font-bold mb-4 text-green-600 font-korona text-center md:w-[60%] w-[80%] py-8">
          In the spirit of giving, $CRYPTOMAS reminds us that the best gifts are
          not under the tree - they are on the blockchain. 🎅 🎄
        </h1>
        <h1 className="text-xl md:text-2xl md:leading-[80px] leading-10 font-bold mb-4 text-white font-korona text-center py-8 uppercase w-[80%]">
          Copyright 2024 | All Rights Reserved
        </h1>
      </div>
    </div>
  );
}

export default Footer;
