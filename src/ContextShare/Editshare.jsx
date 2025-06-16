import React, { createContext, useState } from 'react'
export const EditUserdataContext = createContext()
export const UpdateUserDataContext = createContext()
export const PrintUserDataContext = createContext()
function Editshare({children}) {
  const [edituserData,setEdituserData] = useState({})
  const [UpdateUserData,setUpdateUserData] = useState({})
  const [PrintUserdata,setPrintUserData] = useState({})
  return (
    <>
    <EditUserdataContext.Provider value={{edituserData,setEdituserData}}>
    <UpdateUserDataContext.Provider value={{UpdateUserData,setUpdateUserData}}>
    <PrintUserDataContext.Provider value={{PrintUserdata,setPrintUserData}}>
        {children}
    </PrintUserDataContext.Provider>
    </UpdateUserDataContext.Provider>
    </EditUserdataContext.Provider>
    </>
  )
}

export default Editshare