var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
	video.load();

	document.querySelector("#play").addEventListener("click", function() {
		video.play()
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	});
	
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause()
	});
	
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.90
		console.log("Speed is now " + video.playbackRate)
	});
	
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.90
		console.log("Speed is now " + video.playbackRate) 
	});
	
	document.querySelector("#skip").addEventListener("click", function() {
		console.log("Location is " + video.currentTime);
		video.currentTime += 10.0
		if(video.currentTime >= video.duration) {
			video.load()
			video.play()
			console.log("Going back to the beginning");
			
		}
	});
	
	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted == true) {
			video.muted = false
			document.getElementById("mute").innerHTML = "mute"
		}
		else {
			video.muted = true;
			document.getElementById("mute").innerHTML = "Unmute"
		}
	});
	
	document.querySelector("#slider").addEventListener("click", function() {
		document.querySelector("#volume").innerHTML = this.value + "%"
		video.volume = this.value / 100
		
	});
	
	document.querySelector("#vintage").addEventListener("click", function() {
		document.getElementById("player1").classList.add("oldSchool");
	});
	
	document.querySelector("#orig").addEventListener("click", function() {
		document.getElementById("player1").classList.remove("oldSchool")
	});
});