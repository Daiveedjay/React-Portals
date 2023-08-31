const ModalContent = ({ onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <p>This is a modal content.</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default ModalContent;
