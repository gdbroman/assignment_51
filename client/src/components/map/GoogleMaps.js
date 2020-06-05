import React from "react";
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  Polygon,
  withScriptjs,
} from "react-google-maps";

class Map extends React.Component {
  render() {
    return (
      <GoogleMap
        defaultOptions={{
          disableDefaultUI: this.props.disableUi,
          fullscreenControl: false,
        }}
        google={this.props.google}
        zoom={8}
        style={{ width: "100%" }}
        center={{ lat: +47.49, lng: -122.1413 }}
      >
        {/* <Polygon
          path={this.state.coords}
          draggable={true}
          editable={true}
          fillColor="rgb(124,142,6)"
          options={{
            strokeColor: "#ff2527",
            strokeOpacity: 0.75,
            strokeWeight: 2,
            icons: [
              {
                offset: "0",
                repeat: "20px",
              },
            ],
          }}
        /> */}
        {this.props.content ? this.props.content() : ""}
      </GoogleMap>
    );
  }
}

export default class GoogleMaps extends React.Component {
  render() {
    console.log(this.props);
    const WrappedMap = withScriptjs(withGoogleMap(Map));
    return (
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCoo9OXagY3eG51JU8sicOXcWKio8-MDWs"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className={this.props.containerClass} />}
        mapElement={<div className="map-canvas" style={{ height: `100%` }} />}
        {...this.props}
      ></WrappedMap>
    );
  }
}
