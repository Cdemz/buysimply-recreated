import PrivateRoute from "../component/PrivateRoute";
import Logout from "../component/Logout";
import dynamic from "next/dynamic";

const DashboardPage = dynamic(() => import("./dash"), {
  ssr: false,
});

const Dashboard = () => {
  return (
    <div className="">
      {/*  <PrivateRoute> */}

      <Logout />
      <DashboardPage />
      {/*  </PrivateRoute>  */}
    </div>
  );
};

export default Dashboard;
