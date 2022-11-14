import React from 'react'
import { Upload, message, Button, Icon } from 'antd';


const UploadCom = () => {
    const fileChange =(fileEntry)=>{
        let uploadTSuffixype = ['.xls', '.xlsx'];

        const { file } = fileEntry;
        // setFileListData()
        const fileNameList = file.name.split('.');
        const suffix = fileNameList[fileNameList.length - 1]; //获取文件后缀
        //如果文件格式不支持上传，则返回
        console.log(file,'file')
        console.log(fileEntry,'fileEntry')
    }
    
    return (
        <div>
            <Upload multiple={true} customRequest={(fileEntry) => fileChange(fileEntry)}>
                <Button>
                   上传
                </Button>
            </Upload>
        </div>
    )
}

export default UploadCom

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
