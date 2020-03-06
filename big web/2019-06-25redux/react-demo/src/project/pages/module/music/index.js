import React from 'react'
import { Table } from 'antd';
import fetchJsonp from 'fetch-jsonp';

export default class Music extends React.Component {
    constructor(){
        super();
        this.state = {
            lists:[],
            loading:true  //加载动画
        }
    }
    getList(typeId){
        fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${typeId}&size=100&offset=0`,{
           method:'get'
       }).then(response=> {
          return response.json()
        }).then(data => {
            //console.log(JSON.stringify(data))
            const songArray = []
            let songList = data.song_list;
            for (let i = 0; i < songList.length; i++) {
                songArray.push({
                    title: songList[i].title,
                    author: songList[i].author,
                    country: songList[i].country,
                    language: songList[i].language,
                    publishtime: songList[i].publishtime,
                })
            }
            this.setState({
                lists: songArray,   //获取数据
                loading: false    //隐藏
            });
        }).catch(error=> {
          console.log(error) // 此处是数据请求失败后的处理
        })
    }
    componentDidMount(){
        this.getList('2');
    }

    columns =()=> {
        return  [{
            dataIndex: 'rowIndex',
            title: '序号',
            width: 50,
        },{
            dataIndex: 'title',
            title: '歌曲名',
            width: 200,
        }, {
            dataIndex: 'author',
            title: '歌手',
            width: 200,
        }, {
            dataIndex: 'country',
            title: '发行国家',
            width: 150,
        }, {
            dataIndex: 'language',
            title: '语种',
            width: 200,
        }, {
            dataIndex: 'publishtime',
            title: '发行时间',
            width: 200,
        }];
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
                <Table 
                rowSelection={this.rowSelection()} 
                columns={this.columns()} 
                dataSource={this.state.lists.map((v,i)=>({...v,rowIndex:i+1}))} 
                loading={this.state.loading}
                />
            </div>
        );
    }
}