
import React from 'react';

const ModalSimple = ({ children, show, setShow }) => {
  const content = show && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="relative z-50 w-full max-w-md mx-auto bg-white rounded-lg ">
        <button
          className="absolute top-[-1.5rem] right-0 p-1 bg-transparent  cursor-pointer"
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <div className="p-5 text-black">{children}</div>
      </div>
    </div>
  );

  return content;
};

export default ModalSimple;
