import React from "react";
import "./Map.scss";
import GoogleMaps from "../../../map/GoogleMaps";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const SmallMap = (props) => (
  <div className="fence-map-container">
    <GoogleMaps disableUi={true} containerClass="fence-map-container" />
    <div onClick={props.onClick} className="map-overlay"></div>
  </div>
);

export default SmallMap;

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyCoo9OXagY3eG51JU8sicOXcWKio8-MDWs'),
//     className: "map-container"
// })(SmallMap);
