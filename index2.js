

$(document).ready(function () {
        
    
        $('#dep').click(function(){
        var query = "SELECT * FROM departments order by dept_no"
                $.getJSON("/departments?select="+ encodeURIComponent(query)  , function(data){
                        
                        $.each(data, function(key, value){
                                //alert(key + "----" + value)
                                //$.each(value, function(dep_num)
                                value["dept_no"]
                                value["dept_name"]
                                
                        })

                        console.log(data)



                });

        })
});
