var scaleNames = {
	c: "c",
	f: "f"
}

function toCelsius(fahrenheit) {
	return(fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return(celsius * 9 / 5) + 32;
}

//function tryConvert(temperature, convert) {
//	var tem1 = parseFloat(temperature);
//	if(tem1 == null) {
//		return '';
//	}
//	var input = convert(tem1);
//	var outinput = Math.round(input * 1000) / 1000;
//	return outinput.toString();
//}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if(Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function Tiptxt(boil) {
	if(boil >= 100) {
		return "the water is boil";
	} else {
		return "the water is not boiled";
	}
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.onchange = this.onchange.bind(this);
	}

	onchange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		return(
			<fieldset>
				<legend>Enter temprature in {scaleNames[this.props.ca]}</legend>
					<input value = {this.props.temperature }
					onChange = {this.onchange}
				/>
			</fieldset>
		)
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ca: "c",
			tem: ''
		}
		this.updateStateinC = this.updateStateinC.bind(this);
		this.updateStateinF = this.updateStateinF.bind(this);
	}

	updateStateinC(tem) {
		this.setState({
			ca: "c",
			tem: tem
		});
	}

	updateStateinF(tem) {
		this.setState({
			ca: "f",
			tem: tem
		});
	}

	render() {
		var ca = this.state.ca;
		var temperature = this.state.tem;
		var ctem = ca === "f" ? tryConvert(temperature, toCelsius) : temperature;
		var ftem = ca === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

		return(
			<div>
			<TemperatureInput ca = "c" temperature={ctem} onChange={this.updateStateinC}/>
			<TemperatureInput ca = "f" temperature={ftem} onChange={this.updateStateinF}/>
			<Tiptxt boil={ctem} />
			</div>
		)
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('root')
)