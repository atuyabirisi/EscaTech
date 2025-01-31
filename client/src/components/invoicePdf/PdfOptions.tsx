import { Dropdown } from "react-bootstrap";
import { VscKebabVertical } from "react-icons/vsc";
import DownloadPdf from "./DownloadPdf";
import { ReactNode } from "react";

interface Props {
  pdfJsxMarkup: ReactNode;
}

export default function PdfOptions({ pdfJsxMarkup }: Props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="">
        <VscKebabVertical />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          <DownloadPdf pdfComponent={pdfJsxMarkup} />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Print</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
