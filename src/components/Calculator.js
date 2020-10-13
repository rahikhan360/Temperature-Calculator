import React from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

const toCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

const toFahrenheit = celsius => (celsius * 9) / 5 + 32;

const tryConvert = (temperature, convert) => {
    if (Number.isNaN(parseFloat(temperature))) return "";
    const rounded = Math.round(convert(parseFloat(temperature)) * 1000) / 1000;
    return rounded.toString();
};

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: "",
            scale: "c",
        };
    }

    handleCelsiusChange = temperature => {
        this.setState({
            scale: "c",
            temperature,
        });
    };

    handleFahrenheitChange = temperature => {
        this.setState({
            scale: "f",
            temperature,
        });
    };

    render() {
        const celsius =
            this.state.scale === "f"
                ? tryConvert(this.state.temperature, toCelsius)
                : this.state.temperature;

        const fahrenheit =
            this.state.scale === "c"
                ? tryConvert(this.state.temperature, toFahrenheit)
                : this.state.temperature;

        return (
            <>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />

                <BoilingVerdict celsius={parseFloat(celsius)} />
            </>
        );
    }
}
