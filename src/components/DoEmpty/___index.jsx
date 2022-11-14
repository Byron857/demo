import React, { Fragment } from "react";
import css from 'styled-jsx/css';
import { Empty } from 'antd';
import { langUtil } from '@/lang';

const DoEmpty = () => {

    return (
        <Fragment>
            <Empty
                className={`do-empty`}
                image={require("./img/empty.svg")}
                imageStyle={{}}
                description={
                    <span className='do-empty-text'>
                        {langUtil.getCommonTagMsg("noData")}
                    </span>
                }
            />
            {/*{styles}*/}
            {/*language=SCSS*/}
            <style jsx='true' global>{`
                .do-empty{
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    background-color: #fff;
                    .ant-empty-image{
                        height: 100%;
                        width: 100%;
                        align-items:center;
                    }
                    .ant-empty-image > img{
                        height: 90px;
                        width: 90px;
                    }
                    :global(.ant-empty-description){
                        margin-top:15px;
                    }
                    .do-empty-text{
                        font-family: PingFangSC-Medium;
                        font-size: 12px;
                        color: #828282;
                        
                        letter-spacing: 0;
                        text-align: center;
                        line-height: 24px;
                    }
                }
            `}</style>
        </Fragment>
    )
};

export default DoEmpty;

/**
 * 修正图片的宽高
 * @param width
 * @param height
 * @return {{emptyClassName: string, emptyStyles}}
 */
export const emptyImgStyle = (width = 116, height = 116) => {
    // language=SCSS
    const {className: emptyClassName, styles: emptyStyles} = css.resolve`
        .modify-empty-img{
            :global(.do-empty){
                :global(.ant-empty-image > img){
                    width: ${width}px;
                    height: ${height}px;
                }
            }
        }
    `;

    return {emptyClassName: `${emptyClassName} modify-empty-img`, emptyStyles}
};

