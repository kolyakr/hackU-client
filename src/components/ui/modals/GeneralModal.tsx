import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "2rem",
    borderRadius: "16px",
    width: "90%",
    maxWidth: "500px",
    backgroundColor: "#000",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    transform: "translate(-50%, -50%)",
    border: "3px solid gray",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

Modal.setAppElement("#root");

interface Props {
  isOpen: boolean;
  closeFn: () => void;
  children: React.ReactNode;
}

function GeneralModal({ isOpen = false, closeFn, children }: Props) {
  function closeModal() {
    closeFn();
  }

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {children}
        </Modal>
      )}
    </>
  );
}

export default GeneralModal;
