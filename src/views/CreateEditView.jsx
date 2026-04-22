import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemForm from '../components/ItemForm'
import { ItemsContext } from '../context/ItemsContext'

export default function CreateEditView(){
  const { id } = useParams()
  const navigate = useNavigate()
  const ctx = useContext(ItemsContext)
  // TODO: initial if editing; onSave add/update then navigate
  const initial = id ? (ctx.items || []).find(item => item.id === id) : null

  function onSave(data){
    if (id) ctx.updateItem(id, data)
    else ctx.addItem(data)
    navigate('/list')
  }

  return (
    <div>
      <h2 className="h5 mb-3">{id ? 'Edit Movie' : 'Add Movie'}</h2>
      <ItemForm initial={initial} onSave={onSave} onCancel={()=>navigate(-1)} />
    </div>
  )
}
