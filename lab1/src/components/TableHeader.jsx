import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../App.css";

const TableHeader = ({ onSort }) => (
  <thead>
    <tr>
      <th>
        <Dropdown className="custom-dropdown">
          <Dropdown.Toggle variant="success">
            User
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onSort("userAsc")}>Ascending</Dropdown.Item>
            <Dropdown.Item onClick={() => onSort("userDesc")}>Descending</Dropdown.Item>
            <Dropdown.Item onClick={() => onSort("reset")}>Reset</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </th>
      <th>
        <Dropdown className="custom-dropdown">
          <Dropdown.Toggle variant="success">
            Post Tiltle
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onSort("titleAsc")}>Ascending</Dropdown.Item>
            <Dropdown.Item onClick={() => onSort("titleDesc")}>Descending</Dropdown.Item>
            <Dropdown.Item onClick={() => onSort("reset")}>Reset</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </th>
      <th>
        <Dropdown className="custom-dropdown">
          <Dropdown.Toggle variant="success">
            Comments Count
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onSort("commentsAsc")}>Ascending</Dropdown.Item>
            <Dropdown.Item onClick={() => onSort("commentsDesc")}>Descending</Dropdown.Item>
            <Dropdown.Item onClick={() => onSort("reset")}>Reset</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </th>
    </tr>
  </thead>
);

export default TableHeader;
