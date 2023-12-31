import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Modal } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const UserList = () => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:8080/user/getUsers');
    setUsers(response.data);
  }

  const [id, setId] = useState("");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const UpdateDataUser = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(
        `http://localhost:8080/user/update/${id}`,
        {
          username: username,
          email: email,
          password: password
        });
      alert(putData.data.messages)
      window.location.reload();
    } catch (error) {
      alert("Data Gagal diubah")
    }
  };
  const showModal = (data) => {
    setId(data.id);
    setUsername(data.username);
    setEmail(data.email);
    setPassword(data.password);
    setShow(true);
  }
  const closeModal = () => {
    setId("");
    setUsername("");
    setEmail("");
    setPassword("");
    setShow(false);
  }

  // menghapus data
  const [showDelete, setShowDelete] = useState(false);
  const showModalDelete = (data) => {
    setId(data.id);
    setUsername(data.username);
    setEmail(data.email);
    setPassword(data.password);
    setShowDelete(true);
  }
  const closeModalDelete = () => {
    setId("");
    setUsername("");
    setEmail("");
    setPassword("");
    setShowDelete(false);
  }
  const DeleteDataUser = async (event) => {
    event.preventDefault();
    try {
      const deleteData = await axios.delete(
        `http://localhost:8080/user/delete/${id}`);
      alert(deleteData.data.messages)
      window.location.reload();
    } catch (error) {
      alert("Data Gagal dihapus")
    }
  };


  return (
    <div className='body-flex'>
      <div className='flex mx-6 d-flex justify-content-center'>
        <div className='col-10 p-6'>
          <h1 className='mt-3 mb-3'>Data Users</h1>
          {/* Modal DELETE */}
          <Modal show={showDelete} onHide={closeModalDelete}>
            <Modal.Header closeButton>
              <Modal.Title>Apakah Anda yakin menghapus data
                ini?</Modal.Title> {/* Judul Form*/}
            </Modal.Header>
            <Modal.Body>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    {/* Judul yang akan ditampilkan dalam card */}
                    <h5 className="card-title">Detail Data</h5>
                    <div className="row">
                      {/* Menampilkan label "Username" */}
                      <p className="col-4 card-text">
                        Username
                      </p>
                      {/* Menampilkan data Username*/}
                      <p className="col-6 card-text">
                        : {username}
                      </p>
                    </div>
                    <div className="row">
                      {/* Menampilkan label "Email" */}
                      <p className="col-4 card-text">
                        Email
                      </p>
                      {/* Menampilkan data email */}
                      <p className="col-6 card-text">
                        : {email}
                      </p>
                    </div>
                    <div className="row">
                      {/* Menampilkan label "Password" */}
                      <p className="col-4 card-text">
                        Password
                      </p>
                      {/* Menampilkan data password*/}
                      <p className="col-6 card-text">
                        : {password}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* Tombol untuk menghapus data dengan memanggil fungsi DeleteDataUser */}
              <Button type='submit' color="primary" className="px-4"
                onClick={DeleteDataUser}>
                Hapus Data
              </Button>
              {/* Tombol untuk menutup modal*/}
              <Button variant="danger" onClick={closeModalDelete}>
                Batal
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Form Update Data</Modal.Title>  {/* Judul Form*/}
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={UpdateDataUser}>  {/* Membuat form dengan event handler UpdateDataUser */}
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlInputUsername">
                </Form.Group>
                {/* Form Group untuk Username */}
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlInputUsername"></Form.Group>
                {/* Label dan input field untuk Username */}
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)} // Mengubah nilai state username saat input berubah
                  value={username} // Nilai yang ditampilkan di input field berasal dari state username
                />
                {/* Form Group untuk Email */}
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlInputEmail">
                  {/* Label dan input field untuk Email */}
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)} // Mengubah nilai state email saat input berubah
                    value={email} // Nilai yang ditampilkan di input field berasal dari state email
                  />
                </Form.Group>
                {/* Form Group untuk Password */}
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlInputPassword">
                  {/* Label dan input field untuk Password */}
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    autoFocus
                    onChange={(e) => setPassword(e.target.value)} // Mengubah nilai state password saat input berubah
                    value={password} // Nilai yang ditampilkan di input field berasal dari state password
                  />
                </Form.Group>
                {/* Tombol untuk mengirim form */}
                <Button type='submit' color="primary"
                  className="px-4">
                  Update
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              {/* Tombol untuk menutup modal */}
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Link to="/TambahData">
            <Button variant="success">Tambah Data</Button>
          </Link>
          <Table className='striped bordered hover responsive'>
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Tanggal Buat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.Tgl_registrasi}</td>
                  <td>
                    {/* Tombol untuk edit dan menampilkan from modal update data */}
                    <Button variant="primary" onClick={() => showModal(user)}>Edit</Button>
                    {/* Tombol untuk hapus dan menampilkan from modal hapus data */}
                    <Button variant="danger" onClick={() => showModalDelete(user)} >Hapus</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>

  )
}

export default UserList
