var movieList = $("movieList");
var btnNowPlaying = $("btnNowPlaying");
var btnComingSoon = $("btnComingSoon");
var btnAZ = $("btnAZ");
var url = "http://api.kendomobilebook.com/api/Movies/GetMovieList/?listType="
var listType = 0;
var activeList = "";
var theaterList = $("theaterList");
$(document).ready(function () {
    function displayMovieList(listType) {
        if (listType != activeList) {
            activeList = listType;
            //   $(window).load(function () {
            $("#loader").show();

            //$("loader").show();
            $.getJSON(url + listType, function (htmlData) {
                renderHTML(htmlData);

                $("#loader").hide();
                // }
                // });
            });
        }

    };

    $("#btnNowPlaying").click(function () {
        $("#btnNowPlaying").css({ 'background-color': 'orange' });
        $("#btnComingSoon").css({ 'background-color': 'gray' });
        $("#btnAZ").css({ 'background-color': 'gray' });
        displayMovieList(0);
    });
    $("#btnComingSoon").click(function () {
        $("#btnComingSoon").css({ 'background-color': 'orange' });
        $("#btnNowPlaying").css({ 'background-color': 'gray' });
        $("#btnAZ").css({ 'background-color': 'gray' });
        displayMovieList(1);
    });
    $("#btnAZ").click(function () {
        $("#btnAZ").css({ 'background-color': 'orange' });
        $("#btnComingSoon").css({ 'background-color': 'gray' });
        $("#btnNowPlaying").addClass("Apply-graycolor");
        displayMovieList(2);
    });
    $("button.movies.style").click(function () {
        window.open(href = "movie.html", "_self");

    });
    $("button.trailers.style").click(function () {
        var getlink = window.open(href = "moviesPage1.html", "_self");
    });
    $("button.myAccount.style").click(function () {
        window.open(href = "Account.html", "_self");
    });
    $("button.login").click(function () {
        window.open(href = "Login.html", "_self");
    });

    //$("button.back").on('click', function (e) {

    //  history.replaceState('Hi', null, 'movie.html', '_self');
    //  e.preventDefault();
    //  window.history.back();
    //  return false;

    //});





    function renderHTML(htmlData) {
        var htmlString = "";

        for (i = 0; i < htmlData.length; i++) {
            htmlString += "<a class='anchorTagForMovie' href='theater.html?heading="+ htmlData[i].Name +"&movieImage="+ htmlData[i].Image +"&movieRating="+ htmlData[i].Rating +" >";
            htmlString += "<img class='image' src=" + htmlData[i].Image + " />";
            htmlString += "<h2 class='heading'>" + htmlData[i].Name + "</h2>";
            htmlString += "<p class='discription'>" + htmlData[i].Genre + " " + htmlData[i].Length + "mins " + "<span class'ratingRedcolor'>" + htmlData[i].Rating + "</span>" + "<p class='starLeads'>" + htmlData[i].LeadStars + "</p>" + "<hr>" + "</a>";
            console.log(htmlData[i].Name);
            console.log(htmlData[i].Image);

        }

 //       console.log(htmlData[i].Name);
     //   console.log(htmlString);
        $("#movieList").html(htmlString);
    }
    displayMovieList()
});
