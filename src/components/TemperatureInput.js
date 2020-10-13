import React from "react";

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
};

export default class TemperatureInput extends React.Component {
    handleChange = e => {
        this.props.onTemperatureChange(e.target.value);
    };

    render() {
        return (
            <>
                <legend>
                    Enter temperature in {scaleNames[this.props.scale]}:
                    <br />
                    <input
                        value={this.props.temperature}
                        onChange={this.handleChange}
                    />
                </legend>
            </>
        );
    }
}
