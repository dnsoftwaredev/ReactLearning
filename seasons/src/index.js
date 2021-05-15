import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setState!!
                this.setState({ lat: position.coords.latitude });

                // WE DID NOT
                // this.state.lat = position.coords.latitude
                // this is fucking horrible do not do
                // the only time to use direct assignment is in the beginning => this.state = { lat : null }
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    }


    // React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return (
            <div>Loading!</div>
        );

    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

