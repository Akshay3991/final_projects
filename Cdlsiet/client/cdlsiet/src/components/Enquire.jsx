import React from 'react'
import { useState } from 'react';
import { Container, Form, Col, Row, Table } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";



export default function Enquire() {
    let [modalstatus, setModalStatus] = useState(false);
    let [formData, setFormData] = useState({
        uname: '',
        uemail: '',
        uphone: '',
        umessage: '',
        index: '',
    })
    let [userdata, setUserData] = useState([])
    let getValue = (event) => {
        let oldData = { ...formData }
        let inputName = event.target.name;
        let inputValue = event.target.value;
        oldData[inputName] = inputValue;
        setFormData(oldData);
    }
    let handleSubmit = (event) => {
        event.preventDefault();

        let currentUserFormdata = {
            uname: formData.uname,
            uemail: formData.uemail,
            uphone: formData.uphone,
            umessage: formData.umessage
        }
        if (formData.index === '') {

            let checkFilterUser = userdata.filter((v) => v.uemail == formData.uemail || v.uphone == formData.uphone)
            if (checkFilterUser.length == 1) {
                toast.error("Email or Phone already Exists...")
            }
            else {

                let oldUserData = [...userdata, currentUserFormdata]
                setUserData(oldUserData)
                setFormData({
                    uname: '',
                    uemail: '',
                    uphone: '',
                    umessage: '',
                    index: '',
                })
            }
        }
        else {
            let editIndex = formData.index;
            let olddata = userdata
            let checkFilterUser = userdata.filter((v, i) => (v.uemail == formData.uemail || v.uphone == formData.uphone) && i != editIndex)
            if (checkFilterUser.length == 0) {

                olddata[editIndex]['uname'] = formData.uname
                olddata[editIndex]['uemail'] = formData.uemail
                olddata[editIndex]['uphone'] = formData.uphone
                olddata[editIndex]['umessage'] = formData.umessage
                setUserData(olddata);
                setFormData({
                    uname: '',
                    uemail: '',
                    uphone: '',
                    umessage: '',
                    index: '',
                })
            }
            else {
                toast.error("Email or Phone already Exists...")

            }
        }
    }

    let deleteRow = (index) => {
        let filterDataAfterDelete = userdata.filter((v, i) => i != index)
        setUserData(filterDataAfterDelete)
    }
    let editRow = (index) => {
        let editData = userdata.filter((v, i) => i == index)[0]
        editData['index'] = index
        setFormData(editData)
    }

    return (
        <>
            <button className="en" onClick={() => { setModalStatus(!modalstatus) }}>Enquire Now</button>
            <div onClick={() => { setModalStatus(!modalstatus) }} className={`modalOverlay ${modalstatus ? 'modalShow' : ''}`}></div>
            <div className={`ModalDiv ${modalstatus ? 'showModalDiv' : ''}`}>
                {/* <button  onClick={() => { setModalStatus(!modalstatus) }} ><span>&times;</span></button> */}

                <Container>
                    <ToastContainer></ToastContainer>

                    <Container >
                        <Row>
                            <Col className='text-center py-5'>
                                <h1 className="font-black font-serif  text-[24px] text-[#F42B43] hover:text-[#12871A] underline">Enquiry Now</h1>
                            </Col>
                        </Row>
                        <Row className='w-[100%]'>
                            <Col className=" w-[85%] mx-auto ">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className=' mb-[20px]'>
                                        <input onChange={getValue}  placeholder='Enter Name..' type="text" value={formData.uname} name='uname' className=' p-[10px] hover:w-[90%] hover:h-[70px] w-[100%] shadow-lg shadow-black    bg-[whitesmoke] rounded-md' />
                                    </div>
                                    <div className=' mb-[20px] '>
                                        <input onChange={getValue}  type="text"  placeholder='Enter Email Id.' value={formData.uemail} name='uemail' className=' p-[10px] w-[100%] hover:w-[90%] hover:h-[70px] shadow-lg shadow-black    bg-[whitesmoke] rounded-md' />
                                    </div>
                                    <div className=' mb-[20px] '>
                                        <input onChange={getValue}  placeholder='Enter Mobile Number..' type="text" value={formData.uphone} name='uphone' className='p-[10px] hover:w-[90%] hover:h-[70px]  w-[100%] shadow-lg shadow-black    bg-[whitesmoke] rounded-md' />
                                    </div>
                                    <div className='mb-[20px] '>
                                        <textarea onChange={getValue}  placeholder='Enter Your Message' value={formData.umessage} className=" p-[10px] w-[100%] hover:w-[90%] hover:h-[70px]  shadow-lg shadow-black  bg-[whitesmoke] rounded-md" name="umessage" id="" rows="3"></textarea>
                                    </div>
                                    <button className="text-[white] hover:bg-[#12871A] font-sans w-[100%] font-bold text-[21px] px-[10px] rounded-[10px] shadow-lg shadow-black  bg-[#F42B43]">
                                        {
                                            formData.index !== '' ? 'Update' : 'Save'
                                        }
                                    </button>
                                </form>
                            </Col>

                        </Row>
                        <Row>
                            <Col lg={7}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Message</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userdata.length >= 1 ?
                                                userdata.map((obj, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{i + 1}</td>
                                                            <td>{obj.uname}</td>
                                                            <td>{obj.uemail}</td>
                                                            <td>{obj.uphone}</td>
                                                            <td>{obj.umessage}</td>
                                                            <td>
                                                                <button onClick={() => deleteRow(i)}>Delete</button>
                                                                <button onClick={() => editRow(i)}>Edit</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })

                                                :
                                                <tr>
                                                    <td colSpan={6}>No Data Found</td>
                                                </tr>
                                        }
                                    </tbody>
                                </Table>

                            </Col>
                        </Row>
                    </Container>

                </Container>
            </div>
        </>
    )
}
