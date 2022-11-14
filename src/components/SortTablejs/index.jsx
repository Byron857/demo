import React, { useState, useEffect, Fragment } from "react";
import { ReactSortable } from "react-sortablejs";
import shortid from 'shortid'
import './style.less'

const dfs = (obj, targetId) => {
    if (obj.id === targetId) {
        return obj;
    }
    if (obj.type === "GROUP") {
        for (const item of obj.children) {
            const check = dfs(item, targetId);
            if (check) return check;
        }
    }
    return null;
}

const SortTablejs = () => {
    const getId = () => shortid.generate()
    const [ruleset, setRuleset] = useState({
        id: getId(),
        type: "GROUP",
        children: [
            {
                id: getId(),
                type: "GROUP",
                children: [
                    {
                        id: getId(),
                        type: "ITEM"
                    },
                    {
                        id: getId(),
                        type: "ITEM"
                    },
                    {
                        id: getId(),
                        type: "GROUP",
                        children: [
                            {
                                id: getId(),
                                type: "ITEM"
                            },
                            {
                                id: getId(),
                                type: "ITEM"
                            }
                        ]
                    }
                ]
            },
            {
                id: getId(),
                type: "ITEM"
            }
        ]
    });

    useEffect(() => {
        console.log(ruleset, 'ruleset');
    }, [ruleset])

    return (
        <Fragment>
            <SortableGroup ruleset={ruleset} allData={ruleset} setRuleset={setRuleset} />
        </Fragment>
    )
}

function SortableGroup({ ruleset, level = 0, setRuleset, allData }) {

    const { children, id } = ruleset;

    console.log(children, id, 'children, id123');

    const updateGroupOrder = (id, newList) => {
        const toUpdate = dfs(allData, id);
        console.log(toUpdate, 'toUpdate');
        if (toUpdate?.type === "GROUP") {
            toUpdate.children = newList;
            setRuleset(JSON.parse(JSON.stringify(allData)))
        }
    }

    return (
        <div className={`shared group ${level % 2 === 0 && "bg"}`}>
            <div>GROUP {id}</div>
            <ReactSortable
                list={children}
                setList={(newList) => {
                    updateGroupOrder(id, newList);
                }}
                group="nested"
                animation={150}
                fallbackOnBody={true}
                swapThreshold={0.65}
            >
                {
                    children.map((c) => {
                        let content;
                        if (c.type === "GROUP")
                            content = <SortableGroup ruleset={c} level={level + 1} allData={allData} setRuleset={setRuleset} />;
                        if (c.type === "ITEM")
                            content = (
                                <div className={`shared item ${(level + 1) % 2 === 0 && "bg"}`}>
                                    ITEM {c.id}
                                </div>
                            );
                        return <div key={c.id}>{content}</div>;
                    })
                }
            </ReactSortable>
        </div>
    );
}

export default SortTablejs