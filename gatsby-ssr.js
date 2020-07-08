import React from 'react';

export function onRenderBody({ setPostBodyComponents }) {
    setPostBodyComponents([
        <div id='portal' key='portal'/>
    ]);
}