import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function AddUser(props) {
  return (
    <Modal isOpen={props.value}>
      <h2>HEADING</h2>
      <p>BODY</p>
    </Modal>
  );
}

export default AddUser;
