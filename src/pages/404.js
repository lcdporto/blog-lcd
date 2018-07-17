import React from 'react'
import img404 from '../assets/404.jpg'
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>WTF 404!</h1>
    <p>A página não existe. É melhor ir até à <Link to={'/'}>Homepage</Link>.</p>
    <img src={img404} />
  </div>
)

export default NotFoundPage
