import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function DynamicForm(props) {
  const [title, setTitle] = useState("");
  const [Placeholder, setPlaceholder] = useState("");
  const [inputType, setInputType] = useState("");

  const [Elements, SetElements] = useState([]);

  console.log("@as", uuid());
  return (
    <>
      <h1>Dyn</h1>
      <div>
        <span>Enter The Title :</span>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>

        <span>Select Input Type:</span>
        <select
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        >
          <option>Text</option>
          <option>Number</option>
          <option>Password</option>
        </select>

        <span>Place holder value :</span>
        <input
          onChange={(e) => {
            setPlaceholder(e.target.value);
          }}
        ></input>

        <button>Create</button>
      </div>

      <div>{Elements.length > 0 ? "Map Elements" : "Create Elements"}</div>
      <p>ID: {uuid()}</p>
    </>
  );
}
