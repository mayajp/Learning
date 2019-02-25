var movieList = document.getElementById("movieList");
var btnNowPlaying = document.getElementById("btnNowPlaying");
var btnComingSoon = document.getElementById("btnComingSoon");
var btnAZ = document.getElementById("btnAZ");
var loader = document.getElementById("loader");
var url = "http://api.kendomobilebook.com/api/Movies/GetMovieList/?listType="
var listType = 0;
var activeList = "";
//getting,processing and sending the request
//creating a function and passing variable list type
function displayMovieList(listType) {
    //declaring the variable and new HMLrequest
    var request = new XMLHttpRequest();
    //code for getting url+listype declared above,POST for ssend data
    request.open("GET", url + listType);
    //function for getting and converting data into JSON
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        window.addEventListener('load', function () {
            loader.style.display = 'show-me';
        });
        //console.log(data);
        //calling a function how the movies should display
        renderHTML(data);
        // sending request
        request.send();
    }
    //when click button execute calling the functio displayMovielist with listType variables
    btnNowPlaying.addEventListener("click", function () {
        //var request = new XMLHttpRequest();
        //request.open("GET", url + "0");
        // request.onload = function () {
        // var data = JSON.parse(request.responseText);
        //console.log(data);
        // renderHTML(data);
        //}
        // request.send();
        displayMovieList(0);
        //changing the styles of buttons after click

        document.getElementById("btnNowPlaying").style.backgroundColor = "orange";
        document.getElementById("btnComingSoon").style.backgroundColor = "grey";
        document.getElementById("btnAZ").style.backgroundColor = "grey";
    });
    btnComingSoon.addEventListener("click", function () {
        // var request = new XMLHttpRequest();
        //request.open("GET", url + "1");
        //request.onload = function () {
        //var data = JSON.parse(request.responseText);
        //console.log(data);
        //renderHTML(data);
        //}
        //request.send();
        displayMovieList(1);
        //function changeButtenColorOnClick() {
        document.getElementById("btnComingSoon").style.backgroundColor = "orange";
        document.getElementById("btnNowPlaying").style.backgroundColor = "grey";
        document.getElementById("btnAZ").style.backgroundColor = "grey";
        //}
    });
    btnAZ.addEventListener("click", function () {
        //var request = new XMLHttpRequest();
        // request.open("GET", url + "2");
        // request.onload = function () {
        //   var data = JSON.parse(request.responseText);
        //console.log(data);
        // renderHTML(data);
        //}
        //request.send();
        displayMovieList(2);
        //function changeButtenColorOnClick() {
        document.getElementById("btnAZ").style.backgroundColor = "orange";
        document.getElementById("btnNowPlaying").style.backgroundColor = "grey";
        document.getElementById("btnComingSoon").style.backgroundColor = "grey";
        //}
    });
    //this function will call from the function displayMovielist
    function renderHTML(htmlData) {
        var htmlString = "";
        for (i = 0; i < htmlData.length; i++) {
            htmlString += "<img class='image' src=" + htmlData[i].Image + " />";
            htmlString += "<h2 class='heading'>" + htmlData[i].Name + "</h2>";
            htmlString += "<p class='discription'>" + htmlData[i].Genre + " " + htmlData[i].Length + "mins " + htmlData[i].Rating + "</p>" + "<hr>";
        }
        console.log(htmlString);
        movieList.innerHTML = htmlString;
    };
