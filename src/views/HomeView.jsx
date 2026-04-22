import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeView(){
  return (
    <div className="text-center py-4">
      <h1 className="mb-3">Movie Catalog</h1>
      <p className="lead">Application for saving movie data and rating</p>

      <div className="d-flex justify-content-center gap-2 mt-4">
        <Link className="btn btn-primary" to="/list">View Movies</Link>
        <Link className="btn btn-outline-secondary" to="/new">Add Movie</Link>
      </div>
    </div>
  )
}