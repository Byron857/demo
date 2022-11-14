import React, { Fragment } from "react";
import css from 'styled-jsx/css';
import { Empty } from 'antd';
import search from './img/empty.svg';
import component from './img/nodata1.svg';
// import list from './img/nodata2.svg';
import list from './img/empty-green.png';
import emptyGreen from './img/empty-green.png';
// import './style.less'
const DoEmpty = ({ type = 'list' }) => {

    const imgType = {
        search,
        component,
        list,
        emptyGreen
    }
    return (
        <Fragment>
            <Empty
                className={`do-empty`}
                image={(imgType[type] || imgType.emptyGreen)}
                imageStyle={{}}
                // prefixCls="CM_DB-empty"
                description={
                    <span className='do-empty-text'>
                        空空如也，请尽快补充内容
                        {/*{langUtil.getCommonTagMsg("noData")}*/}
                    </span>
                }
            />
        </Fragment>
    )
};

export default DoEmpty;

/**
//  * 修正图片的宽高
//  * @param width
//  * @param height
//  * @return {{emptyClassName: string, emptyStyles}}
//  */
// export const emptyImgStyle = (width = 116, height = 116) => {
//     // language=SCSS
//     const { className: emptyClassName, styles: emptyStyles } = css.resolve`
//         .modify-empty-img{
//             :global(.do-empty){
//                 :global(.ant-empty-image > img){
//                     width: ${width}px;
//                     height: ${height}px;
//                 }
//             }
//         }
//     `;

//     return { emptyClassName: `${emptyClassName} modify-empty-img`, emptyStyles }
// };

