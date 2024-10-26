import {Route, Routes } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/homePage/indexHomePage"; 
import ProfilePage from "./pages/profilePage/indexProfilePage";
import ProductDetailsPage from "pages/details/product_details_page";
import MasterLayout from './pages/theme/masterlayout/indexMasterLayout'; 
import { compile } from "sass";


const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />, 
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />, 
    },
    {
      path: ROUTERS.PRODUCT.DETAIL,
      component: <ProductDetailsPage />
    }
  ];

  return (
    <MasterLayout>
    <Routes>
      {userRouters.map((item, key) => (
        <Route key={key} path={item.path} element={item.component} />
      ))}
    </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;