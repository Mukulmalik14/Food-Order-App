import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const modalId = document.getElementById("overlay");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalId)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalId
      )}
    </Fragment>
  );
}

export default Modal;
