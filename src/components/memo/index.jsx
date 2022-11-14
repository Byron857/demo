import React, { useState, useEffect, useRef, forwardRef, memo,useMemo,useCallback } from 'react'

// const Memo = () => {

//     const [colors, setColors] = useState(true);
//     const [count, setCount] = useState(1);
//     const ref = useRef(null)
//     const clickFn = useCallback(() => {
//         console.log(123)
//         let sum = 0;
//         for (let i = 0; i < 1000000000 * count; i++) {
//             sum += i;
//         }
//         return sum;
//     },[count])

//     const [sum, setSum] = useState(0);
//     // useEffect(() => {
//     //     let sum = 0;
//     //     for (let i = 0; i < 1000000000 * count; i++) {
//     //         sum += i;
//     //     }
//     //     setSum(sum)
//     // }, [count])

//     return (
//         <div>
//             <div>获得总数{clickFn()}</div>
//             {/* <div>获得总数{sum}</div> */}
//             <div onClick={() => {
//                 console.log('click123')
//                 setCount(count + 1);
//             }}>
//                 改变count
//             </div>
//             <div onClick={() => {
//                 console.log('click456')
//                 setColors(!colors);
//             }}>
//                 点我换主题{colors == true ? 'red' : 'black'}
//             </div>
//             <Children ref={ref} name={colors} />
//         </div>
//     )
// }

// const Children = memo(forwardRef((props, ref) => {     //通过forwardRef可以拿到父级传来的ref 在参数的第二个
//     console.log(props, ref, '2222222')
//     return (<div>
//         66666
//     </div>)
// }))

// export default Memo


// // import React, { useState, useEffect, useRef, forwardRef, memo } from 'react'
// // import Com from './Com'
// // const Xxx = () => {

// //     const [colors, setColors] = useState(true);
// //     const [sum, setSum] = useState(111);

// //     useEffect(() => {
// //         setSum(222)
// //     }, [])
// //     return (
// //         <div>
// //             <div onClick={() => { setColors(!colors) }}>点我</div>
// //             <Com colors={colors} />
// //         </div>
// //     )
// // }


// // export default Xxx





// import React from 'react'
// 用于记录 getData 调用次数
let count = 0;

function App() {
  const [val, setVal] = useState("");

  function getData() {
    setTimeout(() => {
      setVal("new data " + count);
      count++;
    }, 500);
  }

  return <Child val={val} getData={getData} />;
}

function Child({val, getData}) {
  useEffect(() => {
    getData();
  }, [getData]);

  return <div>{val}</div>;
}

export default App