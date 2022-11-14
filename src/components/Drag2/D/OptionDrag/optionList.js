import React from 'react';
import classnames from 'classnames';
import { Checkbox } from 'antd';
import styles from './optionList.less';

const { Group } = Checkbox;

function getItemDoms(options = []) {
    return options.map(e => (
        <div key={e.key == null ? e.value : e.key} className={styles.optionList_item}>
            <Checkbox value={e.value} disabled={e.need}>{e.title}</Checkbox>
        </div>
    ));
}

function OptionList(props) {
    return (
        <div className={classnames(props.className, styles.optionList)}>
            <Group onChange={props.onChange} value={props.checkboxValue}>
                { getItemDoms(props.options) }
            </Group>
        </div>
    );
}


export default OptionList;

