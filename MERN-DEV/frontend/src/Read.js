import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Read = () => {
    const {id}= useParams();
    const [student, setstudent] = useState([])
    useEffect(()=>{
       
        axios.get('http://localhost:8081/read/'+id)
        .then(res=>{console.log(res);
          setstudent(res.data)
        }).catch(err=>{console.log(err);
        })
    },[])
  return (
    <div className='d-flex align-items-center vh-100 justify-content-center bg-primary'>
      <div className='w-50 bg-white rounded p-3 '>
          {student.map((data,index)=>{
            return <ul key={index} >
              <li className='p-1'>{data.ID}</li>
              <li className='p-1'>{data.NAME}</li>
              <li className='p-1'>{data.EMAIL}</li>
              <Link  to={`/edit/${data.ID}`} className='btn btn-success btn-sm  '>edit</Link>
              <button className='btn btn-danger btn-sm mx-2'>delete</button>
            </ul>
          })}
          
      </div>
    </div>
  )
}

export default Read