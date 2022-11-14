import React, { useState } from 'react'
import {Button,Spin} from 'antd'
import Box from '@@/Box'
export default function Spins() {
    const [bool, setbool] = useState(true)
    const onClick=()=>{
        console.log('111')
        setbool(!bool)
    }
    let list=[1,2,3,6,8,7,9]
    return (
        <div>
           <Box loading={bool} isNoData={list.length}>
            {
                list.map(item=>{
                    return <p key={item} style={{lineHeight:'40px',background:'pink',margin:'5px 0'}}>{item}</p>
                })
            }
            </Box>
            {/* <Spin/> */}
            <div>
                <Button onClick={onClick}>onClick</Button>
            </div>
        </div>
    )
}
