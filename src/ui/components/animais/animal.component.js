import React from 'react';
import { choseAnimal } from '../../../assets/images/animal-src-helper';

export const Animal = ({ name, width, ...props }) => {

    const animalStyle = {
        width: width ? `${width}px` : null,
    }

    return (
        <img
            onClick={() => props.onClick(name)}
            src={choseAnimal(name)}
            alt={name}
            style={animalStyle}
           >
        </img>

    );
}