import React, { Fragment } from 'react';
import { Modal, Button } from 'antd';
import OptionDrag from './OptionDrag';

class SetColumn extends React.Component {
    constructor(props) {
        super(props);
        this.selected = props.defaultValue;
        this.state = { visible: false };
        this.dragRef = React.createRef();
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
        const data = this.dragRef.current.getValue && this.dragRef.current.getValue();
        const ids = (data || []).map(e => e.itemId);
        this.props.onOk && this.props.onOk(ids);
    };

    handleCancel = () => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleChange = () => {}

    render() {
        const { className, defaultValue } = this.props;
        return (
            <>
                <Button className={className} icon="unordered-list" onClick={this.showModal} />
                <Modal
                    title="选择列"
                    visible={this.state.visible}
                    // visible={true}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    destroyOnClose={true} // 关闭时销毁子元素
                >
                    <OptionDrag ref={this.dragRef} defaultValue={defaultValue} onChange={this.handleChange} />
                </Modal>
            </>
        );
    }
}

export default SetColumn;
