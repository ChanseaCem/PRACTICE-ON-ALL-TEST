class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            value: ""
        };
    }

    onclick() {
        this.setState({
            arr: [...this.state.arr, this.state.value],
            value: ""
        });
    }

    onchange(e) {
        this.setState({
            value: e.target.value
        });
    }
    onliclick(index) {
        var arr = this.state.arr.slice();
        arr.splice(index, 1);
        this.setState({ arr });
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.onchange.bind(this)}
                    />
                    <button onClick={this.onclick.bind(this)}>add</button>
                </div>
                <ul>
                    {this.state.arr.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={this.onliclick.bind(this, index)}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));


