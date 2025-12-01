import { useContext } from "react";
import { Switch, Typography } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import reactLogo from "./assets/react.svg";
import { ThemeContext } from "./ThemeContext";

const { Text } = Typography;

function HeaderComponent() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const toggleContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "20px",
    color: isDark ? "#fff" : "#000",
  };

  const switchStyle = {
    backgroundColor: isDark ? "#1890ff" : "#ff4d4f",
  };

  const labelStyle = {
    marginTop: "4px",
    fontSize: "12px",
    opacity: 0.8,
  };

  const descriptionStyle = {
    fontSize: "10px",
    opacity: 0.6,
    marginTop: "2px",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        padding: "16px",
        color: isDark ? "#fff" : "#001529",
        backgroundColor: isDark ? "#222" : "#fff",
      }}
    >
      <h1>Шпора по React</h1>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <div style={toggleContainerStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Text strong>{isDark ? "Dark" : "Light"}</Text>
          <Switch
            checked={isDark}
            onChange={toggleTheme}
            checkedChildren={
              <MoonOutlined style={{ color: "#fff", fontSize: "16px" }} />
            }
            unCheckedChildren={
              <SunOutlined style={{ color: "#fff", fontSize: "16px" }} />
            }
            style={switchStyle}
            size="small"
          />
          <Text strong>{isDark ? "Light" : "Dark"}</Text>
        </div>
        <Text style={labelStyle}>Dark / Light</Text>
        <Text style={descriptionStyle}>Toggle your interface</Text>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(to right, #4facfe, #00f2fe)",
        }}
      ></div>
    </div>
  );
}

export default HeaderComponent;
