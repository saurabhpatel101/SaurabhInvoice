import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function EditableField(props) {
  return (
    <InputGroup className="my-1 flex-nowrap">
      {props.cellData.leading && (
        <InputGroup.Text className="bg-light fw-bold border-0 text-secondary px-2">
          <span
            className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small"
            style={{ width: "20px" }}
          >
            {props.cellData.leading}
          </span>
        </InputGroup.Text>
      )}
      <Form.Control
        className={props.cellData.textAlign}
        type={props.cellData.type}
        placeholder={props.cellData.placeholder}
        min={props.cellData.min}
        max={props.cellData.max}
        name={props.cellData.name}
        id={props.cellData.id}
        value={props.cellData.value}
        step={props.cellData.step}
        onChange={props.onItemizedItemEdit}
        required
      />
    </InputGroup>
  );
}
