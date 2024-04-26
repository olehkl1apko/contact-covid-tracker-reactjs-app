import { Button, Menu } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { menuItems, menuItemsShort } from "@/modules/constants";

export const Sidebar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    setSelectedKeys(location.pathname);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`flex flex-col gap-10 h-full py-4 justify-center items-center ${
        isSidebarOpen ? "w-[250px]" : "w-[70px]"
      }`}
    >
      <Button
        onClick={toggleSidebar}
        icon={
          isSidebarOpen ? (
            <LeftOutlined style={{ fontSize: "24px" }} />
          ) : (
            <RightOutlined style={{ fontSize: "24px" }} />
          )
        }
        className="w-10 h-10 !border-none"
      />
      <Menu
        mode="vertical"
        className="h-full rounded-none !border-none flex flex-col gap-5 text-xl font-medium"
        onClick={(item) => navigate(item.key)}
        selectedKeys={[selectedKeys]}
        items={isSidebarOpen ? menuItems : menuItemsShort}
      />
    </div>
  );
};
