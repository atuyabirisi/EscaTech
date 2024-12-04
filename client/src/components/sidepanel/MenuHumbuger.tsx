import { BsXLg, BsTextRight } from "react-icons/bs";

export default function MenuHumbuger() {
  return (
    <div className="d-flex justify-content-between p-4 fs-4 bg-light">
      <div className="fs-6">
        <BsXLg />
      </div>
      <div className="fs-4">
        <BsTextRight />
      </div>
    </div>
  );
}
