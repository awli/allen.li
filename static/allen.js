function registerAnalytics() {
	// Google Analytics Code from Google
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-46113915-1', 'allen.li');
	ga('require', 'linkid', 'linkid.js');
	ga('require', 'displayfeatures');
	ga('send', 'pageview');
	// End Google's Stuff


	// Register event handlers
	$('.btn').click( function() {
		console.log("button click event found");
		id = $(this).attr('id');
		ga('send', 'event', 'button', 'click', id);
	});
	$('.tc').click( function() {
		console.log("button click event found");
		id = $(this).attr('id');
		ga('send', 'event', 'button', 'click', id);
	});
}

$( document ).ready(function() {
	registerAnalytics();
});
