import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function DynamicForm(props) {
  const [title, setTitle] = useState("");
  const [Placeholder, setPlaceholder] = useState("");
  const [inputType, setInputType] = useState("");

  const [Elements, SetElements] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);

  function handleInput(id, value) {
    Elements.map((item) => {
      if (item.id === id) {
        item.value = value;
        return "";
      }
    });
  }

  function newElementAdder() {
    console.log("called");
    let obj = {
      id: uuid(),
      title: title,
      placeholder: Placeholder,
      inputType: inputType,
      value: "",
    };
    SetElements((pre) => [...pre, obj]);
    setTitle("");
    setPlaceholder("");
    setInputType("");
  }
  return (
    <>
      <h1>Dynamic Form Element </h1>
      <div style={{padding:'10px',display:'flex',alignItems:'center',gap:'20px'}}>
        <span>Enter The Title </span>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>

        <span>Select Input Type</span>
        <select
          onChange={(e) => {
            setInputType(e.target.value);
          }}
        >
          <option>text</option>
          <option>number</option>
          <option>password</option>
        </select>
   
        <span>Place holder value </span>
        <input
          onChange={(e) => {
            setPlaceholder(e.target.value);
          }}
        ></input>
      
        <button
          onClick={(e) => {
            newElementAdder();
          }}
        >
          Create
        </button>
      </div>

      <div>
        {Elements.length > 0
          ? Elements.map((item) => {
              return (
                <div key={item.id}>
                  <label>{item.title}</label>{" "}
                  <input
                    input={item.inputType}
                    placeholder={item.placeholder}
                    onChange={(e) => {
                      handleInput(item.id, e.target.value);
                    }}
                  />
                </div>
              );
            })
          : "Create Elements 🆕"}
      </div>
      {Elements.length > 0 ? (
        <button
          onClick={() => {
            setSubmitted(!isSubmitted);
          }}
        >
          Submit
        </button>
      ) : (
        ""
      )}

      {isSubmitted
        ? Elements.map((item) => {
            return (
              <>
                <span>{item.value}</span> <span>{item.title}</span>
              </>
            );
          })
        : ""}
    </>
  );
}
