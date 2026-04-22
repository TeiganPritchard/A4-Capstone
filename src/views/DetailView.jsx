import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ItemsContext } from '../context/ItemsContext'

export default function DetailView(){
  const { id } = useParams()
  const ctx = useContext(ItemsContext)
  // TODO: find by id
  const item = (ctx.items || []).find(i => i.id === id)

  return (
    <div>
      <div className="mb-3"><Link className="btn btn-sm btn-outline-secondary" to="/list">Back to list</Link></div>
      {!item ? (
        <div className="alert alert-warning">Movie not found</div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p className="mb-1"><strong>Category:</strong> {item.category}</p>
            <p className="mb-1"><strong>Rating:</strong> {item.rating}</p>
            <p className="mb-1"><strong>Year:</strong> {item.year}</p>
            <p className="mb-0"><strong>Description:</strong> {item.description || 'No description'}</p>
          </div>
        </div>
      )}
    </div>
  )
}
