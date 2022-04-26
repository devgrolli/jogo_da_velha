import React, { createContext, useState } from "react";

export const GameContext = createContext();

// Envolve todos os componentes da aplicação
export default function GameContextProvider({ children }){
    // use state
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setisXNext] = useState(true);

    const state = {
        squares,
        setSquares,
        isXNext,
        setisXNext
    }

    // retorna o estado global
    return (
        <GameContext.Provider 
            value={state}>{children}
        </GameContext.Provider>
    );
}
