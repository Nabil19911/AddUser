import style from "./Modal.module.css";

const Modal = ({ onCancel, zeroCheck, onLessThanZero }) => {
  const onCancelClicked = (e) => {
    if (e.target.classList.contains(style.modal)) onCancel(false);
  };
  return (
    <div className={style.modal} onClick={onCancelClicked}>
      <div className={style["message-box"]}>
        <h1>Warning message</h1>
        <div style={{ borderTop: "solid black 1px" }}>
          {zeroCheck && <h4>Age must not be in negative number</h4>}

          {!zeroCheck && <h4>Fill the form</h4>}
        </div>
        <button
          onClick={() => {
            onLessThanZero(false);
            onCancel(false);
          }}
        >
          OKAY
        </button>
      </div>
    </div>
  );
};

export default Modal;
