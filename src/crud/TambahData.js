import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
//import { Modal } from "react-bootstrap";
import { Form } from 'react-bootstrap';

import axios from 'axios';

function TambahData() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  const saveData = async (e) => {
    e.preventDefault();
      // Kirim data ke endpoint backend untuk disimpan
    await axios.post('http://localhost:8080/user/signUp', {
        username: username,
        email: email,
        password: password
    });
    window.location.href('http://localhost:8080/user');
    }

  // const [id, setId] = useState("");

  // const [show, setShow] = useState(false);
  // const UpdateDataUser = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const putData = await axios.put(
  //       `http://localhost:8080/update/mahasiswa/${id}`,
  //       {
  //         username: username,
  //         email: email,
  //         password: password
  //       });
  //     alert(putData.data.messages)
  //     window.location.reload();
  //   } catch (error) {
  //     alert("Data Gagal diubah")
  //   }
  // };
  // const showModal = (data) => {
  //   setId(data.id);
  //   setUsername(data.username);
  //   setEmail(data.email);
  //   setPassword(data.password);
  //   setShow(true);
  // }
  // const closeModal = () => {
  //   setId("");
  //   setUsername("");
  //   setEmail("");
  //   setPassword("");
  //   setShow(false);
  // }

    return (
        <div className="body-flex">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <h1 className="mt-3 mb-3 font-weight-bold">Tambah Data Baru</h1>
              
              {/* <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Form Update Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={UpdateDataUser}>
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlInput1">
                </Form.Group>
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlInput1"></Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              <Form.Group className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Group>
              <Form.Group className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>
              <Button type='submit' color="primary"
                className="px-4">
                Update
              </Button>
              </Form>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
              
              <Form onSubmit={saveData}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
              </Form>
            </div>
          </div>
        </div>
      );
}

export default TambahData;
