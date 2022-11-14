
import React, { useState, useCallback, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Tag } from 'antd'
import { DragOutlined } from '@ant-design/icons'

 // 样式相关 代码
const grid = 8;
// 垂直样式
// const getItemStyle = (isDragging, draggableStyle) => ({
//     // some basic styles to make the items look a bit nicer
//     userSelect: "none",
//     padding: grid * 2,
//     margin: `0 0 ${grid}px 0`,
//
//     // change background colour if dragging
//     background: isDragging ? "lightgreen" : "grey",
//
//     // styles we need to apply on draggables
//     ...draggableStyle
// });
// const getListStyle = isDraggingOver => ({
//     background: isDraggingOver ? "lightblue" : "lightgrey",
//     padding: grid,
//     width: 250,
// });

// 水平样式
const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // padding: grid * 2,
    margin: `0 ${grid}px 0 0`,

    
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
    cursor:  'grab',

});
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'flex',
    padding: grid,
    overflow: 'auto',
});

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {id: 'H1', content: 'H1'},
                {id: 'H2', content: 'H2'},
                {id: 'H3', content: 'H3'},
                {id: 'H4', content: 'H4'},
                {id: 'H5', content: 'H5'},
                {id: 'H6', content: 'H6'},
            ]
        };
    }

    // a little function to help us with reordering the result
    reOrder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    onDragEnd = (result) => {
        console.log(result,'result');
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = this.reOrder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            items
        },()=>{console.log(items,'items')});
    }

    render () {
        return (
            <div className="App">
                
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                {...provided.droppableProps}
                            >
                                {this.state.items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <Tag
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        // provided.draggableProps.style
                                                        // {padding:'auto',background:'auto',width:50}
                                                    )}
                                                > <DragOutlined/>{item.content}</Tag>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        );
    }
}

export default App;