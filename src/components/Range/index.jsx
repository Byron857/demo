import React, { useState } from 'react'
import { Input, Popover, message } from 'antd'

const InputGroup = Input.Group;

const Range = ({ value, onChange, disabledRange }) => {

    const list = [...Array(100).keys()]
    // console.log(list);

    const [valueOne, setValueOne] = useState(() => {
        return value && value[0] || ''
    })
    const [valueTwo, setValueTwo] = useState(() => {
        return value && value[1] || ''
    })
    const [currentInput, setCurrentInput] = useState(1)

    const getClassName = (v) => {
        if (currentInput == 1 && valueOne == v + 1) {
            return ` on`
        } else if (currentInput == 2 && valueTwo == v + 1) {
            return ` on`
        } else {
            return ``
        }
    }

    //点击选择
    const latticeClick = (value) => {
        console.log(value, 'value')
        if (currentInput == 1) {
            if (valueTwo == '') {
                setValueOne(value)
            } else {
                if (value < valueTwo) {
                    setValueOne(value)
                } else {
                    message.warning('起始值不可大于终止值');
                }
            }
            onChange && onChange([value, valueTwo])
        } else {
            if (valueOne == '') {
                setValueTwo(value)
            } else {
                if (value > valueOne) {
                    setValueTwo(value)
                } else {
                    message.warning('终止值不可小于起始值');
                }
            }
            onChange && onChange([valueOne, value])
        }
    }

    const isDisabled = (v) => {
        return disabledRange.includes(v + 1)
    }

    const getDisabledClassName = (v) => {
        return isDisabled(v) ? 'disabled_lattice ' : ''
    }

    const content = (
        <div className='lattice_box'>
            {
                list.map((v, i) => {
                    return <div
                        onClick={() => { !isDisabled(v) && latticeClick(v + 1) }}
                        key={i} className={getDisabledClassName(v) + "lattice" + getClassName(v)}
                    >
                        {v + 1}
                    </div>
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
    );

    return (
        <div>
            <Popover placement="bottomLeft" content={content} trigger="focus">
                <div>
                    <InputGroup compact>
                        <Input style={{ width: 90 }} value={valueOne}
                            onBlur={(e) => {
                                // console.log(e, 'onBlur') 
                            }}
                            onFocus={(e) => {
                                // console.log(e, 'onFocus')
                                setCurrentInput(1)
                            }}
                        />
                        <Input
                            style={{
                                width: 30,
                                borderRight: 'none',
                                borderLeft: 'none',
                                backgroundColor: true ? 'white' : '#f5f5f5',
                                color: true ? 'rgba(0, 0, 0, 0.65)' : 'rgba(0, 0, 0, 0.25)'
                            }}
                            value="-"
                            disabled
                        />
                        <Input value={valueTwo} style={{ width: 90, borderLeft: 'none' }}
                            onBlur={(e) => {
                                // console.log(e, 'onBlur')
                            }}
                            onFocus={(e) => {
                                // console.log(e, 'onFocus')
                                setCurrentInput(2)
                            }}
                        />
                    </InputGroup>
                </div>
            </Popover>
        </div>
    )
}

export default Range