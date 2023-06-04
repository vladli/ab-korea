import React from "react";
import Image from "next/image";
import type { Metadata } from "next/types";

import { titles } from "@/config/config";
import { getUsers } from "@/lib/users";

export const metadata: Metadata = {
  title: titles.adminUsers,
};

async function Page() {
  const data = await getUsers();
  if (!data) return null;
  return (
    <div className="mx-auto my-5 w-[90vw] overflow-x-auto">
      <table className="table-zebra table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, email, image, role }, i) => (
            <tr key={id}>
              <td>{i + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  {image ? (
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <Image
                          alt=""
                          height={30}
                          src={image}
                          width={30}
                        />
                      </div>
                    </div>
                  ) : null}
                  <div>
                    <div className="font-bold">{name}</div>
                  </div>
                </div>
              </td>
              <td>
                {email}
                <br />
                {role ? (
                  <span className="badge badge-ghost badge-sm uppercase">
                    {role}
                  </span>
                ) : null}
              </td>
              <th>
                <button className="btn-ghost btn-xs btn">details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
