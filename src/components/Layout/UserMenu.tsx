import React from "react";
import { MdOutlineBookmarkBorder, MdOutlineChat } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSession } from "next-auth/react";

const buttons = [
  {
    icon: MdOutlineChat,
    title: "Чат",
  },
  {
    icon: MdOutlineBookmarkBorder,
    title: "Закладки",
  },
];

function UserMenu() {
  const { data: session } = useSession();
  return (
    <section className="flex h-12 w-full justify-between border-t border-t-gray-700 bg-slate-900 p-1">
      <div className="flex items-center gap-4 pl-5">
        {buttons.map(({ icon: Icon, title }) => (
          <motion.button
            className="tooltip tooltip-bottom flex items-center"
            data-tip={title}
            key={title}
            whileHover={{ scale: 1.1 }}
          >
            <Icon size="1.4rem" />
          </motion.button>
        ))}
      </div>
      <div className="flex items-center gap-2 pr-4">
        {session && session.user && session.user.image ? (
          <div className="online avatar select-none">
            <div className="h-10 rounded-full">
              <Image
                alt=""
                height={8}
                quality={90}
                src={session.user.image}
                unoptimized
                width={8}
              />
            </div>
          </div>
        ) : null}
        <span className="font-medium">{session?.user?.name}</span>
      </div>
    </section>
  );
}

export default UserMenu;
