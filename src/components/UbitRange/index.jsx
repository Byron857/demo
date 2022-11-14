import React, { useState, useEffect } from 'react'
import { Input, Popover, message } from 'antd'

const Range = ({ value = [], onChange, disabledRange }) => {

    const list = [...Array(100).keys()]

    const [arr, setArr] = useState(value)
    // console.log(list);
    const getClassName = (v) => {
        if (arr.includes(v + 1)) {
            return ` on`
        }
        return ''
    }

    //点击选择
    const latticeClick = (value) => {
        console.log(value, 'value')
        if (arr.includes(value)) {
            let _arr = arr.filter(v => v != value)
            setArr([..._arr])
        } else {
            setArr([...arr, value])
        }
    }

    const isDisabled = (v) => {
        return disabledRange.includes(v + 1)
    }

    const getDisabledClassName = (v) => {
        return isDisabled(v) ? 'disabled_lattice ' : ''
    }

    useEffect(() => {
        console.log(arr, 'arr');
    }, [arr])


    const content = (v) => {
        return <div>
            <span>{v}</span>
        </div>
    }

    return (
        <div>
            <div className='lattice_box'>
                {
                    list.map((v, i) => {
                        return <Popover placement="bottom" content={content(v)}><div
                            onClick={() => { !isDisabled(v) && latticeClick(v + 1) }}
                            key={i} className={getDisabledClassName(v) + "lattice" + getClassName(v)}
                        >
                            {v + 1}
                        </div></Popover>
                    })
                }
                <div style={{ clear: 'both' }}></div>
                <style jsx>
                    {`
                    .lattice_box{
                        width: 440px;
                    }
                   .lattice{
                        cursor: pointer;
                        float: left;
                        display: block;
                        width: 29px;
                        height: 29px;
                        margin: 0 auto;
                        padding: 0;
                        color: rgba(0,0,0,.65);
                        line-height: 29px;
                        text-align: center;
                        background: 0 0;
                        border: 1px solid transparent;
                        border-radius: 2px;
                        -webkit-transition: background .3s ease;
                        transition: background .3s ease;
                   }
                   .lattice:hover{
                        background: #e6f7ff;
                   }
                   .on{
                        color: #1890ff;
                        font-weight: 700;
                        border-color: #1890ff;
                        background: #bae7ff;
                   }
                   .disabled_lattice{
                        color: rgba(0,0,0,.25);
                        background: #f5f5f5;
                        border: 1px solid transparent;
                        border-radius: 0;
                        cursor: not-allowed;
                   }
                   .disabled_lattice:hover{
                        background: #f5f5f5;
                   }
                `}
                </style>
            </div>
        </div>
    )
}

export default Range