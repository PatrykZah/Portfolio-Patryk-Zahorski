window.onload = function() {

	console.log('init')

	//window.scrollY
	
	let E_main_nav = document.querySelector("#main_nav")

	window.onscroll = nav_top_update
	window.onresize = nav_top_update
	
	function nav_top_update() {
		let is_top = E_main_nav.classList.contains("nav_top")
		if( window.innerWidth<=800 || window.scrollY>=100){
			if( !is_top ){
				E_main_nav.style.transition = 'none';
				E_main_nav.style.top = "-100px"
				E_main_nav.classList.add("nav_top")
				E_main_nav.offsetHeight // Trigger a reflow, flushing the CSS changes
				
				E_main_nav.style.transition = '';
				E_main_nav.style.top = "0"
			}
		}else if( window.innerWidth>800 || window.scrollY<100){
			if( is_top ){
				E_main_nav.classList.remove("nav_top")
				E_main_nav.style.transition = 'none';
				E_main_nav.style.top = "-100px"
				E_main_nav.offsetHeight // Trigger a reflow, flushing the CSS changes
				E_main_nav.style.transition = '';
				
				E_main_nav.style.top = "0"
			}
		}
	}
	
	nav_top_update()
}
