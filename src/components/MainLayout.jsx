import React, { Children, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Outlet } from "react-router-dom";
import { GrBlog, GrNotification } from "react-icons/gr";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { BiCategoryAlt, BiColorFill } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className="logo">
          <h2 className="text-white py-3 fs-5 mb-0 text-center">
            <span className="sm-logo">AK</span>
            <span className="lg-logo">E-Shop</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "Product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "Product-list",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "Brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand-List",
                },

                {
                  key: "Category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "CAtegory List",
                },
                {
                  key: "Color",
                  icon: <BiColorFill className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: <BiColorFill className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blog",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blog",
              children: [
                {
                  key: "blog",
                  icon: <GrBlog className="fs-4" />,
                  label: "Add Blog ",
                },
                {
                  key: "blog-list",
                  icon: <GrBlog className="fs-4 text-white" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquires",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquires",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-3 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center">
            <div>
              <GrNotification className="position-relative" />
              <span className="badge badge-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customers-4-64x64.jpg"
                  alt=""
                />
              </div>

              <div
                className=" dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="text-dark mb-0">Asim</h5>
                <p className="mb-0">Asim1234@gmail.com</p>
             
              <div className="dropdown-menu">
                <li className="py-2">
                  <a href="" className="dropdown-item">
                    Action
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item">
                    Action
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item">
                    Action
                  </a>
                </li>
              </div>
            </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
