/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */

"use client";

import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaYandex } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import clsx from "clsx";
import { signIn } from "next-auth/react";

const socials = [
  {
    name: "Google",
    provider: "google",
    icon: BsGoogle,
  },
  {
    name: "Yandex",
    provider: "yandex",
    icon: FaYandex,
  },
  {
    name: "ВКонтакте",
    provider: "vk",
    icon: SlSocialVkontakte,
  },
];

function SocialButtons() {
  return (
    <>
      {socials.map(({ icon: Icon, name, provider }) => (
        <div
          className="form-control"
          key={name}
        >
          <button
            className={clsx(
              `bg-[ mb-2 mr-2 inline-flex items-center gap-2 rounded-lg hover:bg-[ px-5 py-2.5 text-center text-sm font-medium text-white`,
              {
                "bg-[#4285F4] hover:bg-[#4285F4]/90": provider === "google",
                "bg-[#FC3F1D] hover:bg-[#FC3F1D]/90": provider === "yandex",
                "bg-[#4C75A3] hover:bg-[#4C75A3]/90": provider === "vk",
              }
            )}
            onClick={() => signIn(provider)}
            type="button"
          >
            <Icon />
            Войти с помощью {name}
          </button>
        </div>
      ))}
    </>
  );
}

export default SocialButtons;
