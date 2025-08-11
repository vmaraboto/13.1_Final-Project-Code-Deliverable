// function to toggle the dropdown menu
function dropdown(){
    // shortcut to the dropdown element
    document.getElementById("dropdown").classList.toggle("show");
}

// function to close the dropdown if clicked outside of it
window.onclick = function(event){
    if(!event.target.matches('.dropBtn')){
        let dropdowns = document.getElementsByClassName("dropdownContent");
        for(let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

// array containing the photos for the slide show
let arrPhoto = [
    "./images/photo19.JPG",
    "./images/photo22.JPG",
    "./images/photo26.JPG",
    "./images/photo51.JPG",
    "./images/photo52.JPG",
    "./images/photo53.JPG"
];

// array containing the information for each photo for the slide show
let arrInfo = [
    "Collection: Valentine's Day",
    "Collection: Valentine's Day",
    "Collection: Valentine's Day",
    "Collection: Graduation",
    "Collection: Graduation",
    "Collection: Graduation"
];

// variable to track the current photo being displayed
let currentPhoto = 0;

// function to display the photo
function displayPhoto(photoLocation){
    // shortcut to the image element
    let photoElement = document.getElementById("imgPhoto");
    // set the source of the image element to the current photo
    photoElement.src = arrPhoto[photoLocation];
}

// function to display the information
function displayInfo(photoLocation){
    // shortcut to the info element
    let infoElement = document.getElementById("info");
    // set the text content of the info element to the current photo information
    infoElement.textContent = arrInfo[photoLocation];
}

// function to go to the previous photo
function previous(){
    // decrease the current photo number
    currentPhoto = currentPhoto - 1;

    // if the current photo number is less than 0, wrap around to the last photo
    if(currentPhoto < 0){
        // reset current photo to the last photo in the array
        currentPhoto = arrPhoto.length - 1;
        // reset current photo to the last info in the array
        currentPhoto = arrInfo.length - 1;
    }

    // display the current photo and information
    displayPhoto(currentPhoto);
    displayInfo(currentPhoto);
}

// function to go to the next photo
function next(){
    // increase the current photo number
    currentPhoto = currentPhoto + 1;

    // if the current photo number exceeds the length of the array, wrap around to the first photo
    if(currentPhoto == arrPhoto.length && currentPhoto == arrInfo.length){
        // reset current photo to the first photo in the array
        currentPhoto = 0;
        // reset current photo to the first info in the array
        currentPhoto = 0;
    }

    // display the current photo and information
    displayPhoto(currentPhoto);
    displayInfo(currentPhoto);
}

// initial display of the first photo and information
displayPhoto(currentPhoto);
displayInfo(currentPhoto);

// function to add photos to the gallery
function addPhotos() {
    // shortcut to the photo grid
    let photoGrid = document.getElementById("photos");
    // loop to create and add photos to the grid
    for (let i = 0; i < 53; i++) {
        // create an image element for each photo
        let photoImg = document.createElement("img");
        // set the source of the image to the correct photo
        photoImg.src = "./images/photo" + (i + 1) + ".JPG";
        // add a class to the image for styling
        photoImg.className = "galleryPhoto";
        // append the image to the photo grid
        photoGrid.appendChild(photoImg);
    }
}

// function to enable full-size viewing of photos in the gallery selected by the user
function fullSize() {
    // add click event listener to each photo in the gallery
    document.querySelectorAll('.gallery-photo').forEach(img => {
        // when the photo is clicked, go full view
        img.onclick = function() {
            // create a full-screen div to display the photo
            let full = document.createElement('div');
            // set position styling for the full-screen div
            full.style.position = 'fixed';
            // set top styling to 0 to cover the entire viewport
            full.style.top = 0;
            // set left styling to 0 to cover the entire viewport
            full.style.left = 0;
            // set width styling to 100% of the viewport width
            full.style.width = '100vw';
            // set height styling to 100% of the viewport height
            full.style.height = '100vh';
            // set bkackground color styling to slightly transparent black
            full.style.background = 'rgba(0,0,0,0.9)';
            // set display styling to flex to center the image
            full.style.display = 'flex';
            // set justify content styling to center the image horizontally
            full.style.justifyContent = 'center';
            // set align items styling to center the image vertically
            full.style.alignItems = 'center';
            // set z-index styling to ensure the full-screen div is on top
            full.style.zIndex = 9999;

            // create an image element to display the full-size photo
            let fullImg = document.createElement('img');
            // set the source of the full-size image to the clicked photo
            fullImg.src = img.src;
            // set max-width styling to 90% of the viewport width
            fullImg.style.maxWidth = '90vw';
            // set max-height styling to 90% of the viewport height
            fullImg.style.maxHeight = '90vh';
            // set border styling to 4px solid white for the full-size image
            fullImg.style.border = '4px solid white';

            // append the full-size image to the full-screen div
            full.appendChild(fullImg);

            // add click event listener to the full-screen div to close it when clicked
            full.onclick = function() {
                // remove the full-screen div from the document body
                document.body.removeChild(full);
            };

            // append the full-screen div to the document body to display it
            document.body.appendChild(full);
        };
    });
}