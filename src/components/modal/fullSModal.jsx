import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const FullScreenModal = (props) => {
  const { buttontext, icon, icondetail, children, btnStyle, modalSize } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={`${btnStyle}`}>
        {icon ? (
          <>
            {icondetail}
          </>
        ) : (
          ""
        )}
        <span className="pl-2">{buttontext}</span>
      </button>

      <Modal show={show} onHide={handleClose} centered size={modalSize}>
        <p className="d-flex justify-content-end closeicon-fs cr-p" onClick={handleClose}><i className="fa-solid fa-xmark"></i></p>
        {children}
      </Modal>
    </>
  );
};

export default FullScreenModal;
