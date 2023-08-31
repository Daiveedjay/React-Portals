import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("root");
  return ReactDOM.createPortal(children, modalRoot);
};

export default Modal;
