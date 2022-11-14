import React, { useEffect, useState } from 'react'
import { Button, Pagination as Ss, Input, Icon, Upload, message, Form } from 'antd'
import _ from 'loadsh'
import GridLayout from "react-grid-layout";
import './styles.less'
import Com from './components/com'
const Xox = (props) => {
    console.log(props,'xoxprops')
    const [state, setstate] = useState(0)

    useEffect(() => {

    }, [])
    return (
        <div className="com">
            <Com/>
        </div>
    )
}

export default Form.create()(Xox)












// export default function Xox() {
//     const [state, setstate] = useState(10)
//     const layout = [
//         { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
//         { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
//         { i: "c", x: 4, y: 0, w: 1, h: 2 },
//     ];
//     useEffect(() => {

//     }, [])
//     return (
//         <div className="com">
//             <GridLayout
//                 className="layout"
//                 layout={layout}
//                 cols={12}
//                 rowHeight={30}
//                 width={1200}
//             >
//                 <div key="a">a</div>
//                 <div key="b">b</div>
//                 <div key="c">c</div>
//             </GridLayout>
//         </div>
//     )
// }
