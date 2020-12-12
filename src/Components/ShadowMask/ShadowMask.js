import React from 'react';

import {
    OnTopOfEverything,
    OutsideBlock
} from './ShadowMask.style';

const ShadowMask = (props) => {
    return (
        <OnTopOfEverything>
            <OutsideBlock onClick={props.onClick} />
            {props.children}
        </OnTopOfEverything>
    )
}

export default ShadowMask;