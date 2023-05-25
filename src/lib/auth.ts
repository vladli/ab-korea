import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export const isAuthenticated = async () => {
  const session = await getServerSession(authOptions);
  if (session) return true;
  return false;
};
