import Dropdown from "react-bootstrap/Dropdown";

export default function DateFilter() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Filter By Month
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">January</Dropdown.Item>
        <Dropdown.Item href="#/action-2">February</Dropdown.Item>
        <Dropdown.Item href="#/action-3">March</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
