

$(document).ready(function () {
        
    
$('#dep').click(function(){
        
        fetch('/departments')
        .then(
        function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
                response.status);
        return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
        console.log(data)
        var myJSON = JSON.stringify(data)
        $('test2').text("");
        $.each(data, function (index, value) {
                
                $('#test2').append(index+" "+ value+" <br>")
        });
        });
        })

        .catch(function(err) {
        console.log('Fetch Error :-S', err);
        });   


})
});
