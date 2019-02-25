var url = new URLSearchParams(window.location.search);
console.log("url " +url);
//var imagein = $('.image').attr('url');
//var heading = $('.heading').attr(url);
var movieHeading = url.get('heading');
var movieImage = url.get('movieImage');
var movieRating = url.get('movieRating');
//$("param").html(imagein);
//console.log(h);

var info = `<img src=${url.get('heading')} >`;

var date = new Date();
   // console.log(url.get('name'));
    var urlInfo = `<img class='image' src=${url.get('movieImage')} /><h3 class='blueColor'> ${url.get('heading')}</h3><p>
                    ${url.get('movieRating')}</p><p>Date: ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}<hr />`;
    $(".urlparam").html(urlInfo);

var theaterList = $("theaterList");
$(document).ready(function () {
    function displayTheaterList() {
        $.getJSON('http://api.kendomobilebook.com/api/Theater/Get/?movieId=1'
            , function (theaterData) {
                renderTheater(theaterData);
            });
    }

    $("button.back").on('click', function (e) {
        e.preventDefault();
        window.history.back();
    });

    function renderTheater(htmlTheaterData) {
        var htmlTheaterString = "";
        for (i = 0; i < htmlTheaterData.length; i++) {
            htmlTheaterString += "<p class='theaterHeadings'>" + '<b>' + htmlTheaterData[i].Name + '<b>' + " " + '<span class="colorRed">' + htmlTheaterData[i].MilesFromCurrentLoc + " Miles</span></p>";
            htmlTheaterString += "<p class='address'>" + htmlTheaterData[i].Address + "</p>";
            for (j = 0; j < htmlTheaterData[i].Timings.length; j++) {

                htmlTheaterString += `<p class='timings'><span>|<a class="greenColor" href='bookingPage.html?heading=${url.get('heading')}&movieRating=${url.get('movieRating')}&theaterName=${htmlTheaterData[i].Name}&theaterAddress=${htmlTheaterData[i].Address}&date=${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}&movieTime=${htmlTheaterData[i].Timings[j]}'>${htmlTheaterData[i].Timings[j]} </span></a></p>`;
            }
            htmlTheaterString += "<hr>";
            // console.log(htmlTheaterString);
        }
        $(".theaterList").html(htmlTheaterString);


    }
    displayTheaterList();
});
