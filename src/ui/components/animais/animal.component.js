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

    const handleClick = () =>{
        console.log(name)
    }
    return (
        <img
            src={choseAnimal(name)}
            alt={name}
            style={animalStyle}
            onClick={handleClick}>
        </img>

    );
}