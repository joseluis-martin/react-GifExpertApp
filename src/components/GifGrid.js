import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

// Para cambiar el nombre de un parámetro desestructurado data:images

    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

            { loading && <p className='card-grid animate__animated animate__flash'> Loading...</p>}
            <div className='card-grid'>
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key = {img.id}
                            {...img } />
                    )
                )}

            </div>
        </>
  )
}
