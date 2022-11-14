import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import BoxSpin from '../BoxSpin';
import DoEmpty from "../DoEmpty";
import './style.less'
/**
 * 盒子内容
 */
const Box = ({loading, isNoData, className, style, children}) => {
    const defaultStyle = {
        width: "100%",
        height: "100%",
    };
   
    return (
        <Fragment>
            {
                loading
                    ? (
                        <div className={`box ${className}`.trim()} style={Object.assign(defaultStyle, style)}>
                            <BoxSpin />
                        </div>
                    )
                    : (
                        isNoData
                            ? <div style={Object.assign(defaultStyle, style)}><DoEmpty/></div>
                            : children
                    )
            }
        </Fragment>
    );
};

Box.propTypes = {
    loading: PropTypes.bool,
    isNoData: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
};

Box.defaultProps = {
    loading: false,
    isNoData: false,
    className: "",
    style: {},
}

export default Box;
