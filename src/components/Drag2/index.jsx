import React from 'react'
import D from './D'
const Drag = () => {
    return (
        <div>
            <D/>
            <style jsx={true}>
                    {`
                        :global(.ant-modal-body >div){
                                height:150px;
                            }
                    `}
            </style>
        </div>
    )
}

export default Drag
