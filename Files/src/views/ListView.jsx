import React, { useContext } from 'react'
import ItemCard from '../components/ItemCard'
import { ItemsContext } from '../context/ItemsContext'
import { useNavigate } from 'react-router-dom'


export default function ListView(){
  const ctx = useContext(ItemsContext) // TODO: use ctx.derived and filters
  const navigate = useNavigate()

  return (
    <div>
      <div className="row g-2 align-items-end mb-3">
        {/* TODO: search */}
        <div className="col-md-3">
          <label className="form-label">Search</label>
          <input
            className="form-control"
            type="text"
            value={ctx.search}
            onChange={(e) => ctx.setSearch(e.target.value)}
            placeholder="Search by name"
          />
        </div>
        {/* TODO: category filter */}
        <div className="col-md-2">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={ctx.category}
            onChange={(e) => ctx.setCategory(e.target.value)}
          >
            <option value="">All</option>
            {(ctx.categories || []).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        {/* TODO: min/max */}
        <div className="col-md-2">
          <label className="form-label">Min Rating</label>
          <input
            className="form-control"
            type="number"
            min="0"
            max="10"
            value={ctx.minValue}
            onChange={(e) => ctx.setMinValue(e.target.value)}
            placeholder="Min"
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Max Rating</label>
          <input
            className="form-control"
            type="number"
            min="0"
            max="10"
            value={ctx.maxValue}
            onChange={(e) => ctx.setMaxValue(e.target.value)}
            placeholder="Max"
          />
        </div>
        {/* TODO: sort key/dir */}
        <div className="col-md-2">
          <label className="form-label">Sort By</label>
          <select
            className="form-select"
            value={ctx.sortKey}
            onChange={(e) => ctx.setSortKey(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="rating">Rating</option>
            <option value="year">Year</option>
          </select>
        </div>
        <div className="col-md-1">
          <label className="form-label">Dir</label>
          <select
            className="form-select"
            value={ctx.sortDir}
            onChange={(e) => ctx.setSortDir(e.target.value)}
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
      </div>



      {/* TODO: empty state */}
      {(ctx.items || []).length === 0 && (
        <div className="alert alert-info">No data yet</div>
      )}
      {(ctx.items || []).length > 0 && (ctx.derived || []).length === 0 && (
        <div className="alert alert-warning">No results found</div>
      )}

      <div className="row g-3">
        {/* TODO: map ctx.derived to ItemCard */}
        {(ctx.derived || []).map(item => (
          <div className="col-md-6 col-lg-4" key={item.id}>
            <ItemCard
              item={item}
              onView={(id) => navigate(`/item/${id}`)}
              onEdit={(id) => navigate(`/edit/${id}`)}
              onDelete={ctx.deleteItem}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
