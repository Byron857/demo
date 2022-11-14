import React, { useState, useEffect } from 'react';
import { Pie, Line} from '@ant-design/charts';
import { data,data2 } from './constant'
const Charts = () => {

    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        legend: {
            position: 'right-top',
            offsetY:20,
        },
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    const [data2, setData2] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/cpu-data.json')
      .then((response) => response.json())
      .then((json) => setData2(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
    const config2 = {
        autoFit: true,
        height: 500,
        data:data2,
        xField: 'time',
        yField: 'cpu',
        seriesField: 'date',
        tooltip: {
          showMarkers: false,
        },
        legend: {
            position: 'bottom',
            offsetY:20,
        },
      };
    return (
        <div>
            <div className="box">
                <div className="left">
                    <Pie {...config} />
                </div>
                <div className="right">
                    <Line {...config2} />
                </div>
            </div>
            <div>
                
            </div>
            <style jsx={true}>
                {`
                    .box{
                        width:1200px;
                        height:350px;
                        display:flex;
                        background:#F4F7FD;
                        .left{
                            padding:10px;
                            width:400px;
                            height:350px;
                            background:#F4F7FD;
                        }
                        .right{
                            padding:10px;
                            width:800px;
                            height:100%;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Charts