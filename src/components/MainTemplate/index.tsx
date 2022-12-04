import { Outlet } from "react-router-dom";
import { Layout, Typography } from "antd";
import "./styles.css";
import { HeaderBar } from "./components/HeaderBar";
const { Header, Footer, Content } = Layout;
const { Text } = Typography;
export function MainTemplate() {
  return (
    <Layout>
      <Header>
        <HeaderBar />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <Text>Gallery Store ©2022</Text>
      </Footer>
    </Layout>
  );
}
