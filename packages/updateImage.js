// manipulates Project image element data

function updateBackground(newColor, elementName) {
    /* 
        Will update the background of the selected element by ID
        pass in the hex code as val, elementName as elementName
    */

    var bg = document.getElementById( elementName );
    bg.style.backgroundColor = newColor;
}

function updateIcon(iconVal, elementName) {
    /*
        Will update the icon with a new icon / text with the selected ID
        pass in the text as textVal, elementName as elementName
    */

    
    var iconField = document.getElementById( elementName );

    //background style
    // iconField.style.backgroundImage = `url('fontawesome/solid/${iconVal}.svg')`; 

    //img src change
    // iconField.src=`fontawesome/solid/${iconVal}.svg`;

    //i class change
    iconField.className = `fas fa-${iconVal}`;
}

function updateText(textVal, elementName) {
    /*
        Will update the header text for the image in for the element ID specified
    */
    // console.log(elementName)
    var textField = document.getElementById( elementName );
    textField.innerHTML = textVal ;

}

function resetSvg() {
    var svgElements = document.body.querySelectorAll('svg');
    svgElements.forEach(function(item) {
        item.setAttribute("width", item.getBoundingClientRect().width);
        item.setAttribute("height", item.getBoundingClientRect().height);
        item.style.width = null;
        item.style.height= null;
    });
}


