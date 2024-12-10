import { Dropdown } from "react-bootstrap";
import { VscKebabVertical } from "react-icons/vsc";

export default function PdfOptions() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="">
        <VscKebabVertical />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Download</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Print</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
