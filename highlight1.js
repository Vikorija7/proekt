$(document).ready(function(){
    $("#search").keyup(function(){
        searchHighlight($(this).val());
    })


})
function searchHighlight(searchText)
       {  
            if (searchText)
            { 
                $(".highlight").removeClass("highlight");
                $("h4").each(function(index, content){             
                    var content = $(content).text();              var searchExp = new RegExp(searchText, "ig");  
                    var matches = content.match(searchExp);
                    if (matches)
                    {
                        $(this).html(content.replace(searchExp, function(match){
                            return "<span class='highlight'>" + match + "</span>";
                        }));
                    }               
                }) 
            } 
           else
             $(".highlight").removeClass("highlight");  
       }