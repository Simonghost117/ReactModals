import 'tachyons'
import './styles/app.css'
import './styles/modal.css'

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SimpleModal from './modal-simple'
import ModalWithInternalState from './modal-internal-state'
import ModalWithTransitions from './modal-transitions'

const App = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <h1>React Modal</h1>
      <h3>with useState</h3>

      <button className="btn" type="button" onClick={() => setShow(true)}>
        Show Simple Modal
      </button>
      <SimpleModal show={show} setShow={setShow}>
        This is inside the modal!
      </SimpleModal>

      <ModalWithInternalState
        activator={({ setShow }) => (
          <button
            className="btn db mt3 center"
            type="button"
            onClick={() => setShow(true)}
          >
            Show Internal State Modal
          </button>
        )}
      >
        We're managing state in here!
      </ModalWithInternalState>

      <ModalWithTransitions
        activator={({ setShow }) => (
          <button
            className="btn db mt3 center"
            type="button"
            onClick={() => setShow(true)}
          >
            Show Modal with Transitions
          </button>
        )}
      >
        Transitions, oh baby!
      </ModalWithTransitions>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
