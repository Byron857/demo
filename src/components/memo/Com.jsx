import React, { memo } from 'react'

const Com = memo((props) => {
    //父级仅仅传了一个colors给子级 如果不用memo包裹 
    //父级的任意一个setState更新都会 导致执行两次console 也就是说子组件执行了两次
    console.log(props, 'props')
    return (
        <div>Com</div>
    )
})

export default Com