import { Button } from "antd";

export default function ButtonCustom(onClick, children) {
  return (
    <Button
      type="primary"
      htmlType="submit"
      className="bg-button w-full tracking-widest"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
