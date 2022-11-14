import React from 'react'
import 'react-virtualized/styles.css'   //导入样式
import { List, AutoSizer } from 'react-virtualized'; //导入list组件
import { Select } from 'antd'
import './style.less'

const { Option } = Select;

const VirtualList = () => {
    const list = Array(999).fill('mmmm')

    const rowRenderer = (
        key,            // 唯一值
        index,          // 索引号
        isScrolling,    // 是否在滚动中
        isVisible,      // 当前行在list中是否可见
        style,          // 每行的样式对象
    ) => {
        return list.map((item, index) => {
            return (
                <div key={index} style={style}>
                    <div className="item-name">{item} + {index + 1}</div>
                </div>
            )
        })
        // return   list.map((item, index) => {
        //             return (
        //                 <Option value={item}>{item} + {index + 1}</Option>
        //             )
        //         })

    }
    return (
        <div className="city-list">
            <div className="nav-bar">title</div>
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            height={height}
                            rowCount={list.length}
                            rowHeight={50}   //高度是item-name的css高度
                            rowRenderer={rowRenderer}
                            width={width}
                        />
                    )}
                </AutoSizer>
        </div>
    )
}
export default VirtualList
// import React, { useState, useRef } from 'react'
// import { Button, Input, message } from 'antd';
// const { TextArea } = Input;

// const VirtualList = () => {

//     //一键复制功能
//     const copyAccessKey = () => {
//     	//因为我的input框里面还有button 按钮，所以在选择节点的时候，一定要只选择input  
//         var copyDOM = document.querySelector(".aaa");  //需要复制文字的节点
//         copyDOM.select();//选中 
//         var successful = document.execCommand('copy');    // 执行 copy 操作  
//         if(successful){
//             message.success('复制成功！')
//         }else{
//             message.warning('复制失败，请手动复制！')
//         }
//     }

//     return (
//         <div>
//             <TextArea className="aaa" rows={4} />
//             <Button onClick={copyAccessKey}>复制</Button>
//         </div>
//     )
// }

// export default VirtualList


// import React, { PureComponent } from "react";
// import PDF from 'react-pdf-js';

// class AddCourseDetails extends PureComponent {

//     state = { page: 1, current: 1, total: 1 };
//     onDocumentComplete = totalPage => {
//         this.setState({ total: totalPage });
//     };
//     render() {

//         return (
//             <div style={{width: '100%', height: '100%'}}>
//                 <div>
//                     <form>
//                         <table>
//                             <tr>
//                                 <td>标准PPT(全屏)</td>
//                                 <td>
//                                     <PDF
//                                         file="http://it-image.walimaker.com/2019/01/02/dc39e4ea855980d3e46cc9c89c7a852b.pdf"
//                                         onDocumentComplete={this.onDocumentComplete}
//                                         page={this.state.page}></PDF>
//                                 </td>
//                             </tr>
//                         </table>
//                     </form>
//                 </div>
//             </div>
//         )

//     }

// }
// export default AddCourseDetails;


// import React from 'react'
// import { PDFReader } from 'reactjs-pdf-reader'; //有垂直 滚动
// import aa from './xxx.pdf'
// import PDF from 'react-pdf-js';   //没有垂直 滚动

// const sss = () => {
//     return (
//         <div style={{overflow:'scroll',height:600, width:'100%'}}>
//            <PDFReader url={aa}
//             showAllPage
//             // page={1}
//             // getPageNumber={(e,a)=>{
//             //      console.log('getPageNumber',e,a)
//             // }}
//             // onDocumentComplete={(e,aa)=>{
//             //     console.log('onDocumentComplete',e,aa)
//             // }}
//             />
//             {/* <PDF file={aa}/> */}
//         </div>
//     )
// }

// export default sss

// import React, { useState, useRef } from 'react';  //没有垂直 滚动
// import { usePdf } from '@mikecousins/react-pdf';
// import aa from './xxx.pdf'
// const MyPdfViewer = () => {
//     const [page, setPage] = useState(1);
//     const canvasRef = useRef(null);

//     const { pdfDocument, pdfPage } = usePdf({
//         file: aa,
//         page,
//         canvasRef,
//     });

//     return (
//         <div>
//             {!pdfDocument && <span>Loading...</span>}
//             <canvas ref={canvasRef} />
//             {Boolean(pdfDocument && pdfDocument.numPages) && (
//                 <nav>
//                     <ul className="pager">
//                         <li className="previous">
//                             <button disabled={page === 1} onClick={() => setPage(page - 1)}>
//                                 Previous
//                             </button>
//                         </li>
//                         <li className="next">
//                             <button
//                                 disabled={page === pdfDocument.numPages}
//                                 onClick={() => setPage(page + 1)}
//                             >
//                                 Next
//                             </button>
//                         </li>
//                     </ul>
//                 </nav>
//             )}
//         </div>
//     );
// };
// export default MyPdfViewer


