

var $form = $("form");
var $input = $("input");
var $random = $("#random");
var $results = $("#results");

function getWiki(search) {
    var address = "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=10&search=" + search + "&callback=?";
    
    
    $.getJSON(address, function(data) {
        console.log(data); 
        
        for(var i = 0; i < 10; i++) {
            var div = $("<div class='article'>");
            var addy = data[3][i];
            console.log(data[1][i]);
            div.append("<h3>" + data[1][i] + "</h3>");
            div.append("<p>" + data[2][i] + "</p>");
            console.log(div);
            var link = $("<a href=" + addy + ">");
            link.html(div);
            $results.append(link);
        }
        
        
  
        

        
    });
}

$random.on("click", function(e) {
    e.preventDefault();
    window.open("https://en.wikipedia.org/wiki/Special:Random");
});

$form.on("submit", function(e) {
    e.preventDefault();
    
    $results.html("");
    var search = $input.val();
    console.log(search);
    
    getWiki(search);
    

});




