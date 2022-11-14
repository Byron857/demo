import React, { useEffect, useState } from 'react'
import _ from 'loadsh'
import shorId from 'shortid'
export default function Lodashs() {
    // _.compact(array)   返回过滤掉假值的新数组
    // _.concat(array, [values]) 返回连接后的新数组。
    //_.difference(array,values) 返回一个过滤值后的新数组
    //_.drop(array, [n=1]) 切片数组 左到右
    //_.dropRight(array, [n=1]) 切片数组 右到左
    //_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }) 过滤
    //_.intersectionWith([arrays], [comparator])  返回一个包含所有传入数组交集元素的新数组。
    //_.pull(array, [values]) 移除数组array中所有和给定值相等的元素
    //_.pullAll(array, values) 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。
    //_.isFunction(value) 如果 value 是一个函数，那么返回 true，否则返回 false。
    //_.isNull(value) 检查 value 是否是 null。
    //_.isString(value) 如果 value 为一个字符串，那么返回 true，否则返回 false
    //_.isArray(value) 如果value是一个数组返回 true，否则返回 false
    // let textCotent=''
    // const [state, setstate] = useState('')
    // useEffect(()=>{
    //    console.log(textCotent)
    //     // let arr=[1,2,0,null,undefined]
    //     // console.log(_.compact(arr))
    //     // // => [1, 2]
    //     // var array = [1];
    //     // var other = _.concat(array, 2, [3], [[4]]);
    //     // console.log(other);
    //     // // => [1, 2, 3, [4]]
    //     // console.log(array);
    //     // // => [1]
    //     //console.log(_.difference([3, 2, 1,1], [1, 2]))

    //     // _.drop([1, 2, 3]);
    //     // // => [2, 3]
    //     // _.drop([1, 2, 3], 2);
    //     // // => [3]
    //     // _.dropRight([1, 2, 3]);
    //     // // => [1, 2]
    //     // _.dropRight([1, 2, 3], 2);
    //     // // => [1]

    //     // var users = [
    //     //     { 'user': 'barney',  'active': true },
    //     //     { 'user': 'fred',    'active': false },
    //     //     { 'user': 'pebbles', 'active': false }
    //     //   ];

    //     //   console.log(_.dropRightWhile(users, function(o) { return !o.active; }))
    //     //   // => objects for ['barney']

    //     //   // The `_.matches` iteratee shorthand.
    //     //   console.log(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }))

    //     // var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    //     // var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    //     // _.intersectionWith(objects, others, _.isEqual);
    //     // // => [{ 'x': 1, 'y': 2 }]

    //     // var array = [1, 2, 3, 1, 2, 3];
    //     // _.pull(array, 2, 3);
    //     // console.log(array);
    //     // // => [1, 1]
    //     // let a=_.uniqueId()
    //     // let b=_.uniqueId()
    //     // console.log(a,b)
    //     // console.log(shorId.generate())

    // },[])
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: fun() }}></div>
            <button onClick={() => { }}>点我</button>
        </div>
    )
}
