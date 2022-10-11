/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Treatment = () => {
  return (
   <>
   <h1 style={{margin:"35px",fontStyle: "italic"}}   className='head'>Treatment</h1>

<div className="container" >
  <div className="row">
    <div className="col-sm " >
    <div className="card" style={{width: '19rem',margin:"5px"}}>
  <img className="card-img-top" src="https://picsum.photos/201" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">React js</h5>
    <p className="card-text">A JavaScript library for building user interfaces and single page applications</p>
    <a href="https://reactjs.org/" target='blank' className="btn btn-primary">Read more..</a>
  </div>
</div>

    </div>
    <div className="col-sm">
    <div className="card" style={{width: '18rem',margin:"5px" ,boxShadow:"1rem"}}>
  <img className="card-img-top" src="https://picsum.photos/202" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Javascript</h5>
    <p className="card-text">JavaScript is the programming language of the Web. JavaScript is easy to learn.</p>
    <a href="https://www.w3schools.com/js/" target='blank' className="btn btn-primary">Read more..</a>
  </div>
</div>

    </div>
    <div className="col-sm">
    <div className="card" style={{width: '18rem',margin:"5px"}}>
  <img className="card-img-top  rounded-0" src="https://picsum.photos/203" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Html</h5>
    <p className="card-text">HTML is std markup language for Web pages With you can create your own Website</p>
    <a href="https://www.w3schools.com/html/"  target='blank' className="btn btn-primary">Read more..</a>
  </div>
</div>

    </div>
  </div>
</div>

   </>
  )
}

export default Treatment;
