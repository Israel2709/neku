import React, { useState } from 'react'
import './App.css';

import Navigation from './Components/Navigation/index'
import CardWrapper from './Components/CardWrapper/index'

import {
  Container,
  Row,
  Col,
} from 'reactstrap'
import UploadForm from './Components/UploadForm';

function App() {
  const [userData, setUserData] = useState({
    name: "",
    lastName: ""
  })
  const [ usersCollection, setUsers ] = useState([])

  const onChangeHandler = event => {
    let property = event.target.name
    let value = event.target.value
    console.log("property: ", property, "value: ", value)

    setUserData({ ...userData, [property]: value })
  }

  const onSubmitHandler = event => {
    let data = userData;
    console.log(userData)
    setUsers([...usersCollection, data])
  }

  return (
    <div className="App">
      <Navigation />
      <Container fluid>
        <Row>
          <Col xs="12" md="3">
            <UploadForm
              onChangeHandler = { onChangeHandler }
              onSubmitHandler = { onSubmitHandler }
            ></UploadForm>
          </Col>
          <Col xs="12" md="9">
            <CardWrapper
              coleccionDeUsuarios = { usersCollection }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
