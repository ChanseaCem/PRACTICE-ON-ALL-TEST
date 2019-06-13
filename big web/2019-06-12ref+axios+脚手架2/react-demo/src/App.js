import React from 'react';
import Home from './project/home/index';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <Home />
      <Button type="primary">Primary</Button>
    </div>
  );
}

export default App;
