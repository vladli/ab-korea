import Image from "next/image";

const socials = [
  {
    icon: "youtube",
    link: "https://youtube.com/@abkorea",
  },
  {
    icon: "whatsapp",
    link: "/sd",
  },
  {
    icon: "telegram",
    link: "/sf",
  },
];

function Footer() {
  return (
    <div className="absolute bottom-0 min-h-fit w-full divide-y divide-slate-700 bg-slate-900">
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
        <div className="flex gap-10 p-4">
          {socials.map(({ icon, link }) => (
            <div
              className="h-14 cursor-pointer rounded hover:bg-slate-800"
              key={icon}
            >
              <a
                href={link}
                target="_blank"
              >
                <dotlottie-player
                  autoplay
                  loop
                  src={`/socials/${icon}.lottie`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">visa</div>
    </div>
  );
}

export default Footer;
