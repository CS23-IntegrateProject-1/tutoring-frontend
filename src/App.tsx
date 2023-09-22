import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { Restaurants } from "./pages/Restaurants";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="restaurants" element={<Restaurants />} />
      
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
