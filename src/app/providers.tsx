"use client";

import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";

type Props = {
  session: any;
  children: React.ReactNode;
};

function Providers({ session, children }: Props) {
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
