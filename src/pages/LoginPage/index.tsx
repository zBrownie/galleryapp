import { Button, Checkbox, Form, Input, Typography, notification } from "antd";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAuthLoginFx } from "../../services/auth";
import { $authStore, $failToLogin } from "../../store/auth/AuthStore";
import { resetFailToLogin } from "../../store/auth/Events";
import "./styles.css";
const { Text } = Typography;
export function LoginPage() {
  const authStore = useStore($authStore);
  const isLoading = useStore(fetchAuthLoginFx.pending);
  const isFail = useStore($failToLogin);
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    await fetchAuthLoginFx(values);
  };

  useEffect(() => {
    if (isFail) {
      notification.error({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        onClose: () => resetFailToLogin(),
      });
    }
  }, [isFail]);
  useEffect(() => {
    if (authStore?.id) {
      navigate("/");
    }
  }, [authStore]);
  return (
    <div className="login-container">
      <div className="form-container">
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10 }}>
            <Button htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>

          <Form.Item>
            <Text>Don't have an account?</Text>
            <Button type="link">Sign up now.</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
