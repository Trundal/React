function activateTab(tabNumber) {
	$('.sideBar__tab, .sideBar__page').removeClass('active');
	$('.sideBar__tab:nth-child(' + tabNumber + '), .sideBar__page:nth-child(' + tabNumber + ')').addClass('active');
}

$(function() {
	activateTab(1 + Math.floor(Math.random() * $('.sideBar__tab').length));

    $('.sideBar__tab').click(function() {
		activateTab($(this).index()+1);
    });

    $('.sideBar__twirldown').click(function() {
    	if ($(this).hasClass('selected')) {
    		$(this).removeClass('selected').find('.fa-angle-right').css('transform', 'rotate(0deg)');
    		$(this).parents('.sideBar__article').find('.sideBar__copy').slideUp();
    	} else {
    		$(this).addClass('selected').find('.fa-angle-right').css('transform', 'rotate(90deg)');
    		$(this).parents('.sideBar__article').find('.sideBar__copy').slideDown();
    	};

    });
});