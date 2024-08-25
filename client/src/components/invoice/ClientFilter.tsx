import Dropdown from "react-bootstrap/Dropdown";

export default function ClientFilter() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Filter By Client
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Sapama Ltd</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Logrl Systems</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Space ya Tech Ltd</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
