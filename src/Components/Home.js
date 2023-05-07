import Button from 'react-bootstrap/Button';
import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Todolist from './Todolist';
import { useState } from 'react';

function Home() {
  const[data,setData]=useState("");
  return (
    <>
        <div className='container'>
        <section className='mt-3 text-center'>
            <h3>Enter Your Task</h3>
            <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
                <input style={{backgroundColor:"ButtonShadow"}} value={data} type='text' onChange={(e)=>setData(e.target.value)} name='task' placeholder='Enter Details' className='form-control'/>
                <Button variant='success' className='mx-2'><AddBoxIcon/></Button>
               
            </div>
            <Todolist/>
        </section>

        </div>
    
    </>
  )
}

export default Home