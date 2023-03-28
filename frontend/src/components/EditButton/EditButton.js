import React from 'react'
import './edit.css'
import { Link } from 'react-router-dom'

const EditButton = () => {
  return (
    <Link to='/edit/:id' className='edit_btn'>Редактировать</Link>
  )
}

export default EditButton