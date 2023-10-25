// ChatBot/Iframe
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the icon and iframe elements
     var openIframeIcon = document.getElementById("open-iframe-icon");
     var iframeContainer = document.getElementById("iframe-container");
     var myIframe = document.getElementById("my-iframe");
           
   // Set the source URL of the iframe
     myIframe.src = "https://console.dialogflow.com/api-client/demo/embedded/ae83bf16-d7bb-4b3a-8f4e-bc364068b34d"; // Replace with your desired URL  // Add a click event listener to the icon
     openIframeIcon.addEventListener("click", function () {
    // Toggle the visibility of the iframe container
     if (iframeContainer.style.display === "none") {
     iframeContainer.style.display = "block";
     } else {
     iframeContainer.style.display = "none";
        }
      });
    });
   