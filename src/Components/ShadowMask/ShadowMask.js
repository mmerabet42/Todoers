import React from 'react';

import {
    OutsideBlock
} from './ShadowMask.style';

const ShadowMask = (props) => {
    return (
        <OutsideBlock absolute={props.absolute} color={props.color}>
            <div className="top-everything" onClick={props.onClick} />
            <div className="other-top">
                {props.children}
            </div>
        </OutsideBlock>
    )
}

export default ShadowMask;