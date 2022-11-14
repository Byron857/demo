import React from 'react';
import SetColumn from './SetColumn';

// 默认展示的值
const defaultValue = [14, 15, 16, 17, 18, 19, 20, 21];

function D() {
    return (
        <div>
            <SetColumn defaultValue={defaultValue} onOk={(v) => console.log(v)} />
        </div>
    );
}

export default D;
