import alce from './alce.svg';
import castor from './castor.svg';
import guaxinim from './guaxinim.svg';
import ourico from './ourico.svg';
import raposa from './raposa.svg';
import urso from './urso.svg';
import vaca from './vaca.svg'

export const Alce = alce;
export const Castor = castor;
export const Guaxinim = guaxinim;
export const Ourico = ourico;
export const Raposa = raposa;
export const Urso = urso;
export const Vaca = vaca;

export const choseAnimal = (animal) => { 
    switch (animal ? animal.toLowerCase() : '') {
        case 'alce':
            return Alce;
        case 'castor':
            return Castor;
        case 'guaxinim':
            return Guaxinim;
        case 'ourico':
            return Ourico;
        case 'raposa':
            return Raposa;
        case 'urso':
            return Urso;
        case 'vaca':
            return Vaca;
        case '':
            return Ourico;
        default:
            return Ourico;

    }
}