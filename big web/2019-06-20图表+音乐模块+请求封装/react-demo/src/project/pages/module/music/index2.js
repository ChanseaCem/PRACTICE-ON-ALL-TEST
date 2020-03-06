import React from 'react'
import { Table } from 'antd';

export default class Music extends React.Component {
    dataSource=()=>{
        return [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
            {
                key: '3',
                name: '12345',
                age: 18,
                address: '西湖区湖底公园1号',
              },
          ];
    }
    columns =()=> {
        return [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ];
    }
    render() {     
        return (
            <div>
                <Table dataSource={this.dataSource()} columns={this.columns()} />
            </div>
        );
    }
}