import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './useradd.css'

const AddUser = () => {
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [bday, setBday] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8180', {fname, lname, phone, bday})
            .then(res => {
                // console.log(res.data)
                navigate('/')
            })
          } catch(err) {
            console.log(err)
          }
        }

  return (
    <div className='container'>
        <div className='add__main-title'>      
          <h3>Добавить пользователя</h3>
        </div>
        <div>
            <label class="placeholder-box">
	            <input required type="text" name='fname' id='fname' placeholder='Введите имя' onChange={(e) => setFName(e.target.value)} />
            </label>
	
            <label class="placeholder-box">
	            <input required type="text" name='lname' id='lname' placeholder='Введите фамилию' onChange={(e) => setLName(e.target.value)}  />
            </label>
 
            <label class="placeholder-box">
	            <input required type="text" name='phone' id='phone' placeholder='Введите номер телефона' onChange={(e) => setPhone(e.target.value)}  />
            </label>

            <label class="placeholder-box">
	            <input required type="text" name='bday' id='bday' placeholder='Введите дату рождения' onChange={(e) => setBday(e.target.value)}  />
            </label>
        </div>
        <div className='btns'>
            <button className='submit_btn' onClick={handleSubmit}>Отправить</button>
            <Link to='/' className='back_link'>Назад</Link>
        </div>  
    </div>
  )
}

export default AddUser