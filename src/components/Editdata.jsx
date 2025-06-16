import React, { useContext } from 'react'
import { usePDF } from 'react-to-pdf';
import { PrintUserDataContext } from '../ContextShare/Editshare';
function Editdata() {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const {PrintUserdata,setPrintUserData} = useContext(PrintUserDataContext)
  return (
    <>
     <div>
      <h1 className='text-center text-info mt-3'>Employee Details</h1>
         <button style={{float:'right'}} className='btn btn-success mt-5 p-2 me-3' onClick={() => toPDF()}>Download PDF</button>
         <div ref={targetRef}>
            <div  className='d-flex justify-content-center align-items-center'>
            <table class="table table-striped mt-5 w-75">
            <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Phone</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">{PrintUserdata.name}</td>
      <td>{PrintUserdata.designation}</td>
      <td>{PrintUserdata.phone}</td>
      <td>{PrintUserdata.salary}</td>
    </tr>
  </tbody>
           </table>
            </div>
         </div>
      </div>
    </>
  )
}

export default Editdata