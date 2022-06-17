import React, { useState } from 'react'
import "./depContract.scss";

import { useStore } from "../../../Stores/manuStore";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';



function DepContract() {

  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [contName, setContName] = useState('');
  const [contSym, setContSym] = useState('');  

  function writeAddress() {
    console.log("button");
  }

  return (
    <div className='manufacturer'>

      <Container>
        <Form>
          <Form.Group controlId="formName">
              <Form.Label>Name of your company</Form.Label>
              <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Wonka Industries" />
          </Form.Group>
          <Form.Group controlId="formCount">
              <Form.Label>How many NFT's?</Form.Label>
              <Form.Control value={count} onChange={e => setCount(parseInt(e.target.value))} type="number" placeholder="5" />
          </Form.Group>
          <Form.Group controlId="formContractName">
              <Form.Label>Contract Name</Form.Label>
              <Form.Control value={contName} onChange={e => setContName(e.target.value)} type="text" placeholder="Golden Tickets" />
          </Form.Group>
          <Form.Group controlId="formContractSymbol">
              <Form.Label>Symbol</Form.Label>
              <Form.Control value={contSym} onChange={e => setContSym(e.target.value)} type="text" placeholder="GLDT" />
          </Form.Group>
        </Form>
      </Container>

      {/* Keeping for testing/reference purposes */}
      <button onClick={writeAddress}>write address</button>
    </div>
  )
}

export default DepContract