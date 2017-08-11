function scrollToFeatures() {
    var features = document.getElementById("features");
    features.scrollIntoView(true);
}

$("form").submit(function(){
    var str = $(this).serialize();
    $.post('onePlace.php', str, function(result){
        var message = result.substring(1);
        document.getElementById("emailResult").innerHTML = message;
        // Successfully saved
        if (result.charAt(0) === "1") {
            var form = document.getElementById("signupForm");
            form.setAttribute("style", "display: none;");
        }
    });
    return(false);
});

function exploreClick() {
    var nextFocusElm = document.getElementById("email");
    nextFocusElm.focus();
    window.scrollTo(0,document.body.scrollHeight);
}
