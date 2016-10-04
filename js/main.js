//Photo Gallery

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
var $previousArrow = $('<div id="previousArrow"><img src="icons/previous.png" alt="previous" /></div>');
var $nextArrow = $('<div id="nextArrow"><img src="icons/next.png" alt="next" /></div>');
var $closeLightbox = $('');

// Lighbox

// Add overlay to the body
$('body').append($overlay);

//Add the image to the overlay
$overlay.append($image);

//Append navigation and close buttons to overlay

$overlay.append($previousArrow);
$overlay.append($nextArrow);
$overlay.append($closeLightbox);

// Get the click event on a link to an image
$('.gallery-img a').click(function(event) {

  //Prevent the link from the default behavior
  event.preventDefault();

  getCurrentImage(this);
  
  //update the overlay with the image inlked in the link


  //show the overlay
  $overlay.fadeIn(1000);

  //Stop the page from scrolling when the lightbox is active
  document.body.style.overflow='hidden';

  //show the camption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

});

//When you click the escape key the overlay disappears
$('body').keydown(function(e){
    if(e.which == 27){
        $overlay.fadeOut(1000);
        document.body.style.overflow='auto';
    }
});


//When one clicks on the the overlay it disappears

$overlay.click(function(event){
  //Hide the overlay
  $overlay.fadeOut(1000);
  //Allow the page to scroll when the lightbox is inactive
    document.body.style.overflow='auto';
});

function getCurrentImage(currentImage) {
    thisImage = currentImage;
    var imageLocation = $(currentImage).attr("href");   // accessing attributes from currentImage to pull the href value 
    $image.attr("src", imageLocation);   //Update overlay with the image linked in the link
}































