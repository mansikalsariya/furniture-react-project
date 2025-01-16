import React, { useState, useEffect, useContext } from "react";  
import { myContext } from '../common/Context'; 
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { removeUser } from "../redux/reduser/authSlice"; 
import { navbar } from "../data/Data"; 

import './header.css';

const Header = () => {
  const { state, fnLogged } = useContext(myContext);

  function logout() {
    fnLogged({
      user: "Guest User",
      isLogged: false
    });
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const { totalItems } = useSelector((state) => state.cart); 
  const user = useSelector((state) => state.auth.user);  
  const dispatch = useDispatch();


  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser()); 
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <div className={`${sticky ? "header py-4 sticky top-0 z-50 shadow-xl" : ""}`}>
        <div className="flex flex-wrap justify-between items-center w-10/12 m-auto">
          <div className="logo">
            Furniture
          </div>

          <div className="md:flex flex-wrap text-base py-3">
            {navbar.map((nav, key) => (
              <div key={key} className="mr-5">
                <Link
                  className="active link-hover transition-all"
                  to={nav.path}
                >
                  {nav.nav}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center">

  {state.isLogged && (
    <Link onClick={toggleSidebar} className="cart-icon">
      <MdOutlineShoppingBag />
      {totalItems > 0 && (
        <div className="items_count">
          <span className="text-white">{totalItems}</span>
        </div>
      )}
    </Link>
  )}


  {state.isLogged ? (
    <>
      <button onClick={logout} className="btn btn-outline-light">Log Out</button>
    </>
  ) : (
    <>
      <Link to="/signup">
        <button className="btn btn-outline-light me-2">Sign Up</button>
      </Link>
      <Link to="/login">
        <button className="btn btn-outline-light">Login</button>
      </Link>
    </>
  )}
</div>
        </div>
      </div>

      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={() => toggleSidebar()} />
    </>
  );
};

export default Header;
