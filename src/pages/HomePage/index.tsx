import { DownloadOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const { Title } = Typography;
export function HomePage() {
  const navigate = useNavigate();
  const onClickUpload = () => navigate("/login");
  return (
    <div className="home-body">
      <div className="home-content">
        <Title>Upload and share your images.</Title>
        <Button
          type="default"
          icon={<DownloadOutlined />}
          size="large"
          className="button-start-upload"
          onClick={onClickUpload}
        >
          Start uploading
        </Button>
      </div>
    </div>
  );
}
