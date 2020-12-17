import React from 'react';
import { TitleContainer, TodoTitle } from './Topbar.style';

import Game from '../Game/Game';

const Topbar = () => {
    const [showGame, setShowGame] = React.useState(false);

    return (
        <TitleContainer>
            <TodoTitle onClick={() => setShowGame(!showGame)}>TODO</TodoTitle>
            {/* { showGame && <Game /> } */}
        </TitleContainer>
    );
}

export default Topbar;