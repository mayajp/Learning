$(document).ready(function(){
    var url = new URLSearchParams(window.location.search);
    var urlInfo = `<h3 class='blueColor'> ${url.get('heading')}</h3>
    <p>${url.get('movieRating')} ${url.get('theaterName')} ${url.get('theaterAddress')}</p>
    <p>Date: ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}${url.get('movieTime')}</p><hr />`;
    $(".urlparam").html(urlInfo);
    console.log(url);
    document.write(urlInfo); 
});

