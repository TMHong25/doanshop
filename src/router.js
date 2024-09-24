import {Route, Routes } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import HomePage from "./users/homePage/indexHomePage"; 
import ProfilePage from "./users/profilePage/indexProfilePage";
import MasterLayout from './users/theme/masterlayout/indexMasterLayout'; 


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