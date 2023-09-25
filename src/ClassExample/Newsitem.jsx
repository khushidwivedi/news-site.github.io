import React, { Component } from 'react'
import "./mystyle.css"

export default class Newsitem extends Component {
  render() {
    return (
      <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
        <div className="card">
          <img src={this.props.img} height="250px" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title.slice(0, 50) + "..."}</h5>
            <p className="card-text">{this.props.desc.slice(0, 100) + "..."}</p>
            <a href={this.props.url} className="btn text-light background w-100">View More</a>
          </div>
        </div>
      </div>
    )
  }
}
