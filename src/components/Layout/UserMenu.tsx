import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

function UserMenu() {
  const { data: session } = useSession();

  return (
    <section className="h-12 w-screen border-t border-t-gray-700 bg-slate-900 p-1">
      <div className="flex items-center justify-end gap-2 pr-4">
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
