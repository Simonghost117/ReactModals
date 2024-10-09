import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const ModalInternalState = ({ children, activator }) => {
  const [show, setShow] = useState(false);

  const content = show && (
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
      {createPortal(content, document.body)}
    </>
  );
};

export default ModalInternalState;
