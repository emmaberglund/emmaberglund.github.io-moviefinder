function getMovieFeed() {
    

    var movie = $("input").val(); // det jag skriver i sökrutan hamnar i variabeln movie
    var movieAPI = "http://www.omdbapi.com/?t=";
    
   
    
    var movieOptions = {
        r: "json",
        t: movie
    }
    
   

    function displayMovies(response) {



      
        var parsing = JSON.parse(response);
        console.log(parsing);
        
        var movieList = "<ul id='ul'>";


        // Om sökningen blir fel - ta bort bilden. Och visa error-meddelandet (skriv över det andra)

        if (parsing.Poster === undefined)
        {
            delete parsing.Poster;
            parsing.Error = "Sorry, something went wrong. Try again.";


        }

        // annars visa bilden som en bild på sidan
        else
        {
            movieList += "<img src=" + parsing.Poster + "alt='movie poster'>";

        }



        // ta bort de delar i objektet som vi inte vill ska vara med på sidan
        delete parsing.Poster;
        delete parsing.Type;
        delete parsing.Response;
        delete parsing.Metascore;



        for (var item in parsing) // en for in loop som går igenom alla keys i objektet (utom de saom tagits bort
        {
            $("parsing.Poster").hide();
            movieList += "<li>" + "<span class='nyckelord'>" + item + "</span>" + ": " + parsing[item] + "</li>";



        }

         //nu har alla keys och values lagts till i en varsin li i ul:en. Sen stängs ul:en

        movieList += "</ul>";


        
        
        
        $("#movies").html(movieList); //lägger till mövieList i diven #movies i htmlen



    }
    
    

    $.get(movieAPI, movieOptions, displayMovies); // skickar en get-request.


    $("input").val(""); //tömmer inputfältet



    
         
};
    

// För att kunna trycka på enter //

    $("button").click(getMovieFeed);
    
    $(document).keypress(function(event){ //den tangent jag trycker på.
        if(event.charCode === 13)
        {
            getMovieFeed();
        
        }
    
    })
     
     
  