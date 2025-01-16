let counter = 1;
setInterval(function () {
	document.getElementById("radio" + counter).checked = true;
	counter++;
	if (counter > 4) {
		counter = 1;
	}
}, 4000);
// user slider
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	loop: true,
	breakpoints: {
	  480: {
		slidesPerView: 1
	  },
	  767: {
		slidesPerView: 2
	  },
	  1024: {
		slidesPerView: 3
	  },
	  1366: {
		slidesPerView: 3
	  }
	},
	spaceBetween: 20,
	autoplay: true
  });

  // services slider
var swiper = new Swiper(".mySlider", {
	slidesPerView: 1,
	loop: true,
	breakpoints: {
	  480: {
		slidesPerView: 1
	  },
	  767: {
		slidesPerView: 2
	  },
	  1024: {
		slidesPerView: 2
	  },
	  1366: {
		slidesPerView: 2
	  }
	},
	spaceBetween: 20,
	autoplay: true
  });

  //image thumbnail
  function playVideo() {
    const thumbnail = document.querySelector('.video-thumbnail');
    const playButton = document.querySelector('.play-button');
    const iframe = document.querySelector('.video-iframe');
    
    // Hide thumbnail and play button, show iframe
    thumbnail.style.display = 'none';
    playButton.style.display = 'none';
    iframe.style.display = 'block';
  }

  // Add event listener to the container
  document.querySelector('.video-container').addEventListener('click', playVideo);



//   personal care

var swiper = new Swiper(".serviceSlider", {
	slidesPerView: 1,                  // Service slider
	loop: true,
	breakpoints: { 
	  480: {
		slidesPerView: 1
	  },
	  767: {
		slidesPerView: 2
	  },
	  1024: {
		slidesPerView: 2
	  },
	  1366: {
		slidesPerView: 2
	  }
	},
	spaceBetween: 20,
	autoplay: true
  });

  

