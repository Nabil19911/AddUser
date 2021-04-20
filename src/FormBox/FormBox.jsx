import React, { useState } from "react";
import style from "./FormBox.module.css";

const FormBox = ({ onSubmited, onLessThanZero, onDataTransfer }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const formSubmited = (e) => {
    e.preventDefault();
    if (username.trim().length !== 0 && age.trim().length !== 0) {
      if (Number(age) > 0) {
        const userData = {
          id: Math.random(),
          username,
          age: +age,
        };
        onDataTransfer(userData);
        setUsername("");
        setAge("");
        return;
      }
      onLessThanZero(true);
    }
    onSubmited(true);
  };

  return (
    <div className={style["form-container"]}>
      <form onSubmit={formSubmited}>
        <div>
          <label>Username</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Age (Years)</label>
          <br />
          <input
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <button>ADD USER</button>
      </form>
    </div>
  );
};

export default FormBox;
