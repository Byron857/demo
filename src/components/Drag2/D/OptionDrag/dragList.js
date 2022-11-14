import React from 'react';
import { Icon } from 'antd';
import {SortableContainer, SortableElement, sortableHandle} from 'react-sortable-hoc';

import classnames from 'classnames';
import styles from './dragList.less';

const Handle = sortableHandle(() => (<Icon type="menu" className={styles.dragItemIconHandle} />));

const SortableItem = SortableElement(({item, onCancel}) => (
    <div className={styles.dragItem}>
        {/* <div value={item.value}>{item.title}</div> */}
        {item.remark}
        <Icon 
            className={styles.dragItemIconClose}
            // onMouseDown={onMouseDown}
            onClick={() => onCancel(item.itemId, item)}
            type="close"
            style={item.need ? {display: 'none'} : {}}
        />
        <Handle />
    </div>
));

const SortableList = SortableContainer(({className, items, onCancel}) => {
    // console.log('items:', items);
    return (
        <div className={classnames(className, styles.dragList)}>
            {items.map((item, index) => {
                const key = item.key == null ? item.itemId : item.key;
                return <SortableItem key={`item-${key}`} index={index} item={item} onCancel={onCancel} />;
            })}
        </div>
    );
});


class DragList extends React.Component {
    render() {
        const { className, options, onSortEnd, onCancel } = this.props;
        return (
            <SortableList
                className={className}
                items={options}
                onSortEnd={onSortEnd}
                useDragHandle={true}
                onCancel={onCancel}
            />
        );
    }
}

export default DragList;

