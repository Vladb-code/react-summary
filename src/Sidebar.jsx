import { useContext } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import DataContext from "./DataContext";

function Sidebar() {
  const data = useContext(DataContext);
  const location = useLocation();

  const selectedKey = (() => {
    const path = location.pathname;
    if (path === "/") return "0";
    if (path.startsWith("/topic/")) {
      const parts = path.split("/");
      return parts[2];
    }
    return null;
  })();

  const items = [
    {
      key: "0",
      label: (
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Главная
        </Link>
      ),
    },
    ...data.map((topic) => ({
      key: topic.id.toString(),
      label: (
        <Link
          to={`/topic/${topic.id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {topic.title}
        </Link>
      ),
    })),
  ];

  return (
    <Menu
      mode="inline"
      selectedKeys={selectedKey ? [selectedKey] : []}
      items={items}
      style={{ height: "100%", borderRight: 0 }}
      theme="dark"
    />
  );
}

export default Sidebar;
