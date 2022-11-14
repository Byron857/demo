import React from 'react';
// import vipIcon from '@/assets/vip.svg';

export const selectorConfig = [
    {
        "item_id": 1,
        "account_id": "110",
        "type": 0,
        "item_code": "createTime",
        "remark": "会话创建时间",
        "default_flag": 1,
    },
    {
        "item_id": 2,
        "account_id": "110",
        "type": 0,
        "item_code": "serviceDeskIds",
        "remark": "服务台",
        "default_flag": 1,
    },
    {
        "item_id": 3,
        "account_id": "110",
        "type": 0,
        "item_code": "groupIds",
        "remark": "坐席组",
        "default_flag": 1,
    },
    {
        "item_id": 4,
        "account_id": "110",
        "type": 0,
        "item_code": "attendIds",
        "remark": "坐席",
        "default_flag": 1,
    },
    {
        "item_id": 5,
        "account_id": "110",
        "type": 0,
        "item_code": "customerIds",
        "remark": "咨询用户",
        "default_flag": 1,
    },
    {
        "item_id": 6,
        "account_id": "110",
        "type": 0,
        "item_code": "sessionNum",
        "remark": "对话编号",
        "default_flag": 1,
    },
    {
        "item_id": 7,
        "account_id": "110",
        "type": 0,
        "item_code": "msgContent",
        "remark": "会话内容",
        "default_flag": 1,
    },
    {
        "item_id": 8,
        "account_id": "110",
        "type": 0,
        "item_code": "keepTime",
        "remark": "会话时长",
        "default_flag": 0,
    },
    {
        "item_id": 9,
        "account_id": "110",
        "type": 0,
        "item_code": "firstRt",
        "remark": "首次响应时长",
        "default_flag": 0,
    },
    {
        "item_id": 10,
        "account_id": "110",
        "type": 0,
        "item_code": "msgTotalCount",
        "remark": "消息总数",
        "default_flag": 0,
    },
    {
        "item_id": 11,
        "account_id": "110",
        "type": 0,
        "item_code": "customerMsgCount",
        "remark": "用户消息数",
        "default_flag": 0,
    },
    {
        "item_id": 12,
        "account_id": "110",
        "type": 0,
        "item_code": "attendMsgCount",
        "remark": "坐席消息数",
        "default_flag": 0,
    },
    {
        "item_id": 13,
        "account_id": "110",
        "type": 0,
        "item_code": "queueTime",
        "remark": "排队时长",
        "default_flag": 0,
    },
];
export const columnsConfig = [
    {
        "item_id": 14,
        "account_id": "110",
        "type": 1,
        "item_code": "sessionNum",
        "remark": "对话编号",
        "default_flag": 1,
        "need": true,
    },
    {
        "item_id": 15,
        "account_id": "110",
        "type": 1,
        "item_code": "customerName",
        "remark": "咨询员工",
        "default_flag": 1,
        render: (text, record) => {
            return (
                <>
                    {/* { record.customerVip && <img style={{marginRight: '5px'}} src={vipIcon} alt="" /> } */}
                    {text}
                </>
            );
        },
    },
    {
        "item_id": 16,
        "account_id": "110",
        "type": 1,
        "item_code": "attendName",
        "remark": "受理坐席",
        "default_flag": 1,
        render: (text, record) => {
            return (
                <>
                    {/* { record.attendVip && <img style={{marginRight: '5px'}} src={vipIcon} alt="" /> } */}
                    {text}
                </>
            );
        },
    },
    {
        "item_id": 17,
        "account_id": "110",
        "type": 1,
        "item_code": "groupName",
        "remark": "坐席组",
        "default_flag": 1,
    },
    {
        "item_id": 18,
        "account_id": "110",
        "type": 1,
        "item_code": "serviceDeskName",
        "remark": "服务台",
        "default_flag": 1,
    },
    {
        "item_id": 19,
        "account_id": "110",
        "type": 1,
        "item_code": "createTime",
        "remark": "会话开始时间",
        "default_flag": 1,
    },
    {
        "item_id": 20,
        "account_id": "110",
        "type": 1,
        "item_code": "keepTime",
        "remark": "会话时长",
        "default_flag": 1,
    },
    {
        "item_id": 21,
        "account_id": "110",
        "type": 1,
        "item_code": "endTime",
        "remark": "会话结束时间",
        "default_flag": 0,
    },
    {
        "item_id": 22,
        "account_id": "110",
        "type": 1,
        "item_code": "firstResponseTime",
        "remark": "首次响应时长",
        "default_flag": 0,
    },
    {
        "item_id": 23,
        "account_id": "110",
        "type": 1,
        "item_code": "msgTotalCount",
        "remark": "消息总数",
        "default_flag": 1,
    },
    {
        "item_id": 24,
        "account_id": "110",
        "type": 1,
        "item_code": "customerMsgCount",
        "remark": "用户消息数",
        "default_flag": 0,
    },
    {
        "item_id": 25,
        "account_id": "110",
        "type": 1,
        "item_code": "attendMsgCount",
        "remark": "坐席消息数",
        "default_flag": 0,
    },
    {
        "item_id": 26,
        "account_id": "110",
        "type": 1,
        "item_code": "queueTime",
        "remark": "排队时长",
        "default_flag": 0,
    },
];


