import React, { useState } from "react";
import style from "./App.module.css";
import FormBox from "./FormBox/FormBox";
import UserList from "./UserList/UserList";
import DummyData from "./DummyData";
import Modal from "./Modal/Modal";

function App() {
  const [isValue, setValue] = useState(false);
  const [isZero, setZero] = useState(false);
  const [dummyData, setDummyData] = useState(DummyData);

  const onFormSubmited = (bool) => {
    setValue(bool);
  };
  const lessThanZero = (bool) => {
    setZero(bool);
  };

  const onFormDataTransfer = (data) => {
    setDummyData((prevData) => [...prevData, data]);
  };

  return (
    <div className={style.app}>
      {isValue && (
        <Modal
          onCancel={onFormSubmited}
          zeroCheck={isZero}
          onLessThanZero={lessThanZero}
        />
      )}
      <FormBox
        onSubmited={onFormSubmited}
        onDataTransfer={onFormDataTransfer}
        onLessThanZero={lessThanZero}
      />
      <UserList datas={dummyData} />
    </div>
  );
}

export default App;
