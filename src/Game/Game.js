import React from 'react';

import {
    GameContainer
} from './Game.style';

const Game = () => {
    const [rectPos, setRectPos] = React.useState({ x: 0, y: 0 });

    const viewBox = [0, 0, window.innerWidth, window.innerHeight];
    
    const onKeyDown = (e) => {
        console.log(e.keycode);
        if (e.keycode === 39) {
            setRectPos({
                x: rectPos.x - 5,
                y: rectPos.y
            });
        }
    }

    return (
        <GameContainer>
            <svg
                onKeyDown={onKeyDown}
                preserveAspectRatio="xMaxYMax none"
                viewBox={viewBox}
            >
                <rect
                    className="rectExample"
                    x={rectPos.x} y={rectPos.y}
                    width={100} height={100}
                />
            </svg>
        </GameContainer>
    );
};

export default Game;