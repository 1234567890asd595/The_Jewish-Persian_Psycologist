function updateHeading(){
    const headingTag = document.getElementById("heading");
    headingTag.innerHTML = " תודה רבה שהורדת את " +  "Thank you for downloading " +  window.sessionStorage.getItem("lastDownload"); 
}
function ThankStartpage(){
    if (window.sessionStorage.getItem("serverOpenThank") !== "yes" || !window.sessionStorage.getItem("serverOpenThank")) {
        window.location.assign("index.html");  
    } else {
    startpage();
    updateHeading(); 
    window.addEventListener('popstate', function (event) {
        window.sessionStorage.setItem('serverOpenThank', 'no');
        
    });
    }
    window.addEventListener('beforeunload', function() {
        sessionStorage.setItem('serverOpenThank', 'not anymore');
    });
}

function startpage(){
    console.log("How's The Website Source Code Lookeres?");
}

function thank_for_download(appName){
    window.sessionStorage.setItem("lastDownload", appName);
    window.sessionStorage.setItem("serverOpenThank", "yes");
    window.location.assign("thankForDownload.html");
}
