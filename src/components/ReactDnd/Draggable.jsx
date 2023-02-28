import React, { useRef, Fragment } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Icon, Tooltip } from 'antd'
import classNames from 'classnames'

const ItemTypes = {
    CARD: 'list',
}

const Card = ({ item, index, moveCard, onClickEye }) => {

    const { attrID } = item
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            console.log(item, 'item');
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            // Determine mouse position
            const clientOffset = monitor.getClientOffset()

            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag, preview] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { attrID, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    // drag(drop(ref))

    return (
        <Fragment>
            <div ref={preview} style={{ opacity }} data-handler-id={handlerId}>
                <div className={classNames("dragDiv", { 'addBackground': !isDragging, 'clearBackground': isDragging })}>
                    {
                        item.isDrag ? <span
                            ref={drag(drop(ref))}
                            className="column-drag-handle"
                            style={{ float: 'left', padding: '0 10px' }}
                        >&#x2630;
                        </span> :
                            <span
                                style={{ float: 'left', padding: '0 10px' }}
                            >
                                <Icon type="lock" />
                            </span>
                    }
                    {
                        item.isHidden ? <Tooltip title={item.attrName} mouseEnterDelay={1.5}>
                            <span
                                className="onEllipsis"
                                style={{ color: 'rgba(0, 0, 0, 0.25)' }}>
                                {item.attrName}
                            </span></Tooltip> : <Tooltip title={item.attrName} mouseEnterDelay={1.5}>
                            <span
                                className="onEllipsis" >
                                {item.attrName}
                            </span></Tooltip>
                    }
                    {
                        item.isDrag && <Fragment>
                            {
                                item.isHidden ? <span
                                    style={{ float: 'right', padding: '0 10px', cursor: 'pointer' }}
                                    onClick={() => { onClickEye(item.attrID) }}
                                >
                                    <Icon type="eye-invisible" />
                                </span> : <span
                                    style={{ float: 'right', padding: '0 10px', cursor: 'pointer' }}
                                    onClick={() => { onClickEye(item.attrID) }}
                                >
                                    <Icon type="eye" />
                                </span>
                            }
                        </Fragment>
                    }
                </div>
            </div>
            <style jsx>
                {`
                    .opacity-ghost{
                        //box-shadow: 0 2px 8px rgb(0 0 0 / 9%);
                        border-color: transparent;
                        cursor: move;
                    }
                    .column-drag-handle{
                        cursor: move;
                    }
                    .onEllipsis{
                        flex-grow: 1;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        user-select: none;
                    }
                    .dragDiv{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 6px 0;
                        height: 36px;
                        border-radius: 4px;
                        >span{
                            display: inline-block;
                        }
                    }
                    .addBackground:hover{
                        background-color: #1F232914;
                    }
                    .clearBackground:hover{
                        background-color: white;
                    }
                    :global(.CM_DB-popover-inner-content){
                        padding: 0 !important;
                    }
                `}
            </style>
        </Fragment>

    )
}

export default Card
