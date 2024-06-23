"use client";
import { QueryClient, QueryClientProvider } from "react-query";

import Login from "./component/Login";

const queryClient = new QueryClient();

function MyApp({}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
}

export default MyApp;
