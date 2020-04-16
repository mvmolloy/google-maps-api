function fetchGitHubInformation(event) {
    var username =$("#gh-username").val(); 
    if (!username) {
        $("#gh-user-data").html(`<h2>Please Enter a GitHub Username</h2>`);
        return;
    }
    else {
    $("#gh-user-data").html(`<div id="loader"><img src="assets/css/loader.gif" alt="loading..."></img></div>`);
    }
}