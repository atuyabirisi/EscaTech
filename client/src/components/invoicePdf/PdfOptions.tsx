import { Dropdown } from "react-bootstrap";
import { VscKebabVertical } from "react-icons/vsc";
import DownloadPdf from "./DownloadPdf";

export default function PdfOptions() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="">
        <VscKebabVertical />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          <DownloadPdf />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Print</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
