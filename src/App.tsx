import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "./constants/paths";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { useRefreshQuery } from "./store/api/auth";
import { useGetWatchesQuery } from "./store/api/watches";
import { useAppSelector } from "./store/hooks";
import { userSelector } from "./store/selectors";
import { TAuthUser } from "./types/store/slices/user.type";

const App: FC = () => {
  const user = useAppSelector(userSelector);

  useRefreshQuery();

  useGetWatchesQuery((user as TAuthUser).id, {
    skip: !(user.isAuth && !!(user.isAuth ? user.id : false)),
    refetchOnMountOrArgChange: true,
  });

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
