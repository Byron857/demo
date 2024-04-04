import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
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
import ReactSortablejs from '@@/ReactSortablejs'
import ReactDnd from '@@/ReactDnd'
import FullscreenDraggable from '@@/FullscreenDraggable'

export default function Com() {
    console.log('Com组件');
    // const update = useUpdate();

    const [value, setValue] = useState([5, 18])

    const onChange = (val) => {
        console.log(val, 'val');
        setValue(val)
    }

    const keyCode = nanoid(16) //生成唯一id

    const data = [];
    for (let i = 0; i < 100000; i++) {
        data.push({
            key: i,
            name: `John Doe ${i}`,
            age: Math.floor(Math.random() * 100),
            address: `Address ${i}`,
        });
    }

    return (
        <div style={{
            width: '100%', height: '100%',
            // background: 'skyblue'
        }}>
            {/* <div className='comBox'>
                <SmoothDnd />
            </div> */}
            {/* <div className={classNames('sss', { [aaaname]: true })}>123</div> */}
            {/* <div>5556778</div> */}
            {/* <FromCom /> */}
            {/* {keyCode} */}
            {/* <EditTable /> */}
            {/* <ReactSortablejs /> */}
            <FullscreenDraggable>
                <div style={{ width: 100, height: 100, backgroundColor: "red" }}></div>
            </FullscreenDraggable>
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