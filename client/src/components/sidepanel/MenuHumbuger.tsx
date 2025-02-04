import { BsXLg, BsTextRight } from "react-icons/bs";

export default function MenuHumbuger() {
  return (
    <div className="d-flex justify-content-between bg-light m-1 p-4 fs-4 border-top shadow-lg">
      <div className="fs-4">
        <BsXLg />
      </div>
      <div className="fs-2">
        <BsTextRight />
      </div>
    </div>
  );
}
