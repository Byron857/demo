import { Modal, Button } from 'antd';
import React, { useState,Fragment } from 'react'
export default function Modals(){
  const [loading, setloading] = useState(false)
  const [visible, setvisible] = useState(false)
  const showModal = () => {
    setvisible(true)
  };

  const handleOk = () => {
    setloading(true)
    setTimeout(() => {
      setvisible(false)
      setloading(false)
    }, 2000);
  };

  const handleCancel = () => {
    setvisible(false)
  };

    return (
      <div>
        <Button type="primary" onClick={showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={<Fragment>
            <Button key="back" onClick={handleCancel}>
              取消
            </Button>
            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
              确定
            </Button>
          </Fragment>}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
}