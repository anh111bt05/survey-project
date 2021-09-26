import React from 'react';
import SuspenseGif from '../resources/image/suspense/suspense.gif';

export default function Suspense() {
    return (
        <div style={{
            heigh: '100vh',
            width: '100vw'
        }}>
            Loading...
            <img src={SuspenseGif} alt=''/>
        </div>
    )
}