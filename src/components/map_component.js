import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

export default MapComponent;