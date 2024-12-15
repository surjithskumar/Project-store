import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

const AddProject = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setProjectData({
      title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })
    setPreview("");
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const [projectData,setProjectData] = useState({
      title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })

    const [preview,setPreview] = useState("")
    const[fileStatus,setFileStatus]=useState(false)

    useEffect(()=>{
      if(projectData.projectImage.type=='image/png' || projectData.projectImage.type=='image/jpg'){
        console.log("generate url");
        setFileStatus(false)
        setPreview(URL.createObjectURL(projectData.projectImage));
      }else{
        console.log("please upload following formats only : png/jpg/jpeg")
        setFileStatus(true)
        setProjectData({...projectData,projectImage:""})
      }
    },[projectData.projectImage])

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
                <input type="file" style={{ display: "none" }} onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})} />
                <img height={"200px"} width={"100%"} src={preview?preview:'https://media.istockphoto.com/id/1441026821/vector/no-picture-available-placeholder-thumbnail-icon-illustration.jpg?s=612x612&w=0&k=20&c=7K9T9bguFyJyKOTvPkdoTWZYRWA3zGvx_xQI53BT0wg='} alt='' />
              </label>
              { fileStatus && <div className="mb-3 text-danger">please upload following formats only : png/jpg/jpeg</div>}
            </div>
            <div className="col-lg-6">
              <Form>
                <div className="mb-2">
                <FloatingLabel controlId="floatingtitle" label="Project-Title">
                  <Form.Control type="text" placeholder="Enter your Project title" onChange={e=>setProjectData({...projectData,title:e.target.value})} />
                </FloatingLabel>
                </div>
                <div className="mb-2">
                <FloatingLabel controlId="floatinglanguage" label="Language Used">
                  <Form.Control type="text" placeholder="Enter your Project language" onChange={e=>setProjectData({...projectData,languages:e.target.value})} />
                </FloatingLabel>
                </div>
                <div className="mb-2">
                <FloatingLabel controlId="floatingOverview" label="Project Overview">
                  <Form.Control type="text" placeholder="Overview" onChange={e=>setProjectData({...projectData,overview:e.target.value})} />
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
