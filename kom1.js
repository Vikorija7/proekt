var ime;
                ime=window.prompt("Dear visitor enter your name");

                var data = new Date();
                var datum = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;   

var komentar11;

$(document).ready(function(){
    var $komentari11 = $('#komentari11'); 
    if(localStorage.getItem("#komentari11")) { 
        $komentari11.html(localStorage.getItem("#komentari11"));   
                }

    $('#postbtn11').click(function(){
        komentar11 = document.getElementById("com11").value;
        $("#komentari11").append(`<li>${ime}: ${komentar11} <br> ${datum} </li>`);
        localStorage.setItem("#komentari11", $komentari11.html());
    });
});