import React from 'react';
import { Oval }from 'react-loader-spinner';

function Loading() {
    return (
        <Oval
            type="Oval"
            color="#3d66ba"
            height={30}
            width={30}
            timeout={3000}
        />
    );
}

export default Loading;
