
import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import PropTypes from 'prop-types';

class MarkerPoint extends Component {
    render() {
        
        return (
            <Marker
                position={this.props.marker}
                title={`${this.props.marker.lat} | ${this.props.marker.lng}`}>                   
                    <InfoWindow>
                        <div>
                            {`${this.props.marker.lat} | ${this.props.marker.lng}`}
                        </div>
                    </InfoWindow>
            </Marker>
        );
    }
}

MarkerPoint.propTypes = {
    marker: PropTypes.object,
}

MarkerPoint.defaultProps = {
    marker: {
        lat: 20,
        lng: 20
    },
};


export default MarkerPoint;