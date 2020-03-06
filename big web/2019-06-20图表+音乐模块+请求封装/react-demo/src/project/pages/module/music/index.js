import React from 'react'
import { Table } from 'antd';
import axios from 'axios';
import {get} from '../../../public/ajax';

export default class Music extends React.Component {
    constructor(){
        super();
        this.state = {
            lists:[]
        }
    }
    getList(){
        // axios({
        //     method:'get',
        //     url:'http://localhost:3333/music_list'
        // }).then(res=>{
        //     console.log(res.data.result);
        //     this.setState({lists:res.data.result})
        // })
        get('/music_list').then((res)=>{
        	var aa = [
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
            this.setState({lists:aa})
        })
    }
    componentDidMount(){
        this.getList();
    }

    columns =()=> {
        return [
            {
              title: 'Name',
              dataIndex: 'name',
              render: text => <a href="javascript:;">{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
            },
          ];
    }
    rowSelection =()=> {
        return{
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
              },
              getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
              }),
        }
      };
    render() {     
        return (
            <div>
                <Table rowSelection={this.rowSelection()} columns={this.columns()} dataSource={this.state.lists} />
            </div>
        );
    }
}