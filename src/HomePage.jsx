import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import Sidebar from "./Sidebar";
import Content from "./Content";
import DataContext, { dataArray } from "./DataContext";

const { Sider: AntSider, Content: AntContent } = Layout;

const HomePage = () => {
  return (
    <DataContext.Provider value={dataArray}>
      <Layout style={{ height: "100vh", width: "100%" }}>
        <AntSider
          width={260}
          style={{
            padding: 0,
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
          }}
        >
          <Sidebar />
        </AntSider>
        <AntContent
          style={{
            marginLeft: 256,
            padding: "24px",
            overflow: "auto",
            height: "100vh",
          }}
        >
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/topic/:id" element={<Content />} />
          </Routes>
        </AntContent>
      </Layout>
    </DataContext.Provider>
  );
};

export default HomePage;
