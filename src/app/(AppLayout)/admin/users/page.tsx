import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Body from "@/components/Layout/Body";
import Header from "@/components/Layout/Header";

async function getUsers() {
  const users = await fetch(`${process.env.WEBSITE}/api/admin/users`);
  return users.json();
}

type Data = {
  id: string;
  email: string;
  name: string;
  image: string;
  role?: string;
}[];

async function Page() {
  const session = await getServerSession(authOptions);
  const data: Data = await getUsers();

  return (
    <main className="min-h-screen">
      <Header />
      <Body>
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
                      <div>
                        <div className="font-bold">{name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {email}
                    <br />
                    {role ? (
                      <span className="badge-ghost badge badge-sm uppercase">
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
      </Body>
    </main>
  );
}

export default Page;
