import { useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import '../styles/modalTransition.css';
const ModalTransition = ({ children, activator }) => {
  const [show, setShow] = useState(false);

  const content = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="relative z-50 w-full max-w-md mx-auto bg-white rounded-lg">
        <button
          className="absolute top-1 right-2 p-1 text-gray-600 cursor-pointer"
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );

  return (
    <>
      {activator({ setShow })}
      {createPortal(
        <CSSTransition
          in={show}
          timeout={120}
          classNames="modal-transition"
          unmountOnExit
        >
          {content}
        </CSSTransition>,
        document.body
      )}
    </>
  );
};

export default ModalTransition;
