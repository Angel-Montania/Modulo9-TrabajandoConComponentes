import React from 'react'
import propTypes from 'prop-types'

export default function ContentMovies({ title/*  = "Title" */, value /* = 0 */, color /* = "primary" */, icon /* = "fa-film" */ }) {
  return (
    <div className="col-md-4 mb-4">
        <div className={`card border-left-${color} shadow h-100 py-2`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{title}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                    </div>
                    <div className="col-auto">
                        <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

ContentMovies.propTypes = {
    color: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    icon: propTypes.string,
    value: propTypes.number.isRequired
}

ContentMovies.defaultProps = {
    color: "primary",
    title: "Title",
    icon: "fa-film",
    value: 0
}