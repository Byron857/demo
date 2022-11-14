import React, { useRef } from 'react'
import useDraggable from '../hooks/useDraggable'

const DragBox = () => {

    const ref = useRef(null)

    useDraggable(ref)

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className='xxx' ref={ref}>
                <div style={{ width: 80, height: 80, background: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    123
                </div>
            </div>
            <style jsx>
                {`
                .xxx{
                    position: fixed;
                }
            `}
            </style>
        </div>
    )
}

export default DragBox