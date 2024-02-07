import { useDispatch } from 'react-redux';
import { setFavorite } from '../../slices/dataSlice';
import { StarButton } from '../StarButton';
import { Card } from 'antd';
import './Card.css'

const { Meta } = Card;

const idTransform = (id) => {
    return `#${id.toString().padStart(3, '0')}`;
}

function PokemonCard({ id, name, image, types, favorite }) {
    const dispatch = useDispatch();

    // const typeToColorStyle = {
    //     bug: { backgroundColor: '#C6D16E' },
    //     dark: { backgroundColor: '#A29288' },
    //     dragon: { backgroundColor: '#A27DFA' },
    //     electric: { backgroundColor: '#FAE078' },
    //     fairy: { backgroundColor: '#F4BDC9' },
    //     fighting: { backgroundColor: '#D67873' },
    //     fire: { backgroundColor: '#F5AC78' },
    //     flying: { backgroundColor: '#C6B7F5' },
    //     ghost: { backgroundColor: '#A292BC' },
    //     grass: { backgroundColor: '#A7DB8D' },
    //     ground: { backgroundColor: '#E0C068' },
    //     ice: { backgroundColor: '#BCE6E6' },
    //     normal: { backgroundColor: '#C6C6A7' },
    //     poison: { backgroundColor: '#C183C1' },
    //     psychic: { backgroundColor: '#FA92B2' },
    //     rock: { backgroundColor: '#D1C17D' },
    //     steel: { backgroundColor: '#D1D1E0' },
    //     water: { backgroundColor: '#9DB7F5' },
    //     default: { backgroundColor: '#CCC' },
    // };

    const typeString = types.map((elem) => elem.type.name).join(', ');

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }

    return (
        <Card
            className='PokemonCard'
            extra={
                <StarButton
                    isFavorite={favorite}
                    onClick={handleOnFavorite}
                />}
            cover={<img src={image} alt={name} />}
            title={`${idTransform(id)} ${name}`}
        >
            <Meta description={typeString} />
        </Card >
    )
}

export { PokemonCard }