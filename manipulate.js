var full_description = document.getElementsByClassName("project_description");

// Loop through each element in the full_description collection
for (var i = 0; i < full_description.length; i++) {
    // Attach a 'click' event listener to each element
    full_description[i].addEventListener('click', function(event) {
        // Your event handling code goes here
        description=document.getElementById("description")
        description.style.display="inline-block"

        console.log("The full_description element was clicked.");
    });
}
