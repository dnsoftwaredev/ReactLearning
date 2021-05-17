import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })

            // when this.setState is call the component App got rerendered => the children
            // components like SeasonDisplay also got rerendered with new data
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
            // everytime componentDidMount is called => App component AND SeasonDisplay component got rerender
        }

        return (
            <Spinner message="Please accept location request"/>
        );
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );      
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

