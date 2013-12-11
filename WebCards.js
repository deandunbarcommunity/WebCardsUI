
//test variables
var x = 0;


$(function() {
   

  
  
 //begin actual js code for study cards.
 
 //initialize the html for the card
 
 
 //initiate the StudyCards stack object
 var WebCardsStack = new Array();
 var WebCardsCurrentCard = new Object();
 
 //An example of the Json Object that a current card takes up.
 var WebCardsCurrentCard = {title: "card1", front: "This is the front of the page", back: "This is the back of the text"}; 
 
WebCardsStack[0] = WebCardsCurrentCard;
//StudyCards-stack[1] = StudyCards-CurrentCard;
//StudyCards-stack[2] = StudyCards-CurrentCard;


while (x < 10){

var WebCardsCurrentCard = {title: "card1", front: "This is the front of the page for card number" + x, back: "This is the back of the text"}; 
WebCardsStack[x] = WebCardsCurrentCard;

$( ".WebCardsContainer" ).append( ' <p class="WebCardsCard ">' + WebCardsStack[x].front + '</p>' );
x++;
	
}




//end on doc load
});

