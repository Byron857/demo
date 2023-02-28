import React, { useState } from "react";
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
        delay: 2
    }

    const styles = {
        width: 100,
        height: 42,
        border: '1px solid #ccc'
    }

    return (
        <ReactSortable
            {...config}
            list={state} setList={setState}>
            {state.map((item) => (
                <div style={styles} key={item.id}>{item.name}</div>
            ))}
        </ReactSortable>
    );
};

export default BasicFunction