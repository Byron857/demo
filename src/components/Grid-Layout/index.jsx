import React from "react";
import _ from "lodash";
import './style.less'
import RGL, { WidthProvider } from "react-grid-layout";
import { Select } from 'antd'

const GridLayout = WidthProvider(RGL);
const { Option } = Select;

export default class MyFirstGrid extends React.Component {
    render() {
        // layout应被定义为一个数组，数组中每一项是一个对象，通过配置对象中的相关属性的值来实现相应的布局和设置
        const layout = [
            { i: 'a', x: 0, y: 0, w: 1, h: 2 },
            { i: 'b', x: 0, y: 0, w: 2, h: 2 },
            { i: 'c', x: 0, y: 0, w: 3, h: 2 }
        ];
        return (
            <GridLayout
                className="layout"
                isResizable={false}
                layout={layout}
                cols={3}
                rowHeight={15}
                width={200}
                onDrop={(layout, item, e) => {
                    console.log(layout, 'layout1');
                }}
                onLayoutChange={(layout) => {
                    console.log(layout, 'layout2')
                }}
                onDragStop={(layout) => {
                    console.log(layout, 'layout3')
                }}
            >
                <div key="a" style={{ backgroundColor: 'white' }}>a</div>
                <div key="b" style={{ backgroundColor: 'white' }}>b</div>
                <div key="c" style={{ backgroundColor: 'white' }}>c</div>
            </GridLayout>
        )
    }
}