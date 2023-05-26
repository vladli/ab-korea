/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */

"use client";

import React from "react";
import { BsGoogle } from "react-icons/bs";
import clsx from "clsx";
import { signIn } from "next-auth/react";

const socials = [
  {
    bgColor: "#4285F4",
    name: "Google",
    provider: "google",
    icon: BsGoogle,
  },
];

function SocialButtons() {
  return (
    <>
      {socials.map(({ icon: Icon, bgColor, name, provider }) => (
        <div
          className="form-control"
          key={name}
        >
          <button
            className={clsx(
              `bg-[ mb-2 mr-2 inline-flex items-center gap-2 rounded-lg hover:bg-[ px-5 py-2.5 text-center text-sm font-medium text-white`,
              { "bg-[#4285F4] hover:bg-[#4285F4]/90": provider === "google" }
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
