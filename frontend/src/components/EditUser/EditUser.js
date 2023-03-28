import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './useredit.css'
import { Link, useNavigate } from 'react-router-dom'

const EditUser = () => {
    const [id, setId] = useState(0)
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [bday, setBday] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
      setId(localStorage.getItem('id'))
      setFName(localStorage.getItem('fname'))
      setLName(localStorage.getItem('lname'))
      setPhone(localStorage.getItem('phone'))
      setBday(localStorage.getItem('bday'))
    }, [])



    const handleUpdate = async (e) => {
      e.preventDefault()
        await axios({
          method: 'put',
          url: 'http://localhost:8180',
          data: {id : id, fname : fname, lname : lname, phone : phone, bday : bday}
        })
        .then(res => {
          console.log(res.data)
          navigate('/')
        }).catch(err => console.log(err))
      }
   
        

  return (
    <div className='container'>
        <div className='add__main-title'>      
          <h3>Редактировать пользователя</h3>
        </div>
        <div>
            <label class="placeholder-box">
	            <input required type="text" name='fname' id='fname' value={fname} onChange={(e) => setFName(e.target.value)} />
            </label>
	
            <label class="placeholder-box">
	            <input required type="text" name='lname' id='lname' value={lname} onChange={(e) => setLName(e.target.value)} />
            </label>
 
            <label class="placeholder-box">
	            <input required type="text" name='phone' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>

            <label class="placeholder-box">
	            <input required type="text" name='bday' id='bday' value={bday} onChange={(e) => setBday(e.target.value)} />
            </label>
        </div>
        <div className='btns'>
            <button className='submit_btn' onClick={handleUpdate}>Обновить</button>
            <Link to='/' className='back_link'>Назад</Link>
        </div>  
    </div>
  )
}

export default EditUser