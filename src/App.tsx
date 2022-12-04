import { AppRoutes } from "./routes";
import { ConfigProvider } from "antd";
export function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBgContainer: "#232323",
            colorText: "#fafafa",
            colorPrimaryHover: "#ccc",
            fontFamily: "Poppins",
          },
          Typography: {
            colorTextHeading: "#fafafa",
            colorText: "#fafafa",
            fontFamily: "Poppins",
          },
          Form: {
            fontFamily: "Poppins",
            colorTextHeading: "#fafafa",
          },
          Checkbox: { colorText: "#fafafa" },
        },
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
}
