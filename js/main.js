/* ====================================
*  page setup
*
======================================= */
// Hide elements on page
$('h1').hide();       // H1 will fade in
$("#menu p").hide();  // menu buttons will fade in
$('#info-sections div').hide(); // info sections show in response to button clicks

// Fade in H1 and menu buttons
$('h1').fadeIn(1000);
$("#btn-me").fadeIn(1500);
$("#btn-hometown").fadeIn(1500);
$("#btn-hobbies").fadeIn(1500);
$("#btn-family").fadeIn(1500);
$("#btn-thoughts").fadeIn(1500);

/*
$('h1').fadeIn(500, function()  {  // queue buttons after H1 fades in
  $("#btn-me").fadeIn(1500);
  $("#btn-hometown").fadeIn(1000);
  $("#btn-hobbies").fadeIn(500);
  $("#btn-family").fadeIn(1000);
  $("#btn-thoughts").fadeIn(1500);
});*/

// Initalize the menu-unselected class on buttons
$("#menu p").addClass('menu-unselected');     // add class to all buttons

/* ====================================
*  #menu onClick
*
*    Directs action based on menu bar clicks
*
======================================= */
$('#menu')
    .click((e) => {
      if ($(e.target).is('p')) {                           // click was on a button (buttons are p's)
        $("#menu p").removeClass('menu-selected');         // remove class from all buttons
        $("#menu p").addClass('menu-unselected');          // add class to all buttons
        $("#"+e.target.id).removeClass('menu-unselected'); // remove class from clicked button
        $("#"+e.target.id).addClass('menu-selected');      // add class to clicked button
        showInfo(e.target.id.split("-")[1]);               // show the info for the clicked button
      }
    });

/* ====================================
*  function showInfo
*    Displays the text in response to button clickl
*
*    param sButton -- String -- the 2nd word of the button's ID.  The 2nd
*                               word of the btn and div for the info section match.
*
======================================= */
var gsCurrentlyShowing = "";
function showInfo(sButton) {
  if (gsCurrentlyShowing!=="")
    $(gsCurrentlyShowing).slideUp('fast');  // hide the last info box
  var toShow = '#info-'+sButton;
  gsCurrentlyShowing = toShow;
  console.log("show information for: "+toShow);
  $(toShow).slideDown('fast');     // show the selected info box
}
