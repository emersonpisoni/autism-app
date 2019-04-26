import React from 'react';
import { choseAnimal } from '../../../assets/images/animal-src-helper';

export const Animal = ({
    name,
    width,
    ...props,
}) => {

    const animalStyle = {
        width: width ? `${width}px` : null,
    }
    return (
        <div className='Animal' >
            <img src={choseAnimal(name)} style={animalStyle} />
        </div>
    );
}