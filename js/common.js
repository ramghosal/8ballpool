var base_url = window.location.origin;

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return decodeURI(results[1]) || 0;
    }
}

function getPageName(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    var filename = filenameWithExtension.split(".")[0]; // <-- added this line
    return filename;                                    // <-- added this line
}



function headerauth_load() {
    $("#header").load(base_url + "/header_loggedin.html");
}
function header_load() {
    $("#header").load(base_url + "/header.html");
}
function footer_load() {
    $("#footer").load(base_url + "/footer.html");
}
