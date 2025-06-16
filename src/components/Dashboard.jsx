import React, { useContext, useEffect, useState } from 'react'
import { deleteUserApi, getDetailsApi, oneuserApi } from '../services/allApi'
import { useNavigate } from 'react-router-dom'
import { EditUserdataContext, PrintUserDataContext, UpdateUserDataContext } from '../ContextShare/Editshare'
import Edituser from './Edituser'

function Dashboard() {
    const [userDetails,setUserDetails] = useState([])
    const {edituserData,setEdituserData} = useContext(EditUserdataContext)
    const {UpdateUserData,setUpdateUserData} = useContext(UpdateUserDataContext)
    const {PrintUserdata,setPrintUserData} = useContext(PrintUserDataContext)
    const navigate= useNavigate()
    const navigateedit = useNavigate()
    const handleUserDetails = async ()=>{
        
        const result = await getDetailsApi()
        if(result.status===200){
            setUserDetails(result.data)
        }else{
            setUserDetails(result.response.data)
        }
    }

    useEffect(()=>{
        handleUserDetails()
    },[UpdateUserData])

    const handleDelete = async (id)=>{
           const result = await deleteUserApi(id)
           if(result.status===200){
            handleUserDetails()
           }else{
            alert(result.response.data)
           }
        

    }
    const handleprint = async (id)=>{
      const result = await oneuserApi(id)
      setPrintUserData(result.data)
      navigate('/print')
    }
    const handleEdit = async (id)=>{
      const result = await oneuserApi(id)
      setEdituserData(result.data)
      navigateedit('/edit')
    }

    
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <table className='table mt-5 mb-5 p-5 bg-info border shadow w-75'>
           <tr>
            <th>Employee Name</th>
            <th>Actions</th>
           </tr>
           
             {
                userDetails?.length>0?userDetails.map(user=>(
                    <tbody>
                    <tr>
                    <td>{user.name}</td>
                    <td><i onClick={()=>handleEdit(user._id)} class="fa-solid fa-pen-to-square"></i></td>
                    <td><i onClick={()=>handleDelete(user?._id)} class="fa-solid fa-trash"></i></td>
                    <td><i onClick={()=>handleprint(user._id)} class="fa-solid fa-print"></i></td>
                </tr>
                </tbody>
                )):null
             }
           
        </table>
      </div>
    </>
  )
}

export default Dashboard