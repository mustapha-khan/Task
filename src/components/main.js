import React, { Component } from 'react';
import { withRouter, Route } from "react-router-dom";
import MapComponent from './gmap';
import CoordinateGenerateComponent from './coordinateGenerate';
import '../App.css';

const LAT = parseFloat((Math.random() * 360 - 180).toFixed(8));
const LNG = parseFloat((Math.random() * 180 - 90).toFixed(8));

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latLng: {
        lat: LAT,
        lng: LNG
      },
      defaultZoom: 19
    };
  }


  generateCoordinates = () => {
    this.props.history.push(`/${this.state.latLng.lat}/${this.state.latLng.lng}`);
    this.setState({
      latLng: {
        lat: parseFloat((Math.random() * 360 - 180).toFixed(8)),
        lng: parseFloat((Math.random() * 180 - 90).toFixed(8))
      }
    });
  }  

  render() {

    return (
    <div>
      <div id="side-menu" className="ui vertical menu">
        <CoordinateGenerateComponent
          history={this.props}
          generateCoordinates={this.generateCoordinates}
          latLng={this.state.latLng}
        />        
      </div>

      <div className="App main">
        <div>
          <Route path="/:lat?/:lng?" render={(props) => <MapComponent
              zoom={this.state.defaultZoom}
              markerLatLng={{
                lat: props.match.params.lat ? parseFloat(props.match.params.lat) : 20,
                lng: props.match.params.lat ? parseFloat(props.match.params.lng) : 20
              }}
            />
          } />
        </div>
      </div>
    </div>);
  }
}

export default withRouter(Main);
