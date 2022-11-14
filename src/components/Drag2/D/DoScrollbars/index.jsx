import React, { useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
const defaultStyle = {
    height: "100%",
    width: "100%",
    overflowX: "hidden",
};

const DoScrollbars = ({ children, style, onScroll, divRef, ...rest }) => {

    const ref = useRef(null);
    const scrollRef = divRef || ref;

    const newStyle = Object.assign({}, defaultStyle, style);

    const onScrollStop = () => {
        onScroll && onScroll(scrollRef.current.getScrollTop(), scrollRef.current.getClientHeight());
    };

    return (
        window.isIEbrowser ?
            <div style={newStyle} onScroll={onScrollStop}>
                {children}
            </div>
            :
            <Scrollbars
                autoHide={true}
                autoHideTimeout={1000}
                autoHideDuration={200}
                style={newStyle}
                thumbMinSize={0}
                ref={scrollRef}
                onScrollStop={onScrollStop}
                renderTrackHorizontal={({ style, ...props }) => {
                    const finalStyle = {
                        ...style,
                        right: 2,
                        bottom: 2,
                        left: 2,
                        borderRadius: 3,
                    };

                    return newStyle.overflowX === "hidden" ? <div /> : <div style={finalStyle} {...props} />;
                }}
                {...rest}
            >
                {children}
            </Scrollbars>
    );
};


export default DoScrollbars;
