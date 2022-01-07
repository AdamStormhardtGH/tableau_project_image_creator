// contains all 
// content for downloading images from html2canvass

//setup hero button listener
// setUpDownloadAsImage("project_template_hero_img","hero_img_download","hero_image");
//setup child button listener
// setUpDownloadAsImage("project_template_child_img","child_img_download",'child_image');


function setUpDownloadAsImage(elementToCaptureId,buttonElementId,download_filename) {

    //select the button
    buttonElement = document.getElementById(buttonElementId);
    console.log(buttonElementId);
    elementToCapture =  document.getElementById(elementToCaptureId);
    console.log(elementToCapture);
    
    buttonElement.addEventListener("click", function() {
      html2canvas(elementToCapture).then(function(canvas) {
        console.log(canvas);
        simulateDownloadImageClick(canvas.toDataURL(), `${download_filename}.png`);
      });
    });
  }

// function downloadAsImage(elementToCaptureId,download_filename)

function simulateDownloadImageClick(uri, filename) {
    /*
        Will simulate the download link by creating a clickable link 
    */
    var downloadLinkUrl = document.createElement('a');
    if (typeof downloadLinkUrl.download !== 'string') {
      window.open(uri);
    } else {
        downloadLinkUrl.href = uri;
        downloadLinkUrl.download = filename;
        accountForFirefox(clickLink, downloadLinkUrl);
    }
  }


function clickLink(downloadLink) {
    downloadLink.click();
  }
  
function accountForFirefox(click) { 
    // wrapper function
    let linkUrl = arguments[1];
    document.body.appendChild(linkUrl);
    click(linkUrl);
    document.body.removeChild(linkUrl);
}