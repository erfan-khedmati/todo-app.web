import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [isAuth, setIsAuth] = useState(false);
  // Check if is autherized or not
  useEffect(() => {
    const user = Cookies.get("userInfo");
    user ? setIsAuth(true) : setIsAuth(false);
    console.log(user);
    
  }, []);

  if(!isAuth) return <Navigate to="/login" replace />

  return (
    <div>
      MainLayout
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
