window.onload = function() {

	console.log('init')

	//window.scrollY
	
	let E_main_nav = document.querySelector("#main_nav")

	window.onscroll = () => {
		if(window.scrollY>100&!E_main_nav.classList.contains("nav_top")){
			E_main_nav.style.transition = 'none';
			E_main_nav.style.top = "-100px"
			E_main_nav.classList.add("nav_top")
			E_main_nav.offsetHeight // Trigger a reflow, flushing the CSS changes
			
			E_main_nav.style.transition = '';
			E_main_nav.style.top = "0"
		
		}
		if(window.scrollY<100&E_main_nav.classList.contains("nav_top")){
			E_main_nav.classList.remove("nav_top")
			E_main_nav.style.transition = 'none';
			E_main_nav.style.top = "-100px"
			E_main_nav.offsetHeight // Trigger a reflow, flushing the CSS changes
			E_main_nav.style.transition = '';
			
			E_main_nav.style.top = "0"
		}
	}

	/*
	window.ontouchstart = (event) => {
    event.preventDefault()
    event.stopPropagation()

		//console.log(event)
	}
	
	let lastTarger = window
	window.onmouseover = (event) => {
		event.preventDefault()
    event.stopPropagation()
		//lastTarger.blur()
		//lastTarger = event.target
		//event.target.focus()
    //event.preventDefault()
		console.log(event)
	}

	let E_main = document.querySelector("#main")
	let E_home = document.querySelector("#home")
	let img = new Image
	img.src = getComputedStyle(E_home)['background-image'].replace(/url\(.|.\)$/ig, "");
	console.log(img,img.src)
	// 2000x1807   2000x86
	function onresize() {
		h1 = E_main.clientHeight
		w1 = E_main.clientWidth
		var imgW = img.width
		var imgH = img.height
		if(imgW > imgH){
			newW = E_home.clientWidth //100;
			newH = imgH / imgW * newW;
			}else{
			newH = E_home.clientHeight //100
			newW = imgW / imgH * newH
		}
		console.log(newW+':'+newH);
		//h2 = E_home.clientHeight
		//w2 = E_home.clientWidth
	}
	window.onresize = onresize()
	*/
}
