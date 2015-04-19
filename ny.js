function getMovieFeed() {
    var movie = $("input").val();
    var movieAPI = "http://www.omdbapi.com/?t=";
    var movieOptions = {
        r: "json",
        t: movie
    }
    function displayMovies(response) {
        movieAPI = movieAPI + movie;
        console.log(movieAPI);
        var parsing = JSON.parse(response);
        console.log(parsing);
        //*------ loop ----*
        var HTML = "<ul>";
        for(var item in parsing){
            HTML += "<li>" + item +":"+parsing[item]+ "</li>"
        }
        HTML += "</ul>";
        //*------ slut loop ----*
        HTML += "<img src="+ parsing.Poster+ ">";
        
        $("#movies").html(HTML);
    }
    $.get(movieAPI, movieOptions, displayMovies)
    $("input").val(""); // gör display tom
};
$("button").click(getMovieFeed);
$(document).keypress(function(event){ //den tangent jag trycker på.
    if(event.charCode === 13)
    {
        getMovieFeed();
    }
})