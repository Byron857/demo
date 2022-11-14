import React, { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { Icon } from 'antd'


const IndexPage = () => {

    const list = [
        { label: '第1个数据', fieldName: 'data-a1', children: [], isDrag: false, isHidden: false, key: 1 },
        { label: '第2个数据', fieldName: 'data-a2', children: [], isDrag: true, isHidden: true, key: 2 },
        { label: '第3个数据', fieldName: 'data-a3', children: [], isDrag: true, isHidden: false, key: 3 },
        { label: '第4个数据', fieldName: 'data-a4', children: [], isDrag: true, isHidden: false, key: 4 },
        { label: '第5个数据', fieldName: 'data-a5', children: [], isDrag: true, isHidden: false, key: 5 },
        { label: '第6个数据', fieldName: 'data-a6', children: [], isDrag: true, isHidden: true, key: 6 },
        { label: '第7个数据', fieldName: 'data-a7', children: [], isDrag: true, isHidden: false, key: 7 },
        { label: '第8个数据', fieldName: 'data-a8', children: [], isDrag: true, isHidden: false, key: 8 },
        { label: '第9个数据', fieldName: 'data-a9', children: [], isDrag: true, isHidden: false, key: 9 },
    ];
    const [data, setData] = useState(list);

    const lockIndex = [0]

    const onDrag = (arr = [], dragResult) => {
        const { removedIndex, addedIndex, payload } = dragResult;
        if (removedIndex === null && addedIndex === null) {
            return arr;
        }
        const result = [...arr];
        let itemToAdd = payload;
        if (removedIndex !== null) {
            itemToAdd = result.splice(removedIndex, 1)[0];
        }
        if (addedIndex !== null) {
            result.splice(addedIndex, 0, itemToAdd);
        }
        return result;
    };

    const onDrop = (dropResult) => {
        const { removedIndex, addedIndex } = dropResult;
        if (lockIndex.includes(addedIndex)) return
        console.log(removedIndex, addedIndex, dropResult, ' removedIndex, addedIndex,dropResult ');
        if (removedIndex !== null || addedIndex !== null) {
            const list = onDrag(data, dropResult);
            setData(list);
        }
    }

    const config = {
        lockAxis: "y", //锁轴
        dragHandleSelector: ".column-drag-handle", //可拖动手柄
        nonDragAreaSelector: ".disabled-drag", //禁止拖拽的
        animationDuration: 500, //动画延迟 
        dragClass: "opacity-ghost", //拖拽时的样式
        // dropClass: "opacity-ghost-drop", //拖拽结束停放时的样式
        autoScrollEnabled: true,// 自动滚动启用
        // dropPlaceholder: {
        //     animationDuration: 150,
        //     showOnTop: true,
        //     className: 'drop-preview'
        // },
        // dropPlaceholderAnimationDuration: 200
    }

    const onClickEye = (key) => {
        let _data = data.map(v => {
            if (v.key == key) {
                return {
                    ...v,
                    isHidden: !v.isHidden
                }
            }
            return v
        })
        console.log(_data)
        setData(_data)
    }

    return (
        <div>
            <Container onDrop={onDrop} {...config}>
                {
                    data.map((item) => (
                        <Draggable key={item.fieldName}>
                            <div style={{ padding: '6px 0' }}>
                                {
                                    item.isDrag ? <span
                                        className="column-drag-handle"
                                        style={{ float: 'left', padding: '0 10px' }}
                                    >&#x2630;
                                    </span> :
                                        <span
                                            style={{ float: 'left', padding: '0 10px' }}
                                        >
                                            <Icon type="lock" />
                                        </span>
                                }

                                {
                                    item.isHidden ? <span
                                        style={{ float: 'right', padding: '0 10px' }}
                                        onClick={() => { onClickEye(item.key) }}
                                    >
                                        <Icon type="eye-invisible" />
                                    </span> : <span
                                        style={{ float: 'right', padding: '0 10px' }}
                                        onClick={() => { onClickEye(item.key) }}
                                    >
                                        <Icon type="eye" />
                                    </span>
                                }
                                {
                                    item.isHidden ? <span style={{ color: 'rgba(0, 0, 0, 0.25)' }}>
                                        {item.label}
                                    </span> : <span>
                                        {item.label}
                                    </span>
                                }
                            </div>
                        </Draggable>
                    ))
                }
            </Container>
            <style>
                {`
                    .opacity-ghost{
                        box-shadow: 0 2px 8px rgb(0 0 0 / 9%);
                        border-color: transparent;
                        cursor: move;
                    }
                    .opacity-ghost-drop{
                        background: red;
                    }
                    .column-drag-handle{
                        cursor: move;
                    }
                    .drop-preview{
                        border: 2px dashed black !important;
                    }
                    
                `}
            </style>
        </div>
    );
}

export default IndexPage