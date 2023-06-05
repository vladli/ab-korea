import { useSession } from "next-auth/react";

const useIsAdmin = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Loading state, handle accordingly
    return null;
  }

  if (!session) {
    // User is not authenticated
    return false;
  }

  if (session.user?.role === "admin") {
    // User is an admin
    return true;
  }

  // User is not an admin
  return false;
};
export default useIsAdmin;
