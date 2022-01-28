$(() => {
    console.log( "html is done loading, page ready!" );
    $('#Drop_menu_icon').click(function(){
		$('.DropDownMenu').toggleClass('show')
	});
 
// get nav
  // const myNav = document.getElementById("header")
  // // get offset position of nav
  // const sticky = myNav.offsetTop

  // function stickyNav() {
  //   if (window.pageYOffset >= sticky) {
  //     myNav.classList.add("sticky")
  //   } else {
  //     myNav.classList.remove("sticky");
  //   }
  // }

  // window.onscroll = stickyNav()
  
});