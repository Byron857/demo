import React from 'react';
import { Row, Col } from 'antd';
import classnames from 'classnames';
import arrayMove from 'array-move';
import DoScrollbars from '../DoScrollbars';
import OptionList from './optionList';
import DragList from './dragList';
import styles from './index.less';
import { columnsConfig } from '../config';

const dataList = columnsConfig.map(e => ({ remark: e.remark, itemId: e.item_id, need: e.need }));

// 咨询员工、坐席、坐席组、服务台、会话开始时间、会话时长、会话结束时间、首次响应时长、消息总数、用户消息数、坐席消息数、排队时长。

class OptionDrag extends React.Component {
    constructor(props) {
        super(props);
        const defaultValue = (this.props.defaultValue || []).map(v => dataList.find(e => e.itemId == v));
        this.state = {
            data: [...dataList],
            selected: defaultValue || [], // 选中的数据
        };
    }
    onOptionListChange = (values = []) => {
        const { selected } = this.state;
        if (values.length > selected.length) {
            // antd 默认新添加的在最后一项
            this.addItem(values[values.length - 1]);
        } else {
            // 查找取消了哪一项
            const item = selected.find(e => !values.includes(e.itemId));
            this.deleteItem(item.itemId);
        }
    }
    // 增加一项
    addItem = (id) => {
        const item = dataList.find(item => item.itemId === id);
        const selected = [...this.state.selected, item];
        this.setState({selected});
        this.props.onChange && this.props.onChange(selected);
    }
    // 删除一项
    deleteItem = (id) => {
        const selected = this.state.selected.filter(e => e.itemId !== id);
        this.setState({selected});
        this.props.onChange && this.props.onChange(selected);
    }
    // 移动一项
    removeItem = ({oldIndex, newIndex}) => {
        const selected = arrayMove(this.state.selected, oldIndex, newIndex);
        this.setState({selected});
        this.props.onChange && this.props.onChange(selected);
    }
    // 拖拽组件中删除一项
    onCancel = (id) => {
        this.deleteItem(id);
    }
    // 通过实例获取值
    getValue = () => {
        return this.state.selected;
    }
    render() {
        const { className } = this.props;
        return (
            <div className={classnames(className, styles.optionDrag)}>
                <Row gutter={16} style={{height: '100%'}}>
                    <Col span={12} style={{height: '100%'}}>
                        <DoScrollbars className={styles.optionDrag_list}>
                            <OptionList
                                options={dataList.map(e => ({title: e.remark, value: e.itemId, need: e.need}))}
                                onChange={this.onOptionListChange}
                                checkboxValue={this.state.selected.map(e => e.itemId)}
                            />
                        </DoScrollbars>
                    </Col>
                    <Col span={12} style={{height: '100%'}}>
                        <DoScrollbars className={styles.optionDrag_right}>
                            <DragList
                                options={this.state.selected}
                                onSortEnd={this.removeItem}
                                onCancel={this.onCancel}
                            />
                        </DoScrollbars>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OptionDrag;

