import Image from "next/image";
import { twMerge } from "tailwind-merge";

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

function Footer({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "relative bottom-0 min-h-fit w-full select-none divide-y divide-slate-800 bg-slate-900",
        className
      )}
    >
      <div className="p-3 text-center text-white">
        Подберём для вас оптимальное предложение на рынке Южной Кореи с
        персональной гарантией.
      </div>
      <div className="flex flex-col items-center">
        <Image
          alt=""
          height={100}
          priority
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
              ></a>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">visa</div>
    </div>
  );
}

export default Footer;
