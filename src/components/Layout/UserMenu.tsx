import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdOutlineBookmarkBorder, MdOutlineChat } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

const adminButtons = [
  {
    icon: FaUsers,
    title: "Пользователи",
    link: "/admin/users",
  },
];

function UserMenu() {
  const { data: session } = useSession();

  return (
    <section className="flex h-12 w-full justify-between border-t border-t-slate-800 bg-slate-900 p-1">
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
        {session?.user?.role === "admin"
          ? adminButtons.map(({ icon: Icon, title, link }) => (
              <Link
                href={link}
                key={title}
              >
                <motion.button
                  className="tooltip tooltip-bottom flex items-center"
                  data-tip={title}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size="1.4rem" />
                </motion.button>
              </Link>
            ))
          : null}
      </div>
      <div className="flex items-center gap-2 pr-4">
        {session && session.user && session.user.image ? (
          <div className="online avatar select-none">
            <div className="h-10 rounded-full">
              <Image
                alt=""
                height={8}
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
