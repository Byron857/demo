/**
 * Created by chencheng on 17-9-13.
 */
import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import './style.less'
export default function BoxSpin({ style, spinProps}) {
    return (
        <div style={style} className="box-spin">
            <Spin {...spinProps} />

            {/*language=SCSS*/}
            <style jsx='true'>{`
                .box-spin {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    min-height: 200px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

BoxSpin.propTypes = {
    style: PropTypes.object,
    spinProps: PropTypes.object
};

BoxSpin.defaultProps = {
    style: {},
    spinProps: {}
}
