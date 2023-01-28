import React, { useState, Component } from 'react'
import { Button } from 'antd'
import classNames from 'classnames'
import Abc from '@@/Abc'
import Gridlayout from '@@/Grid-Layout';
import Upload from '@@/upload'
import DragBox from '@@/DragBox'
import Charts from '@@/Charts'
import ListSort from '@@/ListSort'
import VirtualList from '@@/VirtualList'
import ComMemo from '@@/memo'
import UseContext from '@@/useContext'
import useUpdate from '@@/hooks/useUpdate'
import JsonEdit from '@@/JsonEdit'
import Range from '@@/Range'
import UbitRange from '@@/UbitRange'
import SmoothDnd from '@@/SmoothDnd'
import SortTablejs from '@@/SortTablejs'
import FromCom from '@@/FromCom'

export default function Com() {

    // const update = useUpdate();

    const [value, setValue] = useState([5, 18])

    const onChange = (val) => {
        console.log(val, 'val');
        setValue(val)
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            {/* <div className='comBox'>
                <SmoothDnd />
            </div> */}
            {/* <div className={classNames('sss', { [aaaname]: true })}>123</div> */}
            {/* <div>5556778</div> */}
            <FromCom />
            <style jsx>
                {`
                    .sss{
                        color: red;
                    }
                    .aaa{
                        font-size:20px;
                        font-weight: bold;
                    }
                    .comBox{
                        width: 600px;
                        height: 500px;
                        margin: 0 auto;
                        background: white;
                        //background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
                        //opacity: 0.9;
                    }
                `}
            </style>
        </div>
    )
}


