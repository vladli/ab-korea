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
            className="h-14 cursor-pointer"
            loop
            src="/socials/whats.json"
          />
          <dotlottie-player
            autoplay
            loop
            src="/socials/whats.lottie"
          />
        </div>
      </div>
      <div>visa</div>
    </div>
  );
}

export default Footer;
