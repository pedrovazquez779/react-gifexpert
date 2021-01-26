import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            { loading && <p>Cargando...</p>}

            <div className='card-grid'>
                {
                    images.map((img) => ( // estos parentesis estan haciendo un return implicito
                        <GifGridItem
                            key={img.id}
                            {...img} // pasa todas las propiedades del objeto al componente
                        />
                    ))
                }
            </div>
        </>
    )
}
