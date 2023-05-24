import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";

function Footer() {
  return (
    <div className="absolute bottom-0 h-60 w-full divide-y divide-slate-700 bg-slate-900">
      <div className="p-3 text-center text-white">
        Подберём для вас оптимальное предложение на рынке Южной Кореи с
        персональной гарантией.
      </div>
      <div className="flex flex-col items-center">
        <Image
          alt=""
          height={100}
          src="/AB.png"
          width={100}
        />
        <div>
          <Player
            autoplay
            className="cursor-pointer"
            loop
            src="/socials/whats.json"
            style={{ height: "64px", width: "64px" }}
          />
        </div>
      </div>
      <div>visa</div>
    </div>
  );
}

export default Footer;
