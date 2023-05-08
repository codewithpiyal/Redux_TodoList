import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Remove } from "../ReduxComponents/Action/Action";
import { Update } from "../ReduxComponents/Action/Action";

function Todolist() {
    const { Input_Data } = useSelector((state) => state.reducersfile)
    const dispatch = useDispatch();
    const [showEye, setShowEye] = useState(false)
    const [showEyeVal, setShowEyeVal] = useState("")

    //Remove Data
    const removeData = (id) => {
        dispatch(Remove(id))

    }

    //Update Data

    const [showModel, setShowModel] = useState(false)
    const [updateModel, setUpdateModel] = useState("");
    const [indvalue, setIndValue] = useState('');

    const handleUpdate = (ele) => {
        setShowModel(true)
        setUpdateModel(ele)
    }
    const handleClose = () => setShowModel(false);
    const handleModel=()=> {
        dispatch(Update(updateModel,indvalue))
        handleClose()
    }

    return (
        <>
            <div className="todo_data col-lg-5 mx-auto mt-2">
                {
                    Input_Data.map((CElem, i) => {
                        return (
                            <>
                                <div key={i} className="todo_container mt-2 d-flex justify-content-between align-items-center px-2" style={{ backgroundColor: "#dcdde1", borderRadius: "3px", height: "45px", }}>
                                    <li style={{ listStyle: "none" }}>{CElem}</li>
                                    <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                                        <EditIcon onClick={() => {
                                            handleUpdate(CElem)
                                            setIndValue(i)
                                        }}
                                            style={{ color: "#3c40c6", cursor: "pointer" }} />
                                        <DeleteIcon onClick={() => removeData(i)} style={{ color: "red", cursor: "pointer" }} />
                                        <RemoveRedEyeIcon onClick={() => {
                                            setShowEye(true)
                                            setShowEyeVal(CElem)
                                        }}
                                            style={{ color: "#1dd1a1", cursor: "pointer" }}
                                        />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                {/* For Eye */}
                <Modal show={showEye}>
                    <h1 className="text-center"> {showEyeVal}</h1>
                    <Modal.Footer>
                        <Button onClick={() => setShowEye(false)} variant="secondary" >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* For Update */}
                <Modal show={showModel} onHide={handleClose}>
                    <h3 className="text-center mt-2">Update Your Task</h3>
                    <Modal.Header >
                        <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
                            <input 
                            style={{ backgroundColor: "ButtonShadow" }} 
                            value={updateModel}
                             onChange={(e) => setUpdateModel(e.target.value)} name='task'  className='form-control col-lg-5 mt-2' />
                           

                        </div>
                    </Modal.Header>

                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleModel}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    );
}

export default Todolist;
