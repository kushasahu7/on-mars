"use strict";

class Cover {
    constructor() {
        this.timeStr = "";
        this.ampm = "AM";
        this.location = "";
        
        this.timeEl = $("#time");
        this.ampmEl = $("#ampm");
        this.city = $("#location");
        this.lat;
		this.lon;
		
		this.photoCtrl = new MarsPhoto();
		//this.weatherCtrl = new
    }
    setTime() {
		// YOUR CODE HERE
		var date = new Date();
        var hours = date.getHours();
        
		if(hours > 11 && hours < 24){
			this.ampm = "PM";
		}
		if(hours > 12){
			hours -= 12;
		}
		var mins = date.getMinutes();
		if(mins < 10){
			var txt = '0' + mins;
			mins = txt; 
		}
		var ret = '';
		ret = ret + hours + ':' + mins;
		this.timeStr = ret;
    }

	updateTime() {
			// YOUR CODE HERE
			this.setTime();
	}

	setPhoto (photosListData) {
		console.log(JSON.stringify(photosListData))
		let photos = photosListData.photos;
		let total = photos.length;
		let randomIndex = Math.floor((Math.random() * total));
		console.log(randomIndex)
		
		let selectedPhoto = photos[randomIndex];
		console.log(selectedPhoto)
		const img = selectedPhoto.img_src;
		this.img = img;
		console.log("done")
	}

	updatePhoto () {
		this.photoCtrl.fetchPhoto(this.setPhoto.bind(this));
		console.log("completed")
	}
	
	start() {
		this.updatePhoto();
		// get location
		if (!navigator.geolocation){
		  throw "Geolocation not supported!";
		}

		function error() {
		  throw "Error occured!";
		};

		navigator.geolocation.getCurrentPosition(function(position) {
		  console.log("EXECUTING");
		  this.lat = position.coords.latitude;
		  this.lon = position.coords.longitude;
		  console.log(this.lat, this.lon);
		  
		}.bind(this), error);
		this.setTime();
		this.render();
	}
	// `render` method
	// This method should "render" the time, quote and weather strings on your page by replacing the text value of your elements with their respective properties.
	// ex. this.timeStr will be rendered on to the screen using this.timeEl.text(this.timeStr);
  render() {
		// YOUR CODE HERE
		this.timeEl.text(this.timeStr);
		//this.greetingEl.text("Good " + this.salutation +", Ying Hang");
		this.ampmEl.text(this.ampm);

		console.log("getting url")
		let urlImage = "url('"+ this.img + "')";
		console.log(urlImage)
		document.body.style.backgroundImage = urlImage; 
		alert(document.body.style.backgroundImage); 
		// this.weatherEl.text(this.weatherStr);
		// this.quoteEl.text(this.quoteStr);
		// this.city.text(this.location);
  }
}

