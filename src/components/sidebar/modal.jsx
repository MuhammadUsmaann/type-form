import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const CustomModal = (props) => {
  const {
    buttontext,
    icon,
    icondetail,
    children,
    center,
    showModal,
    btnStyle,
    modalSize,
    footer,
    cancelbtn,
    closeX
  } = props;

  const [show, setShow] = useState(showModal);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={`${btnStyle}`}>
        {icon ? (
          <>
            <i className={`${icondetail} pr-2`}></i>
          </>
        ) : (
          ""
        )}
        {buttontext}
      </button>

      {center ? (
        <Modal show={show} onHide={handleClose} centered size={modalSize}>
          {closeX ? (
            <p
              className="d-flex justify-content-end closeicon-fs cr-p"
              onClick={handleClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </p>
          ) : (
            ""
          )}

          {children}
          {footer ? (
            <div className="d-flex justify-content-end p-3">
              <span onClick={handleClose}>{cancelbtn}</span>
            </div>
          ) : (
            ""
          )}
        </Modal>
      ) : (
        <Modal show={show} onHide={handleClose} size={modalSize}>
         {closeX ? (
            <p
              className="d-flex justify-content-end closeicon-fs cr-p"
              onClick={handleClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </p>
          ) : (
            ""
          )}

          {children}
        </Modal>
      )}
    </>
  );
};

export default CustomModal;
