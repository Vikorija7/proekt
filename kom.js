var ime;
                ime=window.prompt("Dear visitor enter your name");

                var data = new Date();
                var datum = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;   

var komentar1;

$(document).ready(function(){
    var $komentari1 = $('#komentari1'); 
    if(localStorage.getItem("#komentari1")) { 
        $komentari1.html(localStorage.getItem("#komentari1"));   
                }

    $('#postbtn1').click(function(){
        komentar1 = document.getElementById("com1").value;
        $("#komentari1").append(`<li>${ime}: ${komentar1} <br> ${datum} </li>`);
        localStorage.setItem("#komentari1", $komentari1.html());
    });

    var $komentari2 = $('#komentari2'); 
    if(localStorage.getItem("#komentari2")) { 
        $komentari2.html(localStorage.getItem("#komentari2"));
    }
    $('#postbtn2').click(function(){
        komentar2 = document.getElementById("com2").value;
        $("#komentari2").append(`<li>${ime}: ${komentar2} <br> ${datum} </li>`);
        localStorage.setItem("#komentari2", $komentari2.html());
    });
    

    var $komentari3 = $('#komentari3'); 
    if(localStorage.getItem("#komentari3")) { 
        $komentari3.html(localStorage.getItem("#komentari3"));
    }

    $('#postbtn3').click(function(){
        komentar3 = document.getElementById("com3").value;
        $("#komentari3").append(`<li>${ime}: ${komentar3} <br> ${datum} </li>`);
        localStorage.setItem("#komentari3", $komentari3.html());
    });
    var $komentari4 = $('#komentari4'); 
    if(localStorage.getItem("#komentari4")) { 
        $komentari4.html(localStorage.getItem("#komentari4"));
    }

    $('#postbtn4').click(function(){
        komentar4 = document.getElementById("com4").value;
        $("#komentari4").append(`<li>${ime}: ${komentar4} <br> ${datum} </li>`);
        localStorage.setItem("#komentari4", $komentari4.html());
    });
    var $komentari5 = $('#komentari5'); 
    if(localStorage.getItem("#komentari5")) { 
        $komentari5.html(localStorage.getItem("#komentari5"));
    }

    $('#postbtn5').click(function(){
        komentar5 = document.getElementById("com5").value;
        $("#komentari5").append(`<li>${ime}: ${komentar5} <br> ${datum} </li>`);
        localStorage.setItem("#komentari5", $komentari5.html());
    });
    var $komentari6 = $('#komentari6'); 
    if(localStorage.getItem("#komentari6")) { 
        $komentari6.html(localStorage.getItem("#komentari6"));
    }

    $('#postbtn6').click(function(){
        komentar6 = document.getElementById("com6").value;
        $("#komentari6").append(`<li>${ime}: ${komentar6} <br> ${datum} </li>`);
        localStorage.setItem("#komentari6", $komentari6.html());
    });
    var $komentari7 = $('#komentari7'); 
    if(localStorage.getItem("#komentari7")) { 
        $komentari7.html(localStorage.getItem("#komentari7"));
    }

    $('#postbtn7').click(function(){
        komentar7 = document.getElementById("com7").value;
        $("#komentari7").append(`<li>${ime}: ${komentar7} <br> ${datum} </li>`);
        localStorage.setItem("#komentari7", $komentari7.html());
    });
    var $komentari8 = $('#komentari8'); 
    if(localStorage.getItem("#komentari8")) { 
        $komentari8.html(localStorage.getItem("#komentari8"));
    }

    $('#postbtn8').click(function(){
        komentar8 = document.getElementById("com8").value;
        $("#komentari8").append(`<li>${ime}: ${komentar8} <br> ${datum} </li>`);
        localStorage.setItem("#komentari8", $komentari8.html());
    });
    var $komentari9 = $('#komentari9'); 
    if(localStorage.getItem("#komentari9")) { 
        $komentari9.html(localStorage.getItem("#komentari9"));
    }

    $('#postbtn9').click(function(){
        komentar9 = document.getElementById("com9").value;
        $("#komentari9").append(`<li>${ime}: ${komentar9} <br> ${datum} </li>`);
        localStorage.setItem("#komentari9", $komentari9.html());
    });
    var $komentari10 = $('#komentari10'); 
    if(localStorage.getItem("#komentari10")) { 
        $komentari10.html(localStorage.getItem("#komentari10"));
    }

    $('#postbtn10').click(function(){
        komentar10 = document.getElementById("com10").value;
        $("#komentari10").append(`<li>${ime}: ${komentar10} <br> ${datum} </li>`);
        localStorage.setItem("#komentari10", $komentari10.html());
    });






    $("#clear").click(function(){
        window.localStorage.clear();
    });

    $("#delete").click(function(){
        window.localStorage.removeItem(this);
    });
    
});