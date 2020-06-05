import React from "react";
import "./AddGeofence.scss";
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  Polygon,
  withScriptjs,
} from "react-google-maps";
import GoogleMaps from "../../../map/GoogleMaps";
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";

class AddGeofenceMap extends React.Component {
  state = {
    savedPolygon: undefined,
  };

  handlePolygonComplete(polygon) {
    const paths = polygon.getPath().getArray();
    const coords = paths.map((a) => [a.lat(), a.lng()]);

    polygon.setPaths([]);
    this.setDrawingMode(null);
    this.setOptions({ drawingControlOptions: { drawingModes: [] } });

    //this.setState({savedPolygon: coords})
    console.log(coords);
  }
  drawingManager = () => (
    <React.Fragment>
      <DrawingManager
        onPolygonComplete={this.handlePolygonComplete}
        disable={!!this.state.savedPolygon}
        defaultDrawingMode={window.google.maps.drawing.OverlayType.POLYGON}
        defaultOptions={{
          drawingControl: true,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              window.google.maps.drawing.OverlayType.POLYGON,
              window.google.maps.drawing.OverlayType.CIRCLE,
            ],
          },
          polygonOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 15,
          },
        }}
      />
      <button style={{position:"absolute", top:"50%", left:"50%", zIndex:412}}/>
    </React.Fragment>
  );
  render() {
    return (
      <GoogleMaps
        containerClass="add-fence-map-container"
        content={this.drawingManager}
      />
    );
  }
}

export default class AddGeofence extends React.Component {
  render() {
    return (
      <div
        style={{ height: (this.props.active * 100).toString() + "%" }}
        className="add-geofence-container"
      >
        <div className="add-geofence-controls">
          <i className="material-icons" onClick={this.props.toggle}>
            close
          </i>
          <p>Geo-fence area</p>
          <i className="material-icons">done</i>
        </div>
        <AddGeofenceMap />
      </div>
    );
  }
}
// class Ka extends React.Component {
//     initMap = () => {
//         var map = new window.google.maps.Map(document.getElementById('add-fence-map-container'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });

//         var drawingManager = new window.google.maps.drawing.DrawingManager({
//           drawingMode: window.google.maps.drawing.OverlayType.MARKER,
//           drawingControl: true,
//           drawingControlOptions: {
//             position: window.google.maps.ControlPosition.TOP_CENTER,
//             drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
//           },
//           markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
//           circleOptions: {
//             fillColor: '#ffff00',
//             fillOpacity: 1,
//             strokeWeight: 5,
//             clickable: false,
//             editable: true,
//             zIndex: 1
//           }
//         });
//         drawingManager.setMap(map);
//       }
//   }

//   initMap = () => {
//     const google = require("google")
//     var map = new google.maps.Map(document.getElementById('add-fence-map-container'), {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 8
//     });

//     var drawingManager = new window.google.maps.drawing.DrawingManager({
//         drawingMode: google.maps.drawing.OverlayType.MARKER,
//         drawingControl: true,
//         drawingControlOptions: {
//         position: google.maps.ControlPosition.TOP_CENTER,
//         drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
//         },
//         markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
//         circleOptions: {
//         fillColor: '#ffff00',
//         fillOpacity: 1,
//         strokeWeight: 5,
//         clickable: false,
//         editable: true,
//         zIndex: 1
//         }
//     });
//     drawingManager.setMap(map);
//     }

{
  /* <SetFenceMap
googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCoo9OXagY3eG51JU8sicOXcWKio8-MDWs"
loadingElement={<div style={{ height: `100%` }} />}
containerElement={<div style={{ height: `400px` }} />}
mapElement={
  <div
    className="add-fence-map-container"
    style={{ height: `100%` }}
  />
}
/> */
}
