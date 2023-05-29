"use client";

import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
  session: any;
};

function Providers({ children, session }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <SessionProvider session={session}>{children}</SessionProvider>
    </SWRConfig>
  );
}

export default Providers;
