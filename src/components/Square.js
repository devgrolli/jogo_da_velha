import React, { useContext } from "react";
import { GameContext } from '../contexts/GameContext'

export default function Square({ value, index }){
    const { squares, setSquares, isXNext, setisXNext} = useContext(GameContext);

    function handleClick(){
        if(squares[index]) return;

        const newSquares = [...squares];
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setisXNext(!isXNext);
    }

    return(
        <button 
            type="button"
            onClick={handleClick}>{value}
        </button>
    );
}