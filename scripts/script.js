//import * as mdb from 'mdb-ui-kit'; // lib
//import { Input } from 'mdb-ui-kit'; // module

var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('myBlinkingDiv');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

// Get the container element
var btnContainer = document.getElementById("myList");

// Get all buttons with class="nav-item" inside the container
var btns = btnContainer.getElementsByClassName("customItem");

// Store the reference to the currently active button
var activeBtn = document.querySelector(".customItem.active");

// Get the sliding element (pseudo-element) for the background effect
var slidingElement = document.querySelector(".customItem:before");

// Loop through the buttons and add a click event listener
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        // Remove active class from the previously active button
        if (activeBtn) {
            activeBtn.classList.remove("active");
        }

        // Add active class to the clicked button
        this.classList.add("active");

        // Update the active button reference
        activeBtn = this;

        // Slide the background effect to the clicked button
        var offset = this.getBoundingClientRect().left - btnContainer.getBoundingClientRect().left;
        slidingElement.style.left = offset + "px";
    });
}


