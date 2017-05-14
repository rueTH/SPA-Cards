"use strict";
console.log("inside main.js");

var $btnCreate = $(".btnCreate");
var $btnDelete = $(".btnDelete");
var $textArea = $(".textArea");
var $newCardElement = $("<textarea></textarea>").addClass("newCardElement");

//now, event listeners for btns

$(".btnCreate").click (function(){
  $newCardElement.insertAfter(".textArea")
});
$("btnDelete").click(function(){
  $textArea.remove(".textArea");
});