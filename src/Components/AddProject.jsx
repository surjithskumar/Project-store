import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

const AddProject = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='me-2 rounded'>
        Add-Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label>
                <input type="file" style={{ display: "none" }} />
                <img height={"200px"} width={"100%"} src='https://media.istockphoto.com/id/1441026821/vector/no-picture-available-placeholder-thumbnail-icon-illustration.jpg?s=612x612&w=0&k=20&c=7K9T9bguFyJyKOTvPkdoTWZYRWA3zGvx_xQI53BT0wg=' />
              </label>
            </div>
            <div className="col-lg-6">
              <Form>
                <div className="mb-2">
                <FloatingLabel controlId="floatingtitle" label="Project-Title">
                  <Form.Control type="text" placeholder="Enter your Project title" />
                </FloatingLabel>
                </div>
                <div className="mb-2">
                <FloatingLabel controlId="floatinglanguage" label="Language Used">
                  <Form.Control type="text" placeholder="Enter your Project language" />
                </FloatingLabel>
                </div>
                <div className="mb-2">
                <FloatingLabel controlId="floatingOverview" label="Project Overview">
                  <Form.Control type="text" placeholder="Overview" />
                </FloatingLabel>
                </div>
                <div className="mb-2">
                <FloatingLabel controlId="floatinggit" label="Github-Link">
                  <Form.Control type="text" placeholder="Github" />
                </FloatingLabel>
                </div>
                <div className="mb-2">
                <FloatingLabel controlId="floatingweb" label="website-Link">
                  <Form.Control type="text" placeholder="website link" />
                </FloatingLabel>
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject
