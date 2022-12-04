import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";

const { Title } = Typography;
import "./styles.css";
export function HeaderBar() {
  return (
    <div className="container-header-bar">
      <div className="header-left"></div>
      <div className="header-center">
        <Title level={2}>Gallery</Title>
      </div>
      <div className="header-right">
        <Avatar size="small" icon={<UserOutlined />} />
      </div>
    </div>
  );
}
