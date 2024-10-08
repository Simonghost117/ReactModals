import React, { useState } from 'react';
import ModalSimple from './modalSimple';
import ModalInternalState from './modal-internal-state';
import ModalTransition from './modal-transition';

const Modal = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full text-white text-center ">
      <h1 className="mt-8 text-3xl">React Modal</h1>
      <h3 className="mb-8 text-2xl">with useState</h3>

      <button
        className="text-xl text-black  py-2 px-5 border-none rounded-md shadow-md transition-shadow duration-100 ease-in hover:shadow-lg  bg-white"
        type="button"
        onClick={() => setShow(true)}
      >
        Show Simple Modal
      </button>

      <ModalSimple show={show} setShow={setShow}>
        This is inside the modal!
      </ModalSimple>

      <ModalInternalState
        activator={({ setShow }) => (
          <button
            className="text-xl text-black py-2 px-5 border-none rounded-md shadow-md transition-shadow duration-100 ease-in mt-3 mx-auto block bg-slate-100"
            type="button"
            onClick={() => setShow(true)}
          >
            Show Internal State Modal
          </button>
        )}
      >
        We're managing state in here!
      </ModalInternalState>

      <ModalTransition
        activator={({ setShow }) => (
          <button
            className="text-xl text-black py-2 px-5 border-none rounded-md shadow-md transition-shadow duration-100 ease-in mt-3 mx-auto block bg-slate-100"
            type="button"
            onClick={() => setShow(true)}
          >
            Show Modal with Transitions
          </button>
        )}
      >
        Transitions, oh baby!
      </ModalTransition>
    </div>
  );
};

export default Modal;
