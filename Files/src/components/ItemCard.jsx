import React from 'react'
export default function ItemCard({ item, onView, onEdit, onDelete }){
  return (
    <div className="card h-100">
      <div className="card-body">
        {/* TODO: show fields */}
        <h5 className="card-title">{item.name}</h5>
        <p className="mb-1"><strong>Category:</strong> {item.category}</p>
        <p className="mb-1"><strong>Rating:</strong> {item.rating}</p>
        <p className="mb-1"><strong>Year:</strong> {item.year}</p>
        <p className="mb-0">{item.description || 'No description'}</p>
      </div>
      <div className="card-footer d-flex justify-content-end gap-2">
        {/* TODO: buttons */}
        <button className="btn btn-sm btn-outline-primary" onClick={() => onView(item.id)}>
          View
        </button>
        <button className="btn btn-sm btn-outline-secondary" onClick={() => onEdit(item.id)}>
          Edit
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}
