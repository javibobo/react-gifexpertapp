import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>

      { loading  && <p>Loading</p> }

      <div className='gridGifs'>
        {
          images.map(({ id, url, title }) => 
            <GifGridItem key={id} src={ url } title={ title } />
          )
        }
      </div>
    </>
  )
}