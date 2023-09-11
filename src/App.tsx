import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "./constants/paths";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { useRefreshQuery } from "./store/api/auth";

const App: FC = () => {
  useRefreshQuery();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
