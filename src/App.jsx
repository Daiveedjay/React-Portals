import { useState } from "react";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import "./App.css";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isModalOpen && (
        <Modal>
          <ModalContent onClose={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default App;
