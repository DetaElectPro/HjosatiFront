import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
 
declare var google;

@Component({
  selector: 'page-all-museum',
  templateUrl: 'all-museum.html',
})

export class AllMuseumPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  museumList = [];
  public coords: any;
public isActive: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public http: Http) {
    this.museumList = navParams.get('museumList');
    console.log(this.museumList);
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    this.getMarkers();
  }


   
ionViewDidEnter() {
  this.geolocation.getCurrentPosition().then((resp) => {
     this.coords = {
       lat: resp.coords.latitude,
       lng: resp.coords.latitude
    };
    this.isActive = true;
 }).catch((error) => {
    console.log('Error getting location', error);
  });
}

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(28.6117993, 77.2194934);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkers() {
    for (let _i = 0; _i < this.museumList.length; _i++) {
      if(_i > 0 )
       this.addMarkersToMap(this.museumList[_i]);
    }
  }

  addMarkersToMap(museum) {
      var position = new google.maps.LatLng(museum.latitude, museum.longitude);
      var museumMarker = new google.maps.Marker({position: position, title: museum.name});
      museumMarker.setMap(this.map);
  }

}