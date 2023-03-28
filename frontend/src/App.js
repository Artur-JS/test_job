import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from './components/UserList/UserList'
import AddUser from './components/AddUser/AddUser'
import EditUser from './components/EditUser/EditUser'

import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        await axios.get('http://localhost:8180')
        .then(res => setUsers(res.data.data))
        // console.log(res.data.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchAllUsers()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />}></Route>
        <Route path='/add' element={<AddUser />}></Route>
        <Route path='/edit/:id' element={<EditUser />}></Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App;
