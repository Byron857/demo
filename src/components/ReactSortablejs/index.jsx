import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";

const BasicFunction = (props) => {

    const [state, setState] = useState([
        { id: 1, name: "shrek" },
        { id: 2, name: "fiona1666" },
        { id: 3, name: "fiona2555" },
        { id: 4, name: "fiona33" },
        { id: 5, name: "fiona444" },
    ]);

    const config = {
        animation: 200,
        delayOnTouchStart: true,
        // delay: 2
        // tag:"div"
    }

    const styleDiv = {
        width: 80,
        height: 40,
        backgroundColor: '#66BB6A',
        lineHeight: '40px'
    }

    useEffect(() => {
        console.log(state, 'state');
    }, [state])

    return (
        <ReactSortable
            {...config}
            list={state}
            // setList={setState}
            setList={(newItems, _, { dragging }) => {
                if (!dragging) {
                    return;
                }
                setState(newItems);
            }}
        // style={{ display: "flex", flexWrap: "wrap" }}
        >
            {
                state.map((item) => (
                    <div key={item.id} style={styleDiv}>{item.name}</div>
                ))
            }
        </ReactSortable>
    );
};

export default BasicFunction