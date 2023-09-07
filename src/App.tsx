import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "./constants/paths";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
