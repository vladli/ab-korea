import React from "react";

import Body from "@/components/Layout/Body";

async function getUsers() {
  const users = await fetch(`${process.env.WEBSITE}/api/admin/users`);

  return users.json();
}

async function Main() {
  const data = await getUsers();
  console.log(data);
  return (
    <Body>
      <div className="mx-auto my-5 w-[90vw] overflow-x-auto">
        <table className="table w-full">
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
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        alt="Avatar Tailwind CSS Component"
                        src="/tailwind-css-component-profile-2@56w.png"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge-ghost badge badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <th>
                <button className="btn-ghost btn-xs btn">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </Body>
  );
}

export default Main;
