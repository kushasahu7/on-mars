"use strict";

window.cover = window.cover || {};

// Photo

class MarsPhoto {
  constructor() {
    this.solDay = Math.floor((Math.random() * 1000) + 100);
    this.apiKey = "pOgZ3ohjncqYbx6TnjsAWsfBX3benIDqA7dODXhY";
    this.apiUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+
                  this.solDay+ "&camera=FHAZ&api_key=" +this.apiKey;
  }
  fetchPhoto (cb) {
    $.ajax({
      url: this.apiUrl,
      method: "GET",
      success: cb
    });
  }
}