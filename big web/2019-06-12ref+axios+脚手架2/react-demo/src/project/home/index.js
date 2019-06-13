import React,{Component} from 'react';
import { Button, Radio } from 'antd';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            size: 'large'
        }
    }
    handleSizeChange(e) {
        this.setState({ size: e.target.value });
      };
    render(){
        let size = this.state.size;
        return (
        <div>
            <h1>home</h1>

            <Radio.Group value={size} onChange={(e)=>this.handleSizeChange(e)}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>

            <Button type="primary" size={size}>home</Button>
            </div>
        )
    }
}
export default Home;