import React, { useContext, useEffect, useState } from 'react'
import { EditUserdataContext, UpdateUserDataContext } from '../ContextShare/Editshare'
import { editUserApi } from '../services/allApi';
import { useNavigate } from 'react-router-dom';

function Edituser() {
    const {edituserData,setEdituserData} = useContext(EditUserdataContext)
    const {UpdateUserData,setUpdateUserData} = useContext(UpdateUserDataContext)
    const [data,setData] = useState({})
    const navigate = useNavigate()
    console.log(edituserData);
    useEffect(()=>{
      setData({
        name:edituserData.name,designation:edituserData.designation,phone:edituserData.phone,salary:edituserData.salary
      })
    },[edituserData])

    const handleuseredit = async ()=>{
      const {name,designation,phone,salary} = data
      if(!name ||!designation ||!phone ||!salary){
        alert("Please Fill The Form completely")
      }else{
        const reqBody = new FormData()
        reqBody.append("name",name)
        reqBody.append("designation",designation)
        reqBody.append("phone",phone)
        reqBody.append("salary",salary)
        

        const result = await editUserApi(reqBody)
        if(result.status===200){
          console.log(result);
          alert(`${result.data.name} Details Updated Successfuly`)
          setUpdateUserData(result.data)
          navigate('/dashboard')
        }else{
          alert(result.data.response)
        }
      }
    }
  return (
    <>
    <div style={{height:'100vh',width:'100%'}} className='d-flex flex-column justify-content-center align-items-center'>
          <div className='card shadow w-75 p-5 bg-info'>
            <h3 className='text-center text-light'>Employee Details</h3>
              <label>Name
              <input type='text' className='form-control w-100' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
              </label>
              <label>Designation
              <input type='text' className='form-control w-100' value={data.designation} onChange={(e)=>setData({...data,designation:e.target.value})}/>
              </label>
              <label>Phone
              <input type='number' className='form-control w-100' value={data.phone} onChange={(e)=>setData({...data,phone:e.target.value})}/>
              </label>
              <label>Salary
              <input type='number' className='form-control w-100' value={data.salary} onChange={(e)=>setData({...data,salary:e.target.value})}/>
              </label>
          </div>
          <div>
            <button onClick={handleuseredit}  style={{float:'right'}} className='btn btn-info text-light mt-3'>Update</button>
          </div>
       </div>
    </>
    
  )
}

export default Edituser
