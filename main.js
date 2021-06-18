attempts = 0;
jQuery( document ).ready(function(){
	//Restart on mistake
	jQuery('#writeInput').keyup(function(){
		//if Your accuracy isn't equal to 0(start point) or 100
		if(parseFloat(jQuery('#stats').children().eq(0).children().eq(1).text()) != 0.00 && parseFloat(jQuery('#stats').children().eq(0).children().eq(1).text()) != 100.00)
		{
			//add attemp
			attempts++;
			// Show message
			alert("Your accuracy went under 100%.\nThis was Your " + attempts + ". attempt.\nI'm restarting now ;)");
			// Click restart button
			$('#configurations').children().eq(2).click();
		}
	});
	//Add success message
	var observer = new MutationObserver(function(mutations) {
	    mutations.forEach(function(mutationRecord) {
		if(jQuery('.progress-bar').attr('aria-valuenow') == 0)
		    {
			jQuery("<h2><strong>You've made it in "+attempts+". attempt<br> Congrats <3</strong></h2>").insertAfter($('typing-summary').children().eq(0))
			attempts = 0;
		    }
	    });    
	});
	var target = document.getElementsByClassName('progress-bar')[0]
	observer.observe(target, { attributes : true, attributeFilter : ['aria-valuenow'] });
	
});
