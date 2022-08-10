import React, { useState } from "react";
import "./sidebarstyle.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";
import { AiFillDatabase, AiFillSetting } from "react-icons/ai";

import { NavLink } from "react-router-dom";

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "dashboard",
      icon: <FaTh />,
    },
    {
      path: "/product",
      name: "Products",
      icon: <FaShoppingBag />,
      icon2: <IoIosArrowDown />,
    },
    {
      path: "/order",
      name: "Order",
      icon: <AiFillDatabase />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },

    {
      path: "/setting",
      name: "Setting",
      icon: <AiFillSetting />,
    },
  ];
  return (
    <>
      <div className='container'>
        <div className='sidebar' style={{ width: isOpen ? "300px" : "50px" }}>
          <div className='top-section'>
            <h1 className='logo' style={{ display: isOpen ? "block" : "none" }}>
              Logo
            </h1>
            <div
              className='bars'
              style={{ marginLeft: isOpen ? "120px" : "0px" }}
            >
              <FaBars onClick={toggle} />
            </div>
          </div>

          <div className='dash-wrapper'>
            <ul className='nav-link'>
              <li>
                <NavLink className='link' to='/'>
                  <div className='icon'>
                    <FaTh />
                  </div>
                  <div
                    className='link-text'
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    Dashboard
                  </div>
                </NavLink>
              </li>
              <li>
                <div className='link'>
                  <div className='icon'>
                    <FaShoppingBag />
                  </div>
                  <div
                    className='link-text'
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    Prducts
                    <span
                      style={{
                        fontSize: "25px",
                        marginLeft: "60px",
                      }}
                    >
                      <IoIosArrowDown />
                    </span>
                  </div>
                </div>

                <div
                  className='dropdown'
                  //   style={{ display: isOpen ? "block" : "none" }}
                >
                  <div className='dropdown-links'>
                    <div className='dropdown-items'>
                      <ul>
                        <li>
                          <NavLink to='/addproduct'>Add</NavLink>
                        </li>
                        <li>
                          <NavLink to='/allproduct'>All Products</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <NavLink className='link' to='/order'>
                  <div className='icon'>
                    <AiFillDatabase />
                  </div>
                  <div
                    className='link-text'
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    Order
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink className='link' to='/analytics'>
                  <div className='icon'>
                    <FaRegChartBar />
                  </div>
                  <div
                    className='link-text '
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    Analytics
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink className='link' to='/comment'>
                  <div className='icon'>
                    <FaCommentAlt />
                  </div>
                  <div
                    className='link-text'
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    Comment
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink className='link' to='/setting'>
                  <div className='icon'>
                    <AiFillSetting />
                  </div>
                  <div className='link-text style={{ display: isOpen ? "block" : "none" }}'>
                    Setting
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
}

{
  /* {menuItem?.map((value, index) => {
            return (
              <NavLink
                to={value.path}
                key={index}
                className='link'
                activeclassName='active'
              >
                <div className='icon'>{value.icon}</div>
                <div
                  className='link-text'
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  {value.name}{" "}
                  <span style={{ marginLeft: "20px" }}>{value.icon2}</span>
                </div>
              </NavLink>
            );
          })} */
}
