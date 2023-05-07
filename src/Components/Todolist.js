import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useSelector } from 'react-redux';

function Todolist() {
    const { Input_Data } = useSelector((state) => state.reducersfile)

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
                                        <EditIcon style={{ color: "#3c40c6", cursor: "pointer" }} />
                                        <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
                                        <RemoveRedEyeIcon
                                            style={{ color: "#1dd1a1", cursor: "pointer" }}
                                        />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }


            </div>
        </>
    );
}

export default Todolist;
