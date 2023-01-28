import React from 'react'
import Model from './Model'
import { Form, Button } from 'antd'

const FormCom = ({ form }) => {

    const submit = () => {
        form.validateFields().then((data) => {
            console.log(data, 'data')
        })
    }

    return (
        <div>
            <Model form={form} />
            <Button onClick={submit}>submit</Button>
        </div>
    )
}

export default Form.create()(FormCom)