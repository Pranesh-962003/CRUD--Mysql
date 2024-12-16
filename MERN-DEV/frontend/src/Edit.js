import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [values , setvalues] = useState({
    name:'',
    email: ''
});
useEffect(()=>{
  axios.get('http://localhost:8081/read/'+id)
  .then(res=>{console.log(res)
    setvalues({...values,name:res.data[0].NAME,email:res.data[0].EMAIL})
  }).catch(err=>console.log(err)
  )
},[])
const HandleUpdate = (e) =>{
  e.preventDefault();
  axios.put('http://localhost:8081/Update/'+id,values)
  .then(res=>{console.log(res)
    navigate('/');
  }
  ).catch(err=>console.log(err)
  )
}

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={HandleUpdate}>
            <h2>Add Student</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name' className='form-control' value={values.name} onChange={e=> setvalues({...values, name:e.target.value})}/>
            </div>
            <div className='mb-2'> 
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email' className='form-control' value={values.email} onChange={e=> setvalues({...values, email:e.target.value})}/>
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
    </div>
   </div>
  )
}

export default Edit