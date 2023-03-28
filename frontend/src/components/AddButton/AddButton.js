import React from 'react'
import './add.css'
import { Link } from 'react-router-dom'

const AddButton = () => {
  

  return (
    <Link to='/add' className='add_btn'>Добавить пользователя</Link>
  )
}

export default AddButton