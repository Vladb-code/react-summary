import { createContext, useState } from "react";
import { ConfigProvider, theme } from "antd";

export const ThemeContext = createContext();

const { darkAlgorithm, defaultAlgorithm } = theme;

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const value = {
    isDark,
    toggleTheme,
  };

  return (
    <ConfigProvider
      theme={{ algorithm: isDark ? darkAlgorithm : defaultAlgorithm }}
    >
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ConfigProvider>
  );
};

export default ThemeContext;
