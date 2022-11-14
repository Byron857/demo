import { useEffect, useState } from 'react'

const useDraggable = (ref, changeData) => {
    // 记录鼠标偏移位置
    let mouseOffsetX = 0;
    let mouseOffsetY = 0;
    // 记录是否正在拖拽
    let isDragging = false
    // 记录是否移动
    let isClick = true
    let timestamp = 0
    const handleMouseDown = (e) => {
        e.preventDefault()
        mouseOffsetX = e.clientX - ref.current.offsetLeft  //这是鼠标在小方块里面的x距离
        mouseOffsetY = e.clientY - ref.current.offsetTop
        isDragging = true
        timestamp = Date.now()
    }
    const handleMouseMove = (e) => {
        if (isDragging) {
            // 浮动元素新位置 = 鼠标当前位置 - 鼠标偏移位置
            let moveX = e.clientX - mouseOffsetX
            let moveY = e.clientY - mouseOffsetY
            // 范围限定 moveX < (页面最大宽度 - 浮层宽度)，高度同理
            let maxX = document.documentElement.clientWidth - ref.current.offsetWidth //X的最大偏移量
            let maxY = document.documentElement.clientHeight - ref.current.offsetHeight //Y的最大偏移量

            moveX = Math.min(maxX, Math.max(0, moveX))  //取最大值是防止moveX为负数 取最小值是防止超过最大值 
            moveY = Math.min(maxY, Math.max(0, moveY))

            ref.current.style.left = moveX + 'px'
            ref.current.style.top = moveY + 'px'

            if (Date.now() - timestamp > 200) {
                isClick = false
            }
        }
    }
    const handleMouseUp = (e) => {
        isDragging = false
        if (isClick && ref.current.contains(e.target)) {
            // onClick && onClick()
        } else {
            isClick = true
        }
    }
    useEffect(() => {

        ref.current.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        return () => {

            ref.current.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [ref])

    useEffect(() => {
        if (ref.current) {
            let maxX = document.documentElement.clientWidth - ref.current.offsetWidth
            let maxY = document.documentElement.clientHeight - ref.current.offsetHeight
            ref.current.style.left = maxX + 'px'
            ref.current.style.top = maxY + 'px'
        }
    }, [ref])
}

export default useDraggable