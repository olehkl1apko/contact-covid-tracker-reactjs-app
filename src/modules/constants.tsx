import { MenuItemType } from "antd/es/menu/hooks/useItems";
import {
  ContactsOutlined,
  DashboardOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

export const menuItems: MenuItemType[] = [
  {
    key: "/",
    icon: <DashboardOutlined style={{ fontSize: "18px" }} />,
    label: "Dashboard",
  },
  {
    key: "/map",
    icon: <GlobalOutlined style={{ fontSize: "18px" }} />,
    label: "Map",
  },
  {
    key: "/contacts",
    icon: <ContactsOutlined style={{ fontSize: "18px" }} />,
    label: "Contacts",
  },
];

export const menuItemsShort: MenuItemType[] = [
  {
    key: "/",
    icon: <DashboardOutlined style={{ fontSize: "24px" }} />,
  },
  {
    key: "/map",
    icon: <GlobalOutlined style={{ fontSize: "24px" }} />,
  },
  {
    key: "/contacts",
    icon: <ContactsOutlined style={{ fontSize: "24px" }} />,
  },
];
