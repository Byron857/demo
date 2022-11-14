import React, { useState, useEffect, useRef } from 'react'
// import JSONInput from 'react-json-jsoneditor-ajrm';
// import locale from 'react-json-jsoneditor-ajrm/locale/zh-cn';
import { Button } from 'antd'
import ShowJSONEditor from './ShowJSONEditor'

const JsonEdit = () => {

    const [jsonInfo, setJsonInfo] = useState({})
    const [jsoneditor, setJsoneditor] = useState(null)
    const [jsonError, setJsonError] = useState([])

    const handleError = (error) => {
        console.log(error);
        setJsonError(error)
    }

    const onChange = (value, thisEditor) => {
        setJsonInfo(value)
    }

    return (
        <div>
            {/* <JSONInput
                id='a_unique_id'
                placeholder={{}}
                colors={{
                    background: '#000000',
                    string: "#DAA520" // overrides theme colors with whatever color value you want
                }}
                locale={locale}
                height='350px'
                width='450px'
                theme="light_mitsuketa_tribute"
                onChange={(value) => {
                    console.log(value);
                }}
                waitAfterKeyPress={3600000}
            // modifyErrorText={(err) => {
            //     console.log(err);
            //     return '输入有误'
            // }}
            // error={{
            //     reason: '123',
            //     line: 250
            // }}
            /> */}
            <Button disabled={jsonError.length > 0 ? true : false} onClick={() => {
                if (jsoneditor.getMode() == 'text') {
                    jsoneditor.setMode('view')
                } else {
                    jsoneditor.setMode('text')
                }
            }}>点击</Button>
            <ShowJSONEditor
                initJSON={jsonInfo}
                onError={handleError}
                setJsoneditor={setJsoneditor}
                onChange={onChange}
            />
            <Button onClick={() => { console.log(jsonInfo, 'jsonInfojsonInfo') }}>获取jsontext</Button>
            <style jsx="true">
                {`
                    :global(.jsoneditor-sort, .jsoneditor-transform, .jsoneditor-repair, .jsoneditor-search){
                        display: none;
                    }
                `}
            </style>
        </div>
    )
}



export default JsonEdit