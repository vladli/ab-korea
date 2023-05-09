"use client";

import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <SessionProvider>{children}</SessionProvider>
    </SWRConfig>
  );
}

export default Providers;
