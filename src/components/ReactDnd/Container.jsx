import React, { useCallback, useState, useEffect, Fragment } from 'react'
import update from 'immutability-helper'
import Draggable from './Draggable'

const Container = () => {

    const [data, setData] = useState([
        {
            attrID: 1,
            attrName: '111111111111111111111',
            isDrag: false,
            isHidden: false
        },
        {
            attrID: 2,
            attrName: '22222222222222222',
            isDrag: true,
            isHidden: false
        },
        {
            attrID: 3,
            attrName: '33333333333333333',
            isDrag: true,
            isHidden: false
        },
        {
            attrID: 4,
            attrName: '4444444444444444',
            isDrag: true,
            isHidden: true
        },
        {
            attrID: 5,
            attrName: '55555555555555',
            isDrag: true,
            isHidden: true
        },
        {
            attrID: 6,
            attrName: '666666666666666',
            isDrag: true,
            isHidden: true
        },
        {
            attrID: 7,
            attrName: '77777777777777',
            isDrag: true,
            isHidden: true
        },
    ])

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setData((prevCards) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]],
                ],
            }),
        )
    }, [])

    const onClickEye = (key) => {
        console.log(data, key, '_data1');
        let _data = data.map(v => {
            if (v.attrID == key) {
                return {
                    ...v,
                    isHidden: !v.isHidden
                }
            }
            return v
        })
        console.log(_data, '_data2')
        setData(_data)
    }

    const renderCard = (item, index) => {
        return (
            <Draggable
                item={item}
                key={item.attrID}
                index={index}
                moveCard={moveCard}
                onClickEye={onClickEye}
            />
        )
    }

    useEffect(() => {
        console.log(data, 'datadatadata');
    }, [data])

    return (
        <Fragment>
            <div style={{ width: 400 }}>{data.map((item, i) => renderCard(item, i))}</div>
        </Fragment>
    )
}


export default Container