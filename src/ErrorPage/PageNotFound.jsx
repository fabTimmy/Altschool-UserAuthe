import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../Img/Free Vector _ Funny error 404 background design.jpg'

const PageNotFound = () => {
  return (
    <div className='notFound'>
        <img src={notFound} alt="pageNotFound"  width='35%' height='35%'/> <br />
        <Link to='/' className="btn"><h2> Go Home </h2></Link>
    </div>
  )
}

export default PageNotFound