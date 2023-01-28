import React, { Fragment, forwardRef } from 'react'
import { Form, Input } from 'antd'
//自定义表单控件
const Model = ({ form }) => {
    return (
        <>
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
                <Form.Item label={'业务线名称'} name="groupName" >
                    {
                        form.getFieldDecorator('groupName', {
                        })(<Input placeholder={'请输入业务线名称'} style={{ width: 200 }} />)
                    }
                </Form.Item>
                <Form.Item label={'groupName2'} name="groupName2" >
                    {
                        form.getFieldDecorator('groupName2', {
                        })(<InputCom />)
                    }
                </Form.Item>
            </Form>
        </>
    )
}

const InputCom = forwardRef(({ value, onChange, ...props }, ref) => {
    console.log(value, onChange, props, 'value, onChange, ...props');
    return (
        <Fragment>
            <Input value={value} onChange={onChange} />
            <Input value={value} onChange={onChange} />
        </Fragment>
    )
})

export default Model