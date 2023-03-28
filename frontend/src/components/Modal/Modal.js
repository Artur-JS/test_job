import React, { useState } from 'react'
import axios from 'axios'
import './modal.css'

const Modal = ({active, setActive, children}) => {
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [bday, setBday] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios({
                method: "post",
                url: 'http://localhost:8180',
                data: {fname, lname, phone, bday}
            })
            alert('Пользователь успешно добавлен!')
            // console.log(res.data)
        } catch(err) {
            console.log(err)
        }
      }

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
            {children}
                <div className='row'>
                    <label>Имя:</label>
                    <input type='text' onChange={(e) => setFName(e.target.value)} name='fname' id='fname' value={fname} />
                </div>
                <div className='row'>
                    <label>Фамилия:</label>
                    <input type='text' onChange={(e) => setLName(e.target.value)} name='lname' id='lname' value={lname} />
                </div>
                <div className='row'>
                    <label>Телефон:</label>
                    <input type='text' onChange={(e) => setPhone(e.target.value)} name='phone' id='phone' value={phone} />
                </div>
                <div className='row'>
                    <label>Дата рождения:</label>
                    <input type='text' onChange={(e) => setBday(e.target.value)} name='bday' id='bday' value={bday} />
                </div>
                <button className='modal__add-btn' onClick={handleSubmit}>Добавить пользователя</button>
        </div>
    </div>
  )
}

export default Modal