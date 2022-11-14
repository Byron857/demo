import React, { useState } from "react";
import _ from "lodash";
import './style.less'
import RGL, { WidthProvider } from "react-grid-layout";
import { DragOutlined } from '@ant-design/icons';

const GridLayout = WidthProvider(RGL);

const MyFirstGrid = () => {
  // layout应被定义为一个数组，数组中每一项是一个对象，通过配置对象中的相关属性的值来实现相应的布局和设置
  const [layout, setLayout] = useState([
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 0, y: 2, w: 1, h: 2, static: true },
    { i: 'c', x: 0, y: 4, w: 1, h: 2, static: true }
  ])
  // const layout=[
  //   { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
  //   { i: 'b', x: 0, y: 0, w: 1, h: 2 },
  //   { i: 'c', x: 0, y: 0, w: 1, h: 2 }
  // ]
  return (
    <GridLayout
      className="layout"
      isResizable={false}
      layout={layout}
      cols={1}
      rowHeight={15}
      width={50}
      onDrop={(layout, item, e) => {
        console.log(layout, 'layout1');
      }}
      onLayoutChange={(layout) => {
        console.log(layout, 'layout2')
        setLayout(layout)
      }}
      onDragStop={(layout) => {
        console.log(layout, 'layout3')
      }}
    >
      {
        layout.map(v => {
          return <div key={v.i} style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center' }}>
            <DragOutlined style={{ fontSize: 28 }}
              onMouseOver={() => {
                let arr = _.cloneDeep(layout)
                arr = arr.map(v => {
                  console.log(v)
                  return {
                    ...v,
                    static: false
                  }
                })
                setLayout(arr)
              }}
              onMouseOut={() => {
                let arr = _.cloneDeep(layout)
                arr = arr.map(v => {
                  console.log(v)
                  return {
                    ...v,
                    static: true
                  }
                })
                setLayout(arr)
              }}
            /><div style={{ userSelect: 'none' }}>{v.i}</div>
          </div>
        })
      }
    </GridLayout>
  )
}
export default MyFirstGrid