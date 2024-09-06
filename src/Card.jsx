import React from 'react'
import './Card.css'


const Card = ({img,title,detail,url}) => {

   
    return (
    <>
    <div className="Card">
        <div className="card-full">
        <div className="card-image">
        <img onClick={()=>window.location.href=url} className="card-img" src={img} alt=""  />
        </div>
        <div className="card-date">Date 22-08-24</div>
        <div className="card-title">{title}</div>
        <div className="card-detail">{detail}</div>
        </div>
    </div>
    </>
  )
}

export default Card