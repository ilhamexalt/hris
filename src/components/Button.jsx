import { Button } from "antd";

export default function ButtonCustom(onClick, title) {
  return (
    <Button
      type="primary"
      htmlType="submit"
      className="bg-button w-full tracking-widest"
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
