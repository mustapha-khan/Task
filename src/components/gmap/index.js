
import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import MarkerPoint from './marker';

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyArnjTylj_aFkWjP1vurA-ibw37ldJ-lX4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div />,
    containerElement: <div style={{ height: `100%`, width: `80%`, position: 'absolute' }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),

  withScriptjs,
  withGoogleMap
)((props) => {
  console.log(props);
  return <GoogleMap
    center={props.markerLatLng}
    zoom={props.zoom}
    >
      <MarkerPoint
        marker={props.markerLatLng}
      />
  </GoogleMap>
})

export default MapComponent;