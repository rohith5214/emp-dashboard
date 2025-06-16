import React, { useState } from 'react'
import { addUserApi } from '../services/allApi'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [data,setData] = useState({
        name:'',designation:'',phone:'',salary:''
    })
    const navigate = useNavigate()

    const handleAdd = async ()=>{
        const {name,designation,phone,salary} = data
        if(!name ||!designation ||!phone ||!salary){
            alert("Please Fill The Form Completely")
        }else{
            const reqBody = new FormData()
            reqBody.append("name",name)
            reqBody.append("designation",designation)
            reqBody.append("phone",phone)
            reqBody.append("salary",salary)

            
            const result = await addUserApi(reqBody)
            if(result.status===200){
              console.log(result);
                setData(result.data)
                navigate('/dashboard')
            }else{
                setData(result.response.data)
            }
        }
    }
  return (
    <>
       <div style={{height:'100vh',width:'100%'}} className='d-flex flex-column justify-content-center align-items-center'>
          <div className='card shadow w-75 p-5 bg-info'>
            <h3 className='text-center text-light'>Employee Details</h3>
              <label>Name
              <input type='text' className='form-control w-100' onChange={(e)=>setData({...data,name:e.target.value})}/>
              </label>
              <label>Designation
              <input type='text' className='form-control w-100' onChange={(e)=>setData({...data,designation:e.target.value})}/>
              </label>
              <label>Phone
              <input type='number' className='form-control w-100' onChange={(e)=>setData({...data,phone:e.target.value})}/>
              </label>
              <label>Salary
              <input type='number' className='form-control w-100' onChange={(e)=>setData({...data,salary:e.target.value})}/>
              </label>
          </div>
          <div>
            <button onClick={handleAdd} style={{float:'right'}} className='btn btn-info text-light mt-3'>Submit</button>
          </div>
       </div>
    </>
  )
}

export default Home