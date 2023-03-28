import React, { useState, useEffect } from 'react'
import './users.css'
import axios from 'axios'
import AddButton from '../AddButton/AddButton'
import { Link } from 'react-router-dom'

const UserList = () => {
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

    const seToLocalStorage = (id, fname, lname, phone,bday) => {
      localStorage.setItem("id" , id)
      localStorage.setItem("fname" , fname)
      localStorage.setItem("lname" , lname)
      localStorage.setItem("phone" , phone)
      localStorage.setItem("bday" , bday)
    }

    const handleDelete = async (id) => {
      const confirm = window.confirm('Вы действительно хотите удалить данного пользователя?')
      if(confirm) {
          await axios({
            method: 'delete',
            url: 'http://localhost:8180',
            data: {id : id}
          })
          .then(res => {
            console.log(res.data)
            window.location.reload()
          }).catch(err => console.log(err))
        }
    }

  return (
    <div className='container'>
        <div className='user__main-title'>      
          <h3>Пользователи {users.length} </h3>
           <AddButton />
        </div>

        <div className='user__list-table'>
        <table className='table'>
          <thead>
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
            <th>Дата рождения</th>
            <th>Опции</th>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.phone}</td>
                <td>{user.bday}</td>
                <td className='icon'>
                  <Link to={`/edit/${user.id}`} className='edit_btn' onClick={() => seToLocalStorage(user.id, user.fname, user.lname, user.phone, user.bday)}>Редактировать</Link>
                  <button className='del_btn' onClick={e => handleDelete(user.id)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default UserList
