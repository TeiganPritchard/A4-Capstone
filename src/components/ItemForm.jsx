import React, { useEffect, useState } from 'react'

const EMPTY = { name: '', rating: '', year: '', category: '', description: '' }
const yearOk = v => Number.isInteger(Number(v)) && Number(v) >= 0
const ratingOk = v => Number.isInteger(Number(v)) && Number(v) >= 0 && Number(v) <= 10


export default function ItemForm({ initial = null, onSave, onCancel } ){

  const [m, setM] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const editing = !!initial

  useEffect(() => {
    if (initial) {
      setM({
        ...initial,
        rating: String(initial.rating ?? ''),
        year: String(initial.year ?? '')
      })
    }
  }, [initial])

  function validate() {
    const e = {}
    if (!m.name.trim()) e.name = 'Name required'
    if (!m.category) e.category = 'Category required'
    if (!ratingOk(m.rating)) e.rating = 'Rating must be an integer from 0 to 10'
    if (!yearOk(m.year)) e.year = 'Year must be a non-negative integer'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onSubmit(e){ 
    e.preventDefault(); 
    /* TODO: validate + save */ 
    if (!validate()) return
    onSave({
      ...m,
      rating: Number(m.rating),
      year: Number(m.year)
    })
  }
  
  return (
    <form className="row g-3" onSubmit={onSubmit} noValidate>
      {/* TODO: name/title (required) */}
      <div className="col-md-6">
        <label className="form-label">Name</label>
        <input
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={m.name}
          onChange={e => setM({ ...m, name: e.target.value })}
          onBlur={validate}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      {/* TODO: category (required) */}
      <div className="col-md-6">
        <label className="form-label">Category</label>
        <input
          className={`form-control ${errors.category ? 'is-invalid' : ''}`}
          value={m.category}
          onChange={e => setM({ ...m, category: e.target.value })}
          onBlur={validate}
        />
        {errors.category && <div className="invalid-feedback">{errors.category}</div>}
      </div>

      {/* TODO: numeric fields like price/rating with validation */}
      <div className="col-md-6">
        <label className="form-label">Rating</label>
        <input
          className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
          value={m.rating}
          onChange={e => setM({ ...m, rating: e.target.value })}
          onBlur={validate}
        />
        {errors.rating && <div className="invalid-feedback">{errors.rating}</div>}
      </div>

      <div className="col-md-6">
        <label className="form-label">Year</label>
        <input
          className={`form-control ${errors.year ? 'is-invalid' : ''}`}
          value={m.year}
          onChange={e => setM({ ...m, year: e.target.value })}
          onBlur={validate}
        />
        {errors.year && <div className="invalid-feedback">{errors.year}</div>}
      </div>

      {/* TODO: description */}
      <div className="col-12">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows="3"
          value={m.description}
          onChange={e => setM({ ...m, description: e.target.value })}
        />
      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">{editing ? 'Update' : 'Save'}</button>
        {/* TODO: Cancel button in edit mode */}
        <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}
