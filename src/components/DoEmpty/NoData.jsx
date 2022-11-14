import React from 'react';
import { langUtil } from "@/lang";

const NoData = () => {

    return <div className='do-empty-nodata'>
        <div className='do-empty-nodata-image'></div>
        <span className='do-empty-nodata-text'>
            {langUtil.getCommonTagMsg('noData')}
        </span>
        {/*language=SCSS*/}
        <style jsx='true'>{`
            .do-empty-nodata{
                width:100%;
                height:100%;
                display:flex;
                align-items:center;
                flex-flow: column;
                justify-content: center;
                .do-empty-nodata-image{
                    width: 115px;
                    height: 106px;
                    background:url(${require('./img/empty.svg')}) no-repeat center/cover;
                }
                .do-empty-nodata-text{
                    margin-top:10px;
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #6E7F90;
                    letter-spacing: 1.53px;
                    text-align: center;
                    line-height: 14px;
                }
            }
        `}</style>
    </div>
}

export default NoData;
