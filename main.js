$(() => {
    console.log( "html is done loading, page ready!" );
    $('#Drop_menu_icon').click(function(){
		$('#Drop_menu_icon').toggleClass('expand');
	});
});