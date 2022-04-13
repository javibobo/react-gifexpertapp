import React from 'react'

export const GifGridItem = ( {id, src, title} ) => {

  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={ src } alt={ title } />
      <h4>{ title }</h4>
    </div>
  )
}
