import { Component, ViewChild, HostBinding, OnInit } from '@angular/core';
import { FormControl, SelectMultipleControlValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poc-flight-tracking';

  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);
  aircraftSvgImagePath = "m158.56 272.42l136.64 181.32h81.95l-74.01-128.19v-54.34c46.4-1.21 91.78-5.18 136.64-11.91l33.64 57.46h45.55l-14.84-77.81 18.46-11.91-18.46-12.07 14.84-77.81h-45.55l-35.2 57.27c-43.3-6.38-88.68-10.52-133.88-11.73l-1.2-54.17 74.01-128.02-81.95 0.00493-136.64 181.16-120.6 12.42c-2.24 0.34-4.483 1.21-6.381 2.41l-38.818 26.23c-1.3807 0.86-2.2433 2.59-2.2433 4.31 0 1.55 0.8626 3.28 2.2428 4.14l38.818 26.23c1.899 1.2 4.142 2.07 6.384 2.41l120.6 12.6z";

  constructor(private dialog: MatDialog, private overlay: OverlayContainer) { 
  }

  markers = []  as  any;

  // svgMarker = {
  //   path: this.aircraftSvgImagePath,
  //   fillColor: "green",
  //   fillOpacity: 0.6,
  //   strokeWeight: 0,
  //   rotation: 45,
  //   scale: .05,
  //   anchor: new google.maps.Point(0, 20),
  // };

  ngOnInit(): void {
    this.defaultDarkMode();
    this.followFlights();
  }

  myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  mapOptions: google.maps.MapOptions = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    center: { lat: 29.6457998, lng: -95.2772316 },
    zoom: 14,
    styles: this.myStyles
  }

  async followFlights() {
    this.addAircraft(29.64, -95.27, 'NCOLT3', 10);
    await this.sleep(1000);
    this.removeAllAircraft();
    this.addAircraft(29.64, -95.271, 'NCOLT3', 10);
    await this.sleep(1000);
    this.removeAllAircraft();
    this.addAircraft(29.64, -95.272, 'NCOLT3', 10);
    await this.sleep(1000);
    this.removeAllAircraft();
    this.addAircraft(29.64, -95.273, 'NCOLT3', 10);
    await this.sleep(1000);
    this.removeAllAircraft();
    this.addAircraft(29.64, -95.274, 'NCOLT3', 10);
    await this.sleep(1000);
    this.removeAllAircraft();
    this.addAircraft(29.64, -95.275, 'NCOLT3', 10);
    await this.sleep(1000);
    this.removeAllAircraft();
    this.addAircraft(29.64, -95.276, 'NCOLT3', 10);
    await this.sleep(1000);
    //this.addAircraft(29.64, -95.261, 'NCOLT2', 50);
    // this.addAircraft(29.6432, -95.2737, 'N12345', 20);
    // this.addAircraft(29.6433, -95.26124, 'N100X3', 80);
    // this.addAircraft(29.6435, -95.2738, 'N774GX', 120);
    // this.addAircraft(29.6447, -95.26139, 'N400HL', 10);
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  addAircraft(lat: number, long: number, tail: string, rotation: number) {
    var svgMarker = {
      path: this.aircraftSvgImagePath,
      fillColor: "green",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: rotation,
      scale: .05,
      anchor: new google.maps.Point(0, 20),
    };
    this.markers.push({
      position: {
        lat: lat,
        lng: long,
      },
      label: {
        color: 'blue',
        text: tail,
      },
      map: this.map,
      title: 'Marker title ' + (this.markers.length + 1),
      options: {
        icon: svgMarker
      },
    });
     // Push marker to markers array
  }

  removeAllAircraft() {
    for (var i=0; i<this.markers.length; i++) {
      this.markers[i].map = null;
    }
    this.markers = null;
    this.markers = [];
  }


  /*  Default to Dark mode */

  defaultDarkMode() {
  this.toggleControl.valueChanges.subscribe((darkMode) => {
    const darkClassName = 'darkMode';
    this.className = darkMode ? darkClassName : '';
    if (darkMode) {
      this.overlay.getContainerElement().classList.add(darkClassName);
    } else {
      this.overlay.getContainerElement().classList.remove(darkClassName);
    }
  });




}

}
