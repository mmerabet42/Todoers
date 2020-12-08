import React from 'react';

import { OutsideBlock } from './ShadowMask.style';

const ShadowMask = (props) => {
    return (
        <>
            <OutsideBlock onClick={props.onClick} />
            {props.children}
        </>
    )
}

export default ShadowMask;