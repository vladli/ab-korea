import React from "react";
import Image from "next/image";
import type { Metadata } from "next/types";

import Table from "@/components/Table";
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
      <Table
        className="w-full"
        zebra
      >
        {/* head */}
        <Table.Head>
          <span>ID</span>
          <span>Имя</span>
          <span>Email</span>
          <span></span>
        </Table.Head>

        <Table.Body>
          {data.map(({ id, name, email, image, role }, i) => (
            <Table.Row key={id}>
              <span>{i + 1}</span>
              <span>
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
              </span>
              <span>
                {email}
                <br />
                {role ? (
                  <span className="badge badge-ghost badge-sm uppercase">
                    {role}
                  </span>
                ) : null}
              </span>
              <span>
                <button className="btn-ghost btn-xs btn">details</button>
              </span>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Page;
