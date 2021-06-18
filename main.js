jQuery( document ).ready(function(){
jQuery('#writeInput').keyup(function(){
  //if Your accuracy isn't equal to 0(start point) or 100
  if(parseFloat(jQuery('#stats').children().eq(0).children().eq(1).text()) != 0.00 && parseFloat(jQuery('#stats').children().eq(0).children().eq(1).text()) != 100.00)
   {
   // Show message
   alert("Your accuracy went under 100%. I'm restarting now ;)");
   // Click restart button
   $('#configurations').children().eq(2).click()
   }
});
};
