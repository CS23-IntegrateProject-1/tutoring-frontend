import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { Restaurants } from "./pages/Restaurants";
import { AxiosTutorial } from "./pages/AxiosTutorial";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="restaurants" element={<Restaurants />} />
      <Route path="integration" element={<AxiosTutorial />}></Route>
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  )
}

export default App;

