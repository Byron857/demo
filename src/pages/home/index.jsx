import React, { Component } from 'react'
import { Button } from 'antd'
export default class Home extends Component {
  render() {
    console.log('Home组件');
    console.log(this.props, 'props');
    return (
      <div className="ww">
        <div className="box">
          <a>222</a>
          <p><a>333</a></p>
        </div>
        Home
        <Button onMouseDown={() => {
          console.log(11112222)
          let a = false || false || true
          console.log(a)
        }}
        >onMouseDown</Button>
        <h1 className="hh11">jsx样式</h1>
        <style jsx={true}>{`
        .hh11{
         background-color:red;
        }
        :global(.box){
          p>a{
            color:red;
          }
          a{
            color:yellow;
          }
        }
        
        `}
        </style>
      </div>
    )
  }
}
