import React from "react";
import "./Map.scss";
import { Marker } from 'react-google-maps';
import { Route, Switch } from "react-router-dom";
import GoogleMaps from "../../../map/GoogleMaps";


export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { lat: 47.359423, lng: -122.021071 },
        { lat: 47.2052192687988, lng: -121.988426208496 },
        { lat: 47.6307081, lng: -122.1434325 },
        { lat: 47.3084488, lng: -122.2140121 },
        { lat: 47.5524695, lng: -122.0425407 },
      ],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.lat,
            lng: store.lng,
          }}
          text="My marker"
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <Switch>
        <Route exact path="/location/history">
          <GoogleMaps containerClass="map-container" />
        </Route>
        <Route path="/location">
          <GoogleMaps content={this.displayMarkers} containerClass="map-container" />
        </Route>
      </Switch>
    );
  }
}
