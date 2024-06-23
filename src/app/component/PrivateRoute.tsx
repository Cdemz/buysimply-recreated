import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const getToken = () => {
    return localStorage.getItem("accessToken");
  };
  const token = getToken();

  if (!token) {
    router.push("/login");
    return null;
    // TODO:add a spiner here later
  }

  return <>{children}</>;
};

export default PrivateRoute;
